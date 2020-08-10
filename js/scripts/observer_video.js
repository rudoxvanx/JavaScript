const d = document;

export default function observerVideo(selector){
   
   //Guarda los elementos del tipo video para ser observados
   const $videos = d.querySelectorAll(selector);

   const handleIntersecting = (videos)=>{
       videos.forEach(video => {
           if(video.isIntersecting) {
               video.target.play();
              console.log(video,"Is intersecting");
           }else{
                video.target.pause();
           }
       });
   }

   const observador_video = new IntersectionObserver(handleIntersecting,{threshold:0.5});

   $videos.forEach(video=>observador_video.observe(video));

}