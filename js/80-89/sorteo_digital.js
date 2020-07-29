const d = document;

export default function draw(btn,selector){
  
    const getWinner =(selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

        console.log($players,random,winner);
        return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
        }
    })
    //let ganador = Math.random()*lenguajes.length-1;


}

const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

    return `El ganador es: ${winner.textContent}`;
}

//getWinnerComment("ytd-comment-thread-renderer #author-text span");

//https://www.indeed.com.mx/trabajo?q=inform%C3%A1tica&l=San%20Luis%20Potos%C3%AD%2C%20S.%20L.%20P.&vjk=645bcbaaa0ea612d