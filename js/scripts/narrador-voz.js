const d = document,
w = window;

export default function narrarVoz(){
    const synth = w.speechSynthesis,
    $voiceSelect = d.getElementById("voces");
    var voices;
    setTimeout(() => {

        voices = synth.getVoices();
        voices.forEach(voz => {
            let opcion = d.createElement("option");
            opcion.textContent = voz.name + '(' + voz.lang + ')';

            if(voz.default){
                voz.textContent +=' -- DEFAULT'
            }
            opcion.setAttribute('data-lang',voz.lang);
            opcion.setAttribute('data-name',voz.name);
            $voiceSelect.appendChild(opcion);
        });
    },10);

    d.addEventListener("click",e => {


        const palabras = d.getElementById("texto");

        if(e.target.matches("#btn-escuchar")){
            const utterThis = new SpeechSynthesisUtterance(palabras.value);
            let  lenguage = $voiceSelect.options[$voiceSelect.selectedIndex].value,
            selectedOption = $voiceSelect.options[$voiceSelect.selectedIndex].getAttribute('data-name');
            
            voices.forEach((voice,index) => {
                if(voice.name === selectedOption){
                    utterThis.voice= voice;
                }
            });
            
            synth.speak(utterThis);
        }
    });

   
}