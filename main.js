gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    repeatDelay: 1,
  })
  .from("h1", {
    opacity: 0,
    y: 300,
    duration: 2,
  })
  .from("p", {
    opacity: 0,
    y: -300,
    duration: 2,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "+=150%",
      scrub: true,
      pin: true,
    },
  })
  .to("img", {
    scale: 5,
    transformOrigin: "top center",
    ease: "power1.inOut",
  })
  .to(".backgroundImage.heroPage", {
    scale: 1.1,
    transformOrigin: "center center",
    ease: "slow(0.7,0.7,false)",
  })
  .to("h1", {
    opacity: 0,
    y: -300,
    duration: 2,
  })
  .to("p", {
    opacity: 0,
    y: 300,
    duration: 2,
  });
