/*TEMPLATES
  Son machotes o modelos a seguir.La etiqueta template no es renderizada en el documento html
  
  APPENDCHILD: Siempre agrega contenido al final de nuestra etiqueta
  objetivo.
*/

//Guarda el contenedor de las cards
const $cards = document.querySelector(".cards");
//Tomo el contenido dentro del template card
$template = document.getElementById("template-card").content,
//Creo un fragmento para guardar los valores que serán cargados 
$fragment = document.createDocumentFragment(),

cardContent =[
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/nature"
    },

    {
        title:"Animales",
        img:"https://placeimg.com/200/200/nature"
    },

    {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/nature"
    },

    {
        title:"Gente",
        img:"https://placeimg.com/200/200/nature"
    },

    {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    },
];

cardContent.forEach(el => {

    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
