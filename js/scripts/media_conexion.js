const nv = navigator,
w = window,d = document;

export default function mediaDevice(id){

    const myContraints = {audio:true, video: true},
    $div_device = d.getElementById(id);

    nv.mediaDevices.getUserMedia(myContraints)
    .then(function(mediaStream){
      //$vid_camera.src = w.URL.createObjectURL(mediaStream);
      //$vid_camera.onloadedmetadata = function(e){};
      $div_device.srcObject = mediaStream;
      //$div_device.insertAdjacentElement("afterbegin",$vid_camera);
      console.log(w.URL);
    }).catch(function(err){

    });
}