/*EVENTOS
Controlar las acciones del usuario
y definir ciertos comportamientos del documuento que 
sucedan en un cierto momento cuando se cumplan algunas 
condiciones.

Las acciones que se llevan acabo dentro del evento se llaman
eventhandler(manejadores,escuchadores,observador o oyentes)*/

/*FORMAS DE AGREGAR UN EVENTO 
    -Por medio de atributo
    -Por medio de una funcion en el documento javascript
    -Semanticamente siguiendo siempre un orden definido

*/

function holaMundo(){
    alert('Hola Mundo');
    //Cuando una función se convierte en un manejador de evento
    //nosotros podemos acceder al objeto manejador en si, osea event
    //target:muestra quien genero el evento
    //type: muestra el tipo de evento
    console.log(event);
}

function saludar(nombre="Desconocido"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoSemantico=document.getElementById("evento-semantico"),
$eventoMultiple=document.getElementById("evento-multiple"),
$eventoRemover=document.getElementById("evento-remover");
//Importante sin los parentesis ya que si los coloco la función
//se ejecutara desde el momento que el navegador carga la página.
//Su unica limitante esque solo se puede asignar una funcion al evento
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){
    alert('Hola Mundo manejador de eventos semantico');
    console.log(e);
    //event => e
};

/*IMPORTANTE 
Una función que sirve como manejadora de eventos nunca puede recibir 
parametros. */

/* EVENTO MULTIPLE
Se refiere a ejecutar varias funciones que se hayan definido
en diferentes manejadores al mismmo evento. */

//holaMundo sin los parentesis para que no se ejecute al cargar la ventana del navegador
$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert('Hola Mundo manejador de eventos multiples');
    console.log(e.type);
    console.log(e.target);
    console.log(event);
    
});

/*PASAR PARAMETROS A UNA FUNCION MANEJADORA EVENTO
Para lograrlo tenemos que envolver la funcion que recibira los
parametros en otra.*/

//$eventoMultiple.addEventListener("click",saludar)
$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Rudolf");
});


/*REMOVER EVENTOS*/
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener('dblclick',removerDobleClick);
    $eventoRemover.disabled = true;

}

$eventoRemover.addEventListener("dblclick",removerDobleClick);

