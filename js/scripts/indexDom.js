import createWindowSite from "./CreacionVentana.js";
import detectarUserAgent from "./UserAgent.js";
import IsConection from "./ConexionDesconexion.js";


const d = document;

d.addEventListener("DOMContentLoaded",e =>{
    console.log("CREAR VENTANA");
    createWindowSite("#btn_crear_ventana","width","height","link");
    detectarUserAgent("user_agent_place");
    IsConection("msn_connection");
})
