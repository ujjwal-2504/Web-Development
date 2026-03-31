// script.js
// GSAP + ScrollTrigger must be included before this file.

gsap.registerPlugin(ScrollTrigger);

(function () {
  const page = document.querySelector(".page");
  const hero = document.querySelector(".hero-content");
  const cutouts = gsap.utils.toArray(".cutout");
  const titleWrap = document.querySelector("#title-wrap");
  const centerImage = document.querySelector("#center-image");
  const coverImages = document.querySelectorAll(".cover-image");
  const coverTop = document.querySelector("#cover-image-top");
  const coverBottom = document.querySelector("#cover-image-bottom");
  const coverRight = document.querySelector("#cover-image-right");
  const coverLeft = document.querySelector("#cover-image-left");

  if (!page || !hero || cutouts.length === 0 || !centerImage) {
    console.warn("Missing required elements for GSAP cutout animation.");
    return;
  }

  // Wait until images load so measurements are correct
  const images = Array.from(document.images);
  const imgsToWait = images.filter((img) => !img.complete);

  const onAllImagesLoaded = () => {
    initAnimation();
    ScrollTrigger.refresh();
  };

  if (imgsToWait.length === 0) {
    onAllImagesLoaded();
  } else {
    let loaded = 0;
    imgsToWait.forEach((img) => {
      img.addEventListener("load", () => {
        loaded++;
        if (loaded === imgsToWait.length) onAllImagesLoaded();
      });
      img.addEventListener("error", () => {
        loaded++;
        if (loaded === imgsToWait.length) onAllImagesLoaded();
      });
    });
  }

  function initAnimation() {
    // ==== Tunables ====
    const RANDOM_X = Math.max(window.innerWidth * 0.6, 700);
    const RANDOM_Y = Math.max(window.innerHeight * 0.6, 500);
    const ROTATION = 30;
    const SCALE_MIN = 0.75;
    const SCALE_MAX = 1.15;
    const STAGGER_ASSEMBLE = 0.12;
    const BASE_DURATION_ASSEMBLE = 2.2;
    const STAGGER_COLLAPSE = 0.03;
    const COLLAPSE_DURATION = 1.8;
    const SCRUB = 1.6;
    // Center image growth tuning
    const CENTER_START_SCALE = 0.75;
    const CENTER_TARGET_SCALE = 1.12;
    const CENTER_EXTRA_ZOOM = 1.18;
    // ==================

    // Calculate animation length according to .page height
    const pageHeight = page.offsetHeight;
    const endDistance = pageHeight;

    // Kill previous triggers/timelines so re-init is safe
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.globalTimeline.clear();

    // Ensure center image starts hidden and small
    centerImage.style.opacity = "0";
    centerImage.style.transform = `scale(${CENTER_START_SCALE})`;
    centerImage.style.transformOrigin = "center center";

    // Split title text into words for wave animation
    const titleText = document.querySelector("#title-text");
    const ranchiText = document.querySelector("#ranchi");
    const titleLogo = document.querySelector("#title-logo");

    // Split text into words and wrap each in a span
    if (titleText) {
      const words = titleText.textContent.trim().split(/\s+/);
      titleText.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
    }

    if (ranchiText) {
      ranchiText.innerHTML = `<span class="word">${ranchiText.textContent}</span>`;
    }

    // Get all word spans
    const wordSpans = titleWrap.querySelectorAll(".word");

    // Stage 1: assemble from random positions into your CSS positions
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "+=" + endDistance,
        scrub: SCRUB,
        pin: hero,
        anticipatePin: 1,
        // markers: true, // enable while debugging
      },
    });

    // 1) Assembly: the images come from random off-screen-ish positions
    tl.from(
      cutouts,
      {
        x: () => gsap.utils.random(-RANDOM_X, RANDOM_X),
        y: () => gsap.utils.random(-RANDOM_Y, RANDOM_Y),
        rotation: () => gsap.utils.random(-ROTATION, ROTATION),
        scale: () => gsap.utils.random(SCALE_MIN, SCALE_MAX),
        opacity: 0,
        duration: BASE_DURATION_ASSEMBLE,
        stagger: STAGGER_ASSEMBLE,
      },
      0
    );

    // Compute deltas from each element to the visual center of the hero
    const heroRect = hero.getBoundingClientRect();
    const heroCenter = {
      x: heroRect.left + heroRect.width / 2,
      y: heroRect.top + heroRect.height / 2,
    };

    const deltas = cutouts.map((el) => {
      const r = el.getBoundingClientRect();
      const elCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      return {
        x: heroCenter.x - elCenter.x,
        y: heroCenter.y - elCenter.y,
      };
    });

    // For titleWrap compute its delta as well
    let titleDelta = null;
    if (titleWrap) {
      const tr = titleWrap.getBoundingClientRect();
      const tCenter = { x: tr.left + tr.width / 2, y: tr.top + tr.height / 2 };
      titleDelta = { x: heroCenter.x - tCenter.x, y: heroCenter.y - tCenter.y };
    }

    // Initial title animation (first appearance)
    tl.from(titleLogo, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    tl.from(
      wordSpans,
      {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: {
          each: 0.08,
          ease: "power2.out",
        },
        ease: "back.out(1.4)",
      },
      "-=0.3"
    );

    // Stage 2: collapse everything to center and reveal/scale center-image

    // 2a) Collapse cutouts into center and fade them out
    tl.to(
      cutouts,
      {
        x: (i) => deltas[i].x,
        y: (i) => deltas[i].y,
        scale: 0.12,
        opacity: 0,
        rotation: () => gsap.utils.random(-6, 6),
        duration: COLLAPSE_DURATION,
        stagger: STAGGER_COLLAPSE,
        ease: "power2.in",
      },
      "+=0.15"
    );

    // 2b) Collapse titleWrap into center and fade it out
    if (titleWrap) {
      tl.to(
        titleWrap,
        {
          x: titleDelta.x,
          y: titleDelta.y,
          scale: 0.45,
          opacity: 0,
          duration: COLLAPSE_DURATION,
          ease: "power2.in",
        },
        "-=" + COLLAPSE_DURATION * 0.7
      );
    }

    // 2c) Reveal center image
    tl.to(
      centerImage,
      {
        opacity: 1,
        scale: CENTER_TARGET_SCALE,
        duration: COLLAPSE_DURATION + 0.6,
        ease: "power3.out",
        onStart() {
          centerImage.style.pointerEvents = "none";
        },
      },
      "-=" + COLLAPSE_DURATION * 0.8
    );

    // Final gentle zoom on the center image
    tl.to(
      centerImage,
      {
        scale: CENTER_EXTRA_ZOOM,
        duration: 1.2,
        ease: "power2.out",
      },
      "+=0.08"
    );

    // Label for cover images spread
    tl.addLabel("spread");
    const coverImgArr = Array.from(coverImages);

    // Animate cover images spreading out
    for (let i = 0; i < 4; i++) {
      const offset = (function () {
        if (i === 0)
          return { opacity: 1, y: -120, duration: 1.5, ease: "back.out(1.2)" };
        if (i === 1)
          return { opacity: 1, x: 400, duration: 1.5, ease: "back.out(1.2)" };
        if (i === 2)
          return { opacity: 1, y: 150, duration: 1.5, ease: "back.out(1.2)" };
        if (i === 3)
          return { opacity: 1, x: -400, duration: 1.5, ease: "back.out(1.2)" };
      })();
      tl.to(coverImgArr[i], offset, "spread");
    }

    // Reset titleWrap position and opacity for re-appearance
    tl.set(titleWrap, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      backgroundColor: "#fff",
      borderRadius: "16px", // optional, looks cleaner with glow
      boxShadow: "0 0 20px 10px #fff", // soft blue glow
      padding: "30px",
      top: 300,
      right: 450,
    });

    // Set individual elements to hidden state before animating them in
    tl.set(titleLogo, { y: 80, opacity: 0 });
    tl.set(wordSpans, { y: 100, opacity: 0 });

    // Title re-appears after cover images with wave animation

    tl.to(titleLogo, {
      y: 5,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });

    tl.to(wordSpans, {
      y: 5,
      opacity: 1,
      duration: 1,
      stagger: {
        each: 0.08,
        ease: "power2.out",
      },
      ease: "back.out(1.4)",
    });

    // Performance hints
    ScrollTrigger.addEventListener("refreshInit", () =>
      cutouts.forEach((el) => (el.style.willChange = "transform, opacity"))
    );
    ScrollTrigger.addEventListener("refresh", () =>
      cutouts.forEach((el) => (el.style.willChange = ""))
    );
  }

  // Re-init on resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
      if (document.readyState === "complete") {
        initAnimation();
      }
    }, 200);
  });
})();
