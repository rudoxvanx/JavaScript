/*Funcion anonima autoejecutable*/

/*Petición que descarga 10 usuarios esto involucra
  insertar 10 veces un usuario esto le pega al DOM
  y afectaria el rendimiento.

  Para eso utilizamos un fragmento y ahí insertamos todos 
  los datos recuperados y al final ya solamente insertamos. 
*/
(() => {
    /*PASO 1 INSTANCIAR EL OBJETO DE LA PETICION*/
    const xhr = new XMLHttpRequest(),
    $xhr =document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    

    /*
      xhr.onreadystatechange();
      readystatechange:Es ejecutado cuando detecta un cambio en el estado
      ya sea aceptado,rechazado,abortado o lanzado un error completado.
    */

    /*PASO 2
        ASIGNACION DEL EVENTO(se pueden tambier manejar independientemente)
    */
    xhr.addEventListener('readystatechange',(e) => {
        
        if(xhr.readyState !== 4) return;
        
        console.log(xhr);  
        
        /*Condicionando a status satisfactorios no contempla redirecciones
        si las contemplara el 300 cambiaria a 400*/
        if(xhr.status >= 200 && xhr.status < 300){
            console.log('éxito');
            //console.log(xhr.responseText);
            //$xhr.textContent = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} --${el.phone} `;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else {
            console.log('Error');
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}:${message}`
        }   
        /*EQUIVALENTE A UN LOADER*/
        console.log("Este mensaje cargara de cualquier forma");
    });
    
    /*PASO 3 ABRIR LA PETICION Y ESTABLECER EL MÉTODO*/
    //CONSULTA EXTERNA
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    //CONSULTA LOCAL
    //xhr.open('GET','/assets/user.json')
    /*ENVIAR EL MÉTODO(en otros métodos se manda el dato a modificar)*/
    xhr.send();

})();

(() => {
    const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

    //fetch('https://jsonplaceholder.typicode.com/users',{});
    fetch('https://jsonplaceholder.typicode.com/users')
    /*.then(res => {
        console.log(res);
        return res.ok? res.json():Promise.reject(res);
    })*/
    .then((res) => (res.ok? res.json() : Promise.reject(res)))
    .then(json => {
        console.log(json);
        //$fetch.innerHTML=json;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} --${el.phone} `;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally(() => {
        console.log('Esto se ejecutara independientemente de la promesa fetch');
    });
})();


(() => {

    const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{

            let respuesta = await fetch('https://jsonplaceholder.typicode.com/user'),
            json = await respuesta.json();

            if(!respuesta.ok){
                //Los errores solo aceptan texto y no objetos
                //throw new Error("Ocurrio un Error al solicitar los datos");
                
                throw {
                    status:respuesta.status,
                    statusText:respuesta.statusText
                }
            }
            console.log(respuesta,json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} --${el.phone} `;
                $fragment.appendChild($li);
            });
    
            $fetchAsync.appendChild($fragment);
        }catch(err){
            console.log(err);
            let message = err.statusText || 'Ocurrio un error';
            $fetchAsync.innerHTML = `Error ${err.status}:${message}`;
        
        }finally{
            console.log('Esto se ejecutara independientemente de la promesa fetch');
            
        }
    }

    getData();
})();



