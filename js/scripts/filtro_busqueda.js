const d = document;

export default function busqueda(id_input,id_busqueda){

 const $input = d.getElementById(id_input),
 $busqueda = d.getElementById(id_busqueda),
 $cards = d.querySelectorAll("figure");

 d.addEventListener("keyup",e => {
    let $figcaption,
    filtro = $input.value.toUpperCase()
    ,textValue;

    if(e.target.matches(id_input))
    {
        for (const $card of $cards) {
            $figcaption = $card.getElementsByTagName("figcaption")[0];
            textValue = $figcaption.innerText || $figcaption.textContent;
            if(textValue.toUpperCase().indexOf(filtro) > -1){
                $card.style.display = "";
            }else{
                $card.style.display = "none"
            }
        }
    }

 })

}