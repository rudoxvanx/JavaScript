const d = document;

export default function iniciarObservador(selector,selector_menu){
    const $secciones = d.querySelectorAll(selector),
    $opciones_menu = d.querySelectorAll(selector_menu);
    
    console.log($opciones_menu);
    
    const handleIntersect = (secciones) => {
        secciones.forEach(seccion => {
            if(seccion.isIntersecting){
                console.log(`${seccion.target.id} Is intersecting`);
                $opciones_menu.forEach(opcion => {
                    if(opcion.href.slice(opcion.href.indexOf('#'),opcion.href.length).replace('#','') === seccion.target.id)
                    {
                        opcion.style.background="red";
                    }
                    else 
                    {
                        opcion.style.background="";
                    }
                    //let sn = opcion.href.slice(opcion.href.indexOf('#'),opcion.href.length).replace('#','');
                    
                });
            }
        });
    }
    
    const observador = new IntersectionObserver(handleIntersect);
    $secciones.forEach(seccion => {observador.observe(seccion)});

}