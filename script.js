var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursorblur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrblur.style.left=dets.x - 250+"px"
    crsrblur.style.top=dets.y - 250 +"px"
})
// var h4all=document.querySelectorAll("#nav h4")
// h4all.forEach(function (elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale=3
//         crsr.style.border= "1px solid #fff"
//         crsr.style.backgroundColor="transparent"
//     })
//      elem.addEventListener("mouseleave",function(){
//         crsr.style.scale=1
//         crsr.style.border= "0px solid #95C11E"
//         crsr.style.backgroundColor="#95C11E"
//     })

// })





gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scrolller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub: 3


    }
})
gsap.from("#about-us img,#about-usin",{
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:" top 50%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:" top 60%",
        scrub:2
    }

})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:" top 45%",
        scrub:2

    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:" top 45%",
        scrub:2

    }

})
gsap.from("#page4 h1",{
    y:50,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:" top 50%",
        scrub:3

    }

})






