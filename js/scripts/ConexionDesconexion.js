const d = document,
nv = navigator,w = window;

export default function IsConection(id){

    let mensaje_status = d.getElementById(id);

    w.addEventListener("offline", e => {
        console.log("offline");
        mensaje_status.innerText = "Has perdido tu conexión";  
        mensaje_status.style.backgroundColor = "#EB2C15";
        mensaje_status.style.color = "#fff";  
        
        setTimeout(function(){
            mensaje_status.classList.add("show_msn");
        },4000);

        mensaje_status.classList.remove("show_msn");
    });

    w.addEventListener("online", e => {
        console.log("Online");
        mensaje_status.innerText = "Vuelves a estar en conexión";
        mensaje_status.style.backgroundColor = "#239B56";
        mensaje_status.style.color = "#fff";

        setTimeout(function(){
            mensaje_status.classList.add("show_msn");
        },4000);
        
        mensaje_status.classList.remove("show_msn");
    });
}
