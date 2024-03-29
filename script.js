// DESCRIZIONE ESERCIZIO
// 1. settare l'orario a cui voglio arrivare
// 2. settare il countdown
// 3. settare data corrente
// 4. mostrare a schermo il countdown


// ------------------------------------------------------ //


// 1. ORARIO A CUI VOGLIO ARRIVARE
const countDownDate = new Date(`2023-04-28T13:00:00`).getTime();
console.log(countDownDate);

// 2. SET COUNTDOWN
let x = setInterval(checkTime, 1000);


// ------------------------------


// FUNCTION
function checkTime() {
    // 3. DATA DI OGGI
    const now = new Date().getTime();
    
    // Tempo mancante tra l'ora attuale e l'ora di arrivo
    const distanza = countDownDate - now;

    // calcolo il tempo
    const days = Math.floor(distanza / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanza % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanza % (1000 * 60)) / 1000);
        
    // 4. MOSTRO A SCERMO IL COUNTDOWN
    document.getElementById(`result`).innerHTML = `TEMPO RIMANENTE` + `<br>` + `< ` + days + `:` + hours + `:` + minutes + `:` + seconds + ` >`;
        
    // scrivo un testo se il countdown finisce!
    if (distanza < 0) {
        clearInterval(x);
        document.getElementById(`result`).innerHTML = `Game Over!`;
    }
}

function refreshPage(){
    window.location.reload();
} 