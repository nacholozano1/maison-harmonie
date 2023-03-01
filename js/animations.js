gsap.registerPlugin(ScrollTrigger);

gsap.from(".titleAnim", {
    scrollTrigger:{
        trigger: ".container2",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".textAnim", {
    scrollTrigger:{
        trigger: ".container2",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".carusi", {
    scrollTrigger:{
        trigger: ".divCarousel",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.to(".imgCont", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".imgContainer",
      scrub: true,
    }, 
  });

  gsap.to(".imgCont2", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".imgContainer",
      scrub: true,
    }, 
  });

  gsap.from(".imgCont", {
    scrollTrigger:{
        trigger: ".imgContainer",
        start: "10% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 1.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

  gsap.from(".imgCont2", {
    scrollTrigger:{
        trigger: ".imgCont2",
        start: "0% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 1.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".titleAnim2", {
    scrollTrigger:{
        trigger: ".contScroll",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".textAnim2", {
    scrollTrigger:{
        trigger: ".contScroll",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.to(".imgCont3", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollContainer",
      scrub: true,
    }, 
  });

  gsap.to(".imgCont4", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollContainer",
      scrub: true,
    }, 
  });

  gsap.from(".imgCont3", {
    scrollTrigger:{
        trigger: ".scrollContainer",
        start: "10% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

  gsap.from(".imgCont4", {
    scrollTrigger:{
        trigger: ".imgCont4",
        start: "0% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".titleAnim3", {
    scrollTrigger:{
        trigger: ".contScroll2",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".textAnim3", {
    scrollTrigger:{
        trigger: ".contScroll2",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".titleAnim4", {
    scrollTrigger:{
        trigger: ".contScroll3",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".textAnim4", {
    scrollTrigger:{
        trigger: ".contScroll3",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".location", {
    scrollTrigger:{
        trigger: ".contScroll4",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".map", {
    scrollTrigger:{
        trigger: ".contScroll4",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".h2Airbnb", {
    scrollTrigger:{
        trigger: ".contScroll5",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".imagesAirbnb", {
    scrollTrigger:{
        trigger: ".contScroll5",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".redes", {
    scrollTrigger:{
        trigger: ".contScroll5",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".imgLogoFooter", {
    scrollTrigger:{
        trigger: ".containerFooter",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});