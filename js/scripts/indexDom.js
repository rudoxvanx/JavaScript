import createWindowSite from "./CreacionVentana.js";
import detectarUserAgent from "./UserAgent.js";
import IsConection from "./ConexionDesconexion.js";
import mediaDevice from "./media_conexion.js";
import geolocalizacion from "./deteccion_localizacion.js";
import busqueda from "./filtro_busqueda.js";
import getAleatorio from "./sorteo_digital.js";
import { plusSlides,showSlides } from "./slider.js";



const d = document;

d.addEventListener("DOMContentLoaded",e =>{
    createWindowSite("#btn_crear_ventana","width","height","link");
    detectarUserAgent("user_agent_place");
    mediaDevice("device");
    geolocalizacion("info_geo");
    getAleatorio("#btn_ganador");
    showSlides(1);
});

IsConection("msn_connection");
busqueda("input","busqueda");
plusSlides(".anterior",".siguiente");


