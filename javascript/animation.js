const tl = gsap.timeline();
tl.from("nav>a",{
    y:-30,
    opacity:0.1
})
tl.to(".innerHidden",{
    y:-1,
    opacity:100,
    stagger:0.2
})
tl.from(".firstFooter a",{
    opacity:0
})

// second page Animation

// function imageanimation(){
//     document.querySelectorAll(".elem").forEach((element)=>{
//         element.addEventListener("mousemove",(dets)=>{
//             let newtop = dets.clientY - element.getBoundingClientRect().top 
//             // console.log(element.getBoundingClientRect().top)
//             console.log(newtop)
//             gsap.to(element.querySelector("img"),{
//                 opacity: 1,
//                 ease: Power3,
//                 top:newtop-100,
//                 left:dets.clientX-200,
//             })
           
//         })
            
//         element.addEventListener("mouseleave",(dets)=>{
            
//             gsap.to(element.querySelector("img"),{
//                 opacity: 0,
//                 ease: Power3,
                
                
//             })
           
//         })
            
        
            
    
//     })


    
    
        
// }
// imageanimation();