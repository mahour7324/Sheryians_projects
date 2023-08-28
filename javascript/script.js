var timeout = 1 ;

function mousemove(scaleX,scaleY){
    const ball = document.querySelector(".ball");
    window.addEventListener("mousemove",(dets)=>{
        ball.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${scaleX} ,${scaleY})`
    })
}
function squzemouse(){

 
    // define defualt scale value
    let scaleX = 1;
    let scaleY = 1;

    var preX = 0;
    var preY = 0;

    window.addEventListener("mousemove",(dets)=>{
    const ball = document.querySelector(".ball");

        clearTimeout(timeout)
        let xdiff  = dets.clientX - preX
        preX = dets.clientX
        let ydiff  = dets.clientY - preY
        preY = dets.clientY
        scaleX = gsap.utils.clamp(0.8,1.2,xdiff )
        scaleY = gsap.utils.clamp(0.8,1.2,ydiff )

        mousemove(scaleX,scaleY);
        timeout = setTimeout(() => {
        ball.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
            
        }, 100);

        
    })

}
squzemouse()


