gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({ repeatDelay: 1, scrolltrigger: {} })
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
