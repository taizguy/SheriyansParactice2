const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.textAnimate("#chero-text h1", {
    
    style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
  

gsap.from(".anim", {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1

})

Shery.imageEffect("#chero img", {
    style: 4,
  
})