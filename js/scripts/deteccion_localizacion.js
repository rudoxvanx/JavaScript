const nv = navigator,w = window,
d = document;

export default function geolocalizacion(id){
    const $info = d.getElementById(id);

    nv.geolocation.getCurrentPosition(function(position){
        $info.innerHTML = `<p>Tu ubicación actual es: 
        Latitud: ${position.coords.latitude},
        Longitud: ${position.coords.longitude},
        Presición: ${position.coords.accuracy}
        </p><br>
        <a href="https://www.w3schools.com">Ver en GoogleMaps</a>`;
        console.log(position);
    })
}