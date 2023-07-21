gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-20",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1), // "labels", // snap to the closest label in the timeline
      duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 0.4 seconds (determined by velocity)
      // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    },
    // snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container-20").offsetWidth
  }
});


