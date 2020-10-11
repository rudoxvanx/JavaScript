/*Funcion anonima autoejecutable*/

/*Petición que descarga 10 usuarios esto involucra
  insertar 10 veces un usuario esto le pega al DOM
  y afectaria el rendimiento.

  Para eso utilizamos un fragmento y ahí insertamos todos 
  los datos recuperados y al final ya solamente insertamos. 
*/

/*
    Entorno local de servidor web.
    Usar live server para cambiar el protocolo C:// a http
*/


/*PETICIONES AJAX POR EL METODO XmlHttpRequest*/
(() => {
    /*PASO 1 INSTANCIAR EL OBJETO DE LA PETICION*/
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    

    /*
      xhr.onreadystatechange();
      readystatechange:Es ejecutado cuando detecta un cambio en el estado
      ya sea aceptado,rechazado,abortado o lanzado un error, completado.
    */

    /*PASO 2
        ASIGNACION DEL EVENTO(se pueden tambier manejar independientemente)
    */
    xhr.addEventListener('readystatechange',(e) => {
        
        /*Valida solo cuando el ready state sea igual a 4, no me 
          importa el cargado,el abortado o interactivo yo me concentro
          unicamente en el estado completado para trabajar con lo obtenido 
          en la petición*/
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

/*PETICIONES AJAX POR EL METODO Fetch*/
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

/*PETICIONES AJAX POR EL METODO Fetch Async*/
(() => {

    const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{

            let respuesta = await fetch('https://jsonplaceholder.typicode.com/users'),
            json = await respuesta.json();

            if(!respuesta.ok){
                //Los errores solo aceptan texto y no objetos
                //throw new Error("Ocurrio un Error al solicitar los datos");
                
                //No se puede rechazar la promesa como en el ejemplo anterior
                //throw enviara el flujo hacia el catch
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

/*PETICIONES AJAX POR LA LIBRERIA Axios*/
(() => {
    const $axios = document.getElementById('axios'),
    $fragment = document.createDocumentFragment();

    //Axios ya nos da la conversion de los datos y la manipulacion del error 
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log(res);
        let json = res.data;

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} --${el.phone} `;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment)
    })
    .catch(err => {
        console.log('Estamos en el catch',err.response);
        let message = err.response.statusText || 'Ocurrio un error';
        $axios.innerHTML = `Error ${err.response.status}:${message}`;
    })
    .finally(()=>{console.log('Esto se ejecutara independientemente del resultado Axios')});
})();


/*PETICIONES AJAX POR LA LIBRERIA Axios-Async*/
(() => {
    const $axiosAsync = document.getElementById('axios-asyc'),
    $fragment = document.createDocumentFragment();
    
    //Comando para correr mi servidor de api falsa
    /*json-server --watch assets/db.json*/
    async function getData(){
        try{
  
            let res= await axios.get('https://jsonplaceholder.typicode.com/users'),
            json = await res.data;
            //console.log(res,json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} --${el.phone} `;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment)

        }catch(err){
            console.log(err.response);
            let message = err.response.statusText || 'Ocurrio un error';
            $axiosAsync.innerHTML = `Error ${err.response.status}:${message}`;

        }finally{
            console.log('Esto se ejecutara independientemente del try...catch');
        }
    }
    getData();
})();


