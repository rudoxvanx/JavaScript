console.log("******Objeto URL location******");
console.log(location);
console.log(location.origin);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
//Detecta todo lo que hay despues de #
console.log(location.hash);
//Detecta todos los parametros que pueda haber
console.log(location.search);
console.log(location.pathname);
//location.reload();
//Historial de paginas visitadas
console.log(history);
console.log(history.length);

console.log("******Objeto history******");
//Regresar una pagina anterior
history.back();
//Ir pagina hacia adelante
history.forward();
//Ir cierto número de paginas hacia adelante
//numeros positivos paginas hacia delante,
//numeros negativos paginas hacia atras.
history.go(2);

console.log("******Objeto Navigator******");
console.log(navigator);
//Muestra el tipo de conexion 4g etc
console.log(navigator.connection);

console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
//Tipos de formatos aceptados ejem exel,word powerpoint etc
console.log(navigator.mimeTypes);
//Muestra si estamos en linea con internet
console.log(navigator.onLine);
//Convertir nuestra aplicacion en un sitio instalable
console.log(navigator.serviceWorker);
//API de almacenamiento
console.log(navigator.storage);
//Detectar dispositivos usb conexion y desconexion
console.log(navigator.usb);
//Navegador que se conecta a nuestra aplicación
console.log(navigator.userAgent);



