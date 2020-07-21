/*MANIPULACION DE CLASES CSS*/

//Obtenemos el elemento card del cuerpo html
const $card=document.querySelector(".card");

console.log($card);

//Obtiene la clase del elemento html
console.log($card.className);

//Muestras las clases que contiene cierto elemento html
console.log($card.classList);

//Devuelve un booleano para saber si un elemento contiene cierta clase
console.log($card.classList.contains("rotate-45"));

//Le agrega a un elemento html la clase especificada
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

//Elimina de un elemento html la clase especificada
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

//Hace un toggle quitando o agregando la clase especificada
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

//Remplaza la clase especificada por otra clase especificada
$card.classList.replace("rotate-45","rotate-135");

//Agrega un conjunto de clases a un elemento html
$card.classList.add("opacity-80","sepia");

//Elimina un conjunto de clases a un elemento html
$card.classList.remove("opacity-80","sepia");

//Hace un toggle quitando o agregando un conjunto de clases 
$card.classList.toggle("opacity-80","sepia");