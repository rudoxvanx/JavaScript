/*ESTILOS CSS*/

/*FORMAS DE OBTENER ATTRIBUTES STYLES*/
const $linkDOM=document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));


/*FORMAS DE ESTABLECER VALORES*/
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";


console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//VARIABLES CSS- Custom-Properties
const $html = document.documentElement,
$body = document.body;



let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);
$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;

//Establece que la variable sea igual a pink en la etiqueta html
$html.style.setProperty("--dark-color","pink");

//Obtener el valor de la variable --dark-color 
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");

//Asignar o establecer el valor de la variable en la etiqueta body
$body.style.setProperty("background-color",varDarkColor);
/* 



*/