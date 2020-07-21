const d = document , w = window ;

export default function createWindowSite(btn,idWidth,idHeight,idLink){
    const $input_height = d.getElementById(idWidth),
    $input_width = d.getElementById(idHeight),
    $input_link = d.getElementById(idLink);

    d,addEventListener("click", e => {
        if(e.target.matches(btn)){
            console.log($input_width,$input_height);
            console.log("Hola") 
            w.open($input_link.value,'',
            `width=${$input_width.value}px height=${$input_height.value}px`);
        }
    });

}