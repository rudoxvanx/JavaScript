const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
//Clona un contenedor de cards con cloneNode el true pasado 
//sirve para copiar la estructura como tal.
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML=`
    <img src="" alt="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
//$cards.replaceChild($newCard,$cards.children[2]);

//INSERTAR UN NODO APARTIR DE UNO TOMADO COMO REFERENCIA
//$cards.insertBefore($newCard,$cards.firstElementChild);

//REMOVER UN NODO
//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);