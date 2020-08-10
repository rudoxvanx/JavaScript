const d = document;

export default function visibilidad(){
    d.addEventListener('visibilitychange',e => {
        if(!document.visibilityState ==='visible'){
            alert("SI FUNCIONA");
        }
    });
}