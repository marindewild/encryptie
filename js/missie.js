const modal = document.getElementById("infoModal");
const infoButton = document.getElementById("infoButton");
const closeModal = document.getElementById("closeModal");

if(modal && infoButton && closeModal){

    infoButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });

}

function checkAnswer(correctAnswer,nextPage){

    const input=document.getElementById("answer");

    const result=document.getElementById("result");

    if(input.value.trim().toLowerCase()===correctAnswer.toLowerCase()){

        result.innerHTML="✓ Bericht succesvol ontcijferd.";

        result.className="green";

        setTimeout(()=>{

            transition(nextPage);

        },1800);

    }else{

        result.innerHTML="✗ Bericht klopt niet.";

        result.className="red";

    }

}

function transition(nextPage){

    document.body.innerHTML=`

    <div class="terminal">

    <p id="boot"></p>

    </div>

    `;

    const lines=[

        "Bericht geverifieerd...",
        "Nieuwe encryptiemethode geconstateerd...",
        "Databank wordt geraadpleegd...",
        "ENCRYPTIE LEVEL-UP GEDETECTEERD...",
        "Nieuw dossier wordt geladen..."

    ];

    const target=document.getElementById("boot");

    let index=0;

    function next(){

        if(index<lines.length){

            target.innerHTML+=lines[index]+"<br>";

            index++;

            setTimeout(next,650);

        }else{

            setTimeout(()=>{

                window.location.href=nextPage;

            },120);

        }

    }

    next();

}
