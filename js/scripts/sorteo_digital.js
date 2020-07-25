const d = document;

export default function getAleatorio(btn){

    const lenguajes = ["Javascript","Java","Php","Python","C++","C","C#","Perl"];
    let ganador;
        
    d.addEventListener("click",e => {

        if(e.target.matches(btn)){
            ganador = Math.floor(Math.random() * (lenguajes.length));
            alert(`El ganador en este sorteo es: ${lenguajes[ganador]}`);
        }
    });
    
}