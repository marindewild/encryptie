function startAttack(){

    let alphabet=0;

    if(lower.checked) alphabet+=26;
    if(upper.checked) alphabet+=26;
    if(numbers.checked) alphabet+=10;
    if(symbols.checked) alphabet+=32;

    if(alphabet===0){

        alert("Kies minimaal één tekenset.");

    return;

    }

const length=parseInt(document.getElementById("length").value);

const combinations=Math.pow(alphabet,length);

const guessesPerSecond=100000000;

const averageTime=combinations/2/guessesPerSecond;

document.getElementById("stats").innerHTML=

    `
    Aantal mogelijkheden:<br>

    ${combinations.toLocaleString("nl-NL")}<br><br>

    Geschatte kraaktijd:<br>

    ${formatTime(averageTime)}

    `;

    simulate(combinations, length);

}

function simulate(total, length){

    let percent=0;

    let guesses=0;

    const maxDisplay=500000000;

    const timer=setInterval(()=>{

    percent++;

    document.getElementById("progress").style.width=percent+"%";

    guesses=Math.floor(maxDisplay*(percent/100));

    document.getElementById("attempts").innerHTML=

    "Pogingen: "+guesses.toLocaleString("nl-NL");
    console.log(lower.checked, length)

    if(percent>=100){

        clearInterval(timer);

        if (total > 1508827064576){

            document.getElementById("secret").innerHTML=
             `
                  Abort: Te veel opties
             `

          }
        else if (lower.checked && numbers.checked && length>= 7){
            document.getElementById("secret").innerHTML=

            `
                ✓ Wachtwoord gevonden: 3ncrypt
    
            `
        
                }
        else{
            document.getElementById("secret").innerHTML=
            `
                x Wachtwoord niet gevonden
    
            `
                }
        }

    },80);

}

function formatTime(seconds){

    if(seconds<60)
        return Math.round(seconds)+" seconden";

    if(seconds<3600)
        return Math.round(seconds/60)+" minuten";

    if(seconds<86400)
        return Math.round(seconds/3600)+" uur";

    if(seconds<31536000)
        return Math.round(seconds/86400)+" dagen";

    return Math.round(seconds/31536000)+" jaar";
}