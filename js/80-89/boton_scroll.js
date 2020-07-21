const d = document,
w =window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    
    console.log(window.pageXOffset,d.documentElement.scrollTop);
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageXOffset || d.scrollingElement.scrollTop
        
        if(scrollTop > 600){
           $scrollBtn.classList.remove("hidden");
        }
        else{
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:'smooth',
                top:0,
                left:0
            });
        }
    })


}