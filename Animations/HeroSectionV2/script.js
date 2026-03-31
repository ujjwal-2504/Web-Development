gsap.registerPlugin(ScrollTrigger);

(function () {
  const page = document.querySelector(".page");
  const hero = document.querySelector(".hero-content");
  const titleWrap = document.querySelector("#gdg-title-wrap");
  const centerImage = document.querySelector("#center-image");
  const coverImages = document.querySelectorAll(".cover-image");

  if (!page || !hero || !centerImage) {
    console.warn("Missing required elements for GSAP animation.");
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
    const COLLAPSE_DURATION = 1.8;
    const SCRUB = 1.6;
    const CENTER_START_SCALE = 0.75;
    const CENTER_TARGET_SCALE = 1.12;
    const CENTER_EXTRA_ZOOM = 1.18;
    // ==================

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
    const titleText = document.querySelector("#gdg-title-text");
    const ranchiText = document.querySelector("#ranchi");
    const titleLogo = document.querySelector("#gdg-title-logo");

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

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "+=" + endDistance,
        scrub: SCRUB,
        pin: hero,
        anticipatePin: 1,
      },
    });

    // Compute hero center for title collapse
    const heroRect = hero.getBoundingClientRect();
    const heroCenter = {
      x: heroRect.left + heroRect.width / 2,
      y: heroRect.top + heroRect.height / 2,
    };

    let titleDelta = null;
    if (titleWrap) {
      const tr = titleWrap.getBoundingClientRect();
      const tCenter = {
        x: tr.left + tr.width / 2,
        y: tr.top + tr.height / 2,
      };
      titleDelta = {
        x: heroCenter.x - tCenter.x,
        y: heroCenter.y - tCenter.y,
      };
    }

    // Collapse titleWrap into center and fade it out
    // if (titleWrap) {
    //   tl.to(
    //     titleWrap,
    //     {
    //       x: titleDelta.x,
    //       y: titleDelta.y,
    //       scale: 0.45,
    //       opacity: 0,
    //       duration: COLLAPSE_DURATION,
    //       ease: "power2.in",
    //     },
    //     "+=0.15"
    //   );
    // }

    // Reveal center image
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
          return {
            opacity: 1,
            y: -120,
            duration: 1.5,
            ease: "back.out(1.2)",
          };
        if (i === 1)
          return {
            opacity: 1,
            x: 400,
            duration: 1.5,
            ease: "back.out(1.2)",
          };
        if (i === 2)
          return {
            opacity: 1,
            y: 150,
            duration: 1.5,
            ease: "back.out(1.2)",
          };
        if (i === 3)
          return {
            opacity: 1,
            x: -400,
            duration: 1.5,
            ease: "back.out(1.2)",
          };
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
      borderRadius: "16px",
      boxShadow: "0 0 20px 10px #fff",
      padding: "30px",
      // top: 300,
      // right: 450,
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
