/*Para trabajar con nodos en html solo nos van a interesar dos tipos
y son los nodos de tipo elemento y de tipo texto*/

/*CLASE 62*/ 
/*Metodos anteriormente utilizados*/ 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=> console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));

/*CLASE 63*/
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"))

/*Formas de cambiar el valor de un atributo*/

//Notación punto "." 
document.documentElement.lang="en"
console.log(document.documentElement.lang);

//Notación setAttribute
document.documentElement.setAttribute("lang","es-MX");

/*ALMACENAR ELEMENTOS DEL DOM EN VARIABLES*/
/*Guardar los elementos del DOM en variables
Es conveniente guardar los elementos del DOM en variables declaradas
por medio de la palabra reservada const, también puede ser mediante let.

Ademas también es recomendable utilizar anteponer el simbolo de dolar
en una variable para distinguir que son variables que guardan valores
del DOM 
*/

const $linkDOM=document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");

//Comprobar que exite ciero atributo
console.log($linkDOM.hasAttribute('rel'));
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));

/*DATA ATTRIBUTES*/
console.log($linkDOM.getAttribute("data-description"))
//Devuelve los atributos data
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

//Cambio de valor con setAttribute
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

//Cambio de valor con notacion punto "."
$linkDOM.dataset.description="Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));


