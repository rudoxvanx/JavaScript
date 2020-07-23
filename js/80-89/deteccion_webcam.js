const d = document,
n = navigator;

export default function webcam(id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({
            video:true,
            audio:false
        })
        .then(stream =>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err =>{
            //`Sucedio el siguiente error! ${err}`;
            $video.insertAdjacentHTML("beforebegin",
            `<p><mark>${err}</mark></p>`);
        });
    }
}