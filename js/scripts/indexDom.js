import createWindowSite from "./CreacionVentana.js";
import detectarUserAgent from "./UserAgent.js";
import IsConection from "./ConexionDesconexion.js";
import mediaDevice from "./media_conexion.js";


const d = document;

d.addEventListener("DOMContentLoaded",e =>{
    createWindowSite("#btn_crear_ventana","width","height","link");
    detectarUserAgent("user_agent_place");
    mediaDevice("device");
});

IsConection("msn_connection");
