/*NUEVOS METODOS DE INSERCION*/

/*
insertAdjacent...
    .insertAdjacentElement(position,el) = appendChild,insertBefore(Hace referencia a una etiqueta o contenido HTML)
    .insertAdjacentHTML(position,html)  = innerHTML (Hace referencia a texto en forma de HTML)
    .insertAdjacentText(position,text)  = textContent (Nodos de texto)

    Posiciones
    beforebegin(hermano anterior) => Ejem antes de un parrafo
    afterbegin(primer hijo)       => Al principio de un elemento tomado como referencia
    beforeend(ultimo hijo)        => Al final de un elemento tomado como referencia
    afterend(hermano siguiente)   => Hermano posterior

    
*/ 

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");


/*
$newCard.innerHTML=`
    <img src="" alt="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
*/

let $contentCard=`
    <img src="" alt="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
$cards.insertAdjacentElement("afterbegin",$newCard);

/*METODOS QUE HACEN REFERENCIA A METODOS JQUERY DE FORMA NATIVA EN  JS*/
//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
//$cards.after($newCard);

//$cards.insertAdjacentElement("beforebegin",$newCard);
//$cards.insertAdjacentElement("afterend",$newCard)

