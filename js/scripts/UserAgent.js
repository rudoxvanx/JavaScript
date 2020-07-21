const d = document;
const w = window;

export default function detectarUserAgent(idPlace){
    const $place = d.getElementById(idPlace);
    $place.innerHTML = navigator.userAgent;


}