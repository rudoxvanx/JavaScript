import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarma} from "./reloj.js";
import {shortcuts,moveBall} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import resposiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivo.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import getGeolocalizacion from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo_digital.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#inicia_reloj","#detener_reloj");
    alarma("../assets/alarma_2.mp3","#inicia_alarma","#detener_alarma");
    countdown("count_down","Jul 4 2020 13:57:00","Feliz cumpleaños");
    /*Emojy pedia*/
    scrollTopButton(".scroll-top-btn");
    resposiveMedia("youtube","(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=cpeBeAu9siw" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/cpeBeAu9siw" 
    frameborder="0" allow="accelerometer; 
    autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`);
    //scrollTopButton(".scroll-top-btn");
    resposiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/sg8c3nKTxc6Nxqf8A" target="_blank">Ver mapa</a>`
    ,`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15050.64616117933!2d-99.1676647!3d19.4270245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1594583553048!5m2!1ses-419!2smx" 
    width="600" height="450" frameborder="0" style="border:0;" 
    allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>`);
    responsiveTester("responsive_tester");
    userDeviceInfo("user-device");
    webcam("webcam");
    getGeolocalizacion("geolocalizacion");
    searchFilters(".card-filter",".card");
    draw(".winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    
});

d.addEventListener("keydown",e =>{
    shortcuts(e);
    moveBall(e,'.ball',".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();