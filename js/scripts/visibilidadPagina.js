const d = document;

export default function visibilidad(){

    const $video = d.querySelector("video[data-video]");
    
    d.addEventListener('visibilitychange',e => {
        if(d.visibilityState === 'hidden'){
            $video.pause();
        }else{
            $video.play();
        }
    });
}