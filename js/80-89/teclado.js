const d = document;
let x = 0,y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);

    let limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);

    switch(e.keyCode){
        case 37:
            if(limitsBall.left > limitsStage.left){
               e.preventDefault();
               x--;
            }
        break;

        case 38:
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
        break;

        case 39:
            if(limitsBall.right < limitsStage.right){
                e.preventDefault(); 
                x++;
            }
        break;

        case 40:
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            } 
        break;

        default:
        break;
    }

    
    $ball.style.transform= `translate(${x*10}px,${y*10}px)`

}

export function shortcuts(e){
    
    /*console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(`ctrl: ${e.ctrlKey}`);*/
    
    if(e.key === 'a' && e.altKey){
        alert("Has lanzado una alerta con el teclado");
    }

    if(e.key === 'c' && e.altKey){
        confirm("Has lanzado una confirmacion con el teclado");
    }

    if(e.key === 'p' && e.altKey){
        prompt("Has lanzado una aviso con el teclado");
    }
}