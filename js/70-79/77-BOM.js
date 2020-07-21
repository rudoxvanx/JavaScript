/*MANEJO DEL BOM(Browser Object Model)*/



window.addEventListener("resize",e=>{
    console.clear();
    console.log("********Evento Resize*********");
    //Muestra el ancho total del viewport
    console.log(window.innerWidth);

    //Muestra el alto total del viewport
    console.log(window.innerHeight);

    //Muestra el ancho total de la ventana del navegador
    console.log(window.outerWidth);

    //Muestra el alto total de la ventana del navegador
    console.log(window.outerheight);
    console.log(e);    
});

window.addEventListener("scroll",e => {
    console.clear();
    console.log("********Evento Scroll*********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);  
});


/* Tarda mucho más en cargar ya que espera que se parsee
la etiqueta DOCTYPE hasta la etiqueta /html. Ademas
se cargan espera a que se cargen scripts, imagenes, hojas de estilos 

PETICIONES ASINCRONAS: Pausan el parseo del DOM
*/
window.addEventListener("load",e => {
    //console.clear();
    console.log("********Evento Load*********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);  
});


/*Carga mucho más rapido es parecido al document.ready de jquery
Es disparado cuando elemento html ha sido cargado y parseado,
es decir desde la etiqueta DOCTYPE hasta /html.

No es pera a que carguen las hojas de estilos, las imagenes, los
scripts*/
document.addEventListener("DOMContentLoaded",e =>{
    //console.clear();
    console.log("********Evento DOMContentLoaded*********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);  
})
