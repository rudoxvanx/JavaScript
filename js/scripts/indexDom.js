import createWindowSite from "./CreacionVentana.js";
import detectarUserAgent from "./UserAgent.js";
import IsConection from "./ConexionDesconexion.js";
import mediaDevice from "./media_conexion.js";
import geolocalizacion from "./deteccion_localizacion.js";


const d = document;

d.addEventListener("DOMContentLoaded",e =>{
    createWindowSite("#btn_crear_ventana","width","height","link");
    detectarUserAgent("user_agent_place");
    mediaDevice("device");
    geolocalizacion("info_geo");
});

IsConection("msn_connection");
