/*FLUJO DE EVENTOS
    Forma en que se propaga un evento.Esta propagación se da desde
    el evento más interno hasta el evento más externo.Se nombra 
    forma burbuja(esquema soportado por los navegadores).
*/

//const $divEventos=document.querySelectorAll(".eventos-flujo div"),
//$linkEventos = document.querySelector(".eventos-flujo a");
//console.log($divEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this} el click lo originó ${e.target.className}`);  

    //La propagación se omite porque estamos en un único node padre
    //Detiene la propagacion del evento
    //e.stopPropagation();
}

document.addEventListener("click",(e)=>{

    console.log(`Click en, ${e.target}`);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo Rudolf");
        e.preventDefault();
    }
});

