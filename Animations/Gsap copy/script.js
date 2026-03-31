// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all cutout images
const cutouts = gsap.utils.toArray(".cutout");
console.log(cutouts);

// For each cutout, create a scroll-triggered animation
cutouts.forEach((cutout, index) => {
  // Save the final CSS transform and positions defined in CSS as targets
  const finalTop = cutout.style.top;
  const finalLeft = cutout.style.left;
  const finalRight = cutout.style.right;
  const finalBottom = cutout.style.bottom;
  const finalRotate = cutout.style.transform;

  // Set initial styles away from final position to create animation from
  // (Example offsets: shifted up and sideways 200px, and rotated differently)
  gsap.set(cutout, {
    top: finalTop ? `calc(${finalTop} + 200px)` : "auto",
    left: finalLeft ? `calc(${finalLeft} - 200px)` : "auto",
    right: finalRight ? `calc(${finalRight} + 200px)` : "auto",
    bottom: finalBottom ? `calc(${finalBottom} - 200px)` : "auto",
    rotation: finalRotate
      ? parseFloat(finalRotate.replace(/[^\d.-]/g, "")) + 30
      : 30,
    opacity: 0,
  });

  // Animate to final position on scroll
  gsap.to(cutout, {
    top: finalTop || "auto",
    left: finalLeft || "auto",
    right: finalRight || "auto",
    bottom: finalBottom || "auto",
    rotation: finalRotate ? parseFloat(finalRotate.replace(/[^\d.-]/g, "")) : 0,
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#page1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
