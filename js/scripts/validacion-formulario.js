const d = document;

export default function validacionForm(){

    let expRegNom = /^[a-zA-Z]+\s?[a-zA-Z]*$/,
    textValue,textValue2,textValue3,textValue4,
    exprRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    exprRegAsunto =/^[a-zA-ZáÁéÉíÍÓóúÚ]+$/,
    expreRegComentario = /^[a-zA-ZáÁéÉíÍóÓúÚ]{255,}$/;

    //var regex = "^\\s+$";
    //var regex = /^\s+$/;
    
    d.addEventListener("keyup",e => {
        textValue = d.getElementById("nombre").value;
      
        if(e.target.matches("#nombre") === true){
            if(expRegNom.test(textValue)){
              if(d.getElementById("message-nom").classList.contains("message")){
                 d.getElementById("message-nom").classList.remove("message");
                 d.getElementById("message-nom").textContent="";
              }
              
            }
            else {
                d.getElementById("message-nom").classList.add("message");
                d.getElementById("message-nom").textContent ="El nombre no cumple";
            }
            
        }

        textValue2 = d.getElementById("correo").value;

        if(e.target.matches("#correo") === true){
            if(exprRegCorreo.test(textValue2)){    
                if(d.getElementById("message-email").classList.contains("message")){
                   d.getElementById("message-email").classList.remove("message");
                   d.getElementById("message-email").textContent="";
                }
            }
            else {
                d.getElementById("message-email").classList.add("message");
                d.getElementById("message-email").textContent ="El correo no cumple";
            }
            
        }

        textValue3 = d.getElementById("asunto").value;

        if(e.target.matches("#asunto") === true){
            if(exprRegAsunto.test(textValue3)){
                if(d.getElementById("message-asunto").classList.contains("message")){
                    d.getElementById("message-asunto").classList.remove("message");
                    d.getElementById("message-asunto").textContent="";
                }

          
            }
            else {
                d.getElementById("message-asunto").classList.add("message");
                d.getElementById("message-asunto").textContent ="El asunto no cumple";
            }
            
        }

        
        textValue4 = d.getElementById("comentario").value;
        if(e.target.matches("#comentario") === true){
            if(expreRegComentario.test(textValue4)){
                console.log("comentario  cumple");
                if(d.getElementById("message-comen").classList.contains("message")){
                   d.getElementById("message-comen").classList.remove("message");
                   d.getElementById("message-comen").textContent="";
                }
            }
            else {
                d.getElementById("message-comen").classList.add("message");
                d.getElementById("message-comen").textContent ="El comentario no cumple";
            }
            
        }

    })
}