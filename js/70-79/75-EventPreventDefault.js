/*FLUJO DE EVENTOS
    Forma en que se propaga un evento.Esta propagación se da desde
    el evento más interno hasta el evento más externo.Se nombra 
    forma burbuja(esquema soportado por los navegadores).
*/

const $divEventos=document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");
console.log($divEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className} el click lo originó ${e.target.className}`);  

    //Detiene la propagacion del evento
    e.stopPropagation();
}

$divEventos.forEach(div=>{
    //Fase de burbuja del interno al externo
    div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);
    
    //Fase de captura(más optima no consume tanto recurso) del externo al interno
    //div.addEventListener("click",flujoEventos,true);

    /*
    div.addEventListener("click",flujoEventos,{
        capture:false,
        once:true
    });*/
});

$linkEventos.addEventListener("click",e=>{
    alert("Hola soy tu amigo Rudolf");
    e.preventDefault();
    e.stopPropagation();
})

