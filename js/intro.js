const bootText = [

    "Verbinding maken met beveiligde server...",
    "Authenticatie voltooid.",
    "Toegangsniveau: CRYPTOANALIST",
    "Gebruiker geverifieerd.",
    "Dossier vrijgegeven."
    
    ];
    
    const story = `Welkom, analist.
    
    Informatie is macht.
    Daarom wordt informatie verstopt met geheimtaal.
    Dit heet encryptie. 

    De taak is aan jullie om deze informatie toch te achterhalen.

    Kraak de codes en vind de informatie!
    Werk samen, analyseer de aanwijzingen en probeer de berichten te ontcijferen.
    
    Succes.
    
    `;
    
    const boot=document.getElementById("boot");
    const briefing=document.getElementById("briefing");
    const storyBox=document.getElementById("story");
    
    let i=0;
    
    function bootSequence(){
    
        if(i<bootText.length){
    
            boot.innerHTML+=bootText[i]+"<br>";
    
            i++;
    
            setTimeout(bootSequence,700);
    
        }else{
    
            setTimeout(()=>{
    
                boot.style.display="none";
    
                briefing.classList.remove("hidden");
    
                typeWriter();
    
            },800);
    
        }
    
    }
    
    let pos=0;
    
    function typeWriter(){
    
        if(pos<story.length){
    
            storyBox.innerHTML+=story.charAt(pos);
    
            pos++;
    
            setTimeout(typeWriter,18);
    
        }
    
    }
    
    bootSequence();