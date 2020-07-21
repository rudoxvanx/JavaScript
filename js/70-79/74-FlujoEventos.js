/*FLUJO DE EVENTOS
    Forma en que se propaga un evento.Esta propagación se da desde
    el evento más interno hasta el evento más externo.Se nombra 
    forma burbuja(esquema soportado por los navegadores).
*/

const $divEventos=document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className} el click lo originó ${e.target.className}`);  
}

$divEventos.forEach(div=>{
    //Fase de burbuja del interno al externo
    //div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);
    
    //Fase de captura(más optima no consume tanto recurso) del externo al interno
    //div.addEventListener("click",flujoEventos,true);

    div.addEventListener("click",flujoEventos,{
        capture:false,
        once:true
    });
});

