const d = document;

export default function countdown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdowntempo = setInterval(()=>{
        let now = new Date().getTime(),
        limittime = countdownDate-now,
        days = Math.floor(limittime/ (1000 * 60 * 60 * 24)),
        hours = 
        ("0" + 
        Math.floor(limittime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))
        .slice(-2),
        minutes = 
        ("0" + 
        Math.floor(limittime % (1000 * 60 * 60 )/(1000 * 60)))
        .slice(-2), 
        seconds = ("0" + 
        Math.floor(limittime % (1000 * 60 )/(1000)))
        .slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
        
        if(limittime < 0){
            clearInterval(countdowntempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        
        }
    },1000);
}