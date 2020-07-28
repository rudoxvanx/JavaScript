const d = document;

let slideIndex = 1;

export function plusSlides(anterior,siguiente){
    
    d.addEventListener("click",e => {

        if(e.target.matches(anterior)){
            showSlides(slideIndex+= -1);
        }else if(e.target.matches(siguiente)){
            showSlides(slideIndex+= 1);
        }
    });

   
}

export function currentSlide(n){

    showSlides(slideIndex = n);
}

export function showSlides(n){
    let i;
    const slides = d.querySelectorAll(".noVisible");


    if(n > slides.length){ slideIndex = 1; }
    if(n < 1){ slideIndex = slides.length; }

    for(let i = 0;i < slides.length;i++){
        slides[i].style.display ="none";
    }
    slides[slideIndex-1].style.display = "block";
 
}
