var tl = gsap.timeline()

gsap.from("nav h1",{
    y:-100,
    opacity:0,
    duration: 1,
    stagger: 0.1,
})
gsap.from(".nav-right h2",{
    y:-100,
    duration: 1,
    stagger: 0.1,
})
gsap.from(".center h2",{
    x:-500,
    duration: 1,
    stagger:0.1,
})

gsap.from("img",{
    x:600,
    opacity:0,
    rotate:200,
    duration:1,
    stagger:0.4,
})
gsap.from(".bottom",{
    duration: 4,
    opacity:0,
    stagger: 0.1,
})
gsap.to(".page2",{
    backgroundColor:"white",
    duration:6,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
    }
})