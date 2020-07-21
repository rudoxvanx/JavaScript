/*CREACION DE NODOS 1 a 1*/

const $figure=document.createElement("figure"),
$img=document.createElement("img"),
$figcaption=document.createElement("figcaption"),
$figcaptionText=document.createTextNode("Animales"),
$cards=document.querySelector(".cards"),
$figure2=document.createElement("figure");


$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card")
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure);



$figure2.innerHTML = `
    <img src="" alt="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones=["Primavera","Verano","Otoño","Invierno"],
$ul=document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el)=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
});


const continentes=["America","Africa","Asia","Europa","Oceania"],
$ul2=document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML ="";

continentes.forEach((el)=>{$ul2.innerHTML+=`<li>${el}</li>`});

const meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",

];

$ul3=document.createElement("ul");
$fragment=document.createDocumentFragment();

meses.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);