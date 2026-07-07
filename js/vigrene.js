const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function animateVigenere(cipher, key){

    cipher = cipher.toUpperCase();
    key = key.toUpperCase();

    //-------------------------------------------------

    // document.getElementById("cipherRow").innerHTML =
    //     cipher.split("").join(" ");

    //-------------------------------------------------

    let repeatedKey = "";

    for(let i=0;i<cipher.length;i++){

        repeatedKey += key[i % key.length];

    }

    document.getElementById("keyRow").innerHTML =
        repeatedKey.split("").join(" ");

    //-------------------------------------------------

    const result = Array(cipher.length).fill("•");

    drawResult();

    //-------------------------------------------------

    let index = 0;

    function next(){

        if(index >= cipher.length){
            transition("missie4.html")
            return;

        }

        const c = cipher[index];
        const k = repeatedKey[index];

        const cValue = alphabet.indexOf(c);
        const kValue = alphabet.indexOf(k);

        let value = cValue - kValue;

        if(value < 0){

            value += 26;

        }

        const plain = alphabet[value];

        //-------------------------------------------------

        document.getElementById("calculation").innerHTML =

        `

        Cipher: ${c} is de ${cValue}de letter van het alfabet<br>

        Sleutel: ${k} is de ${kValue}de letter van het alfabet<br><br>

        ${cValue} − ${kValue}

        ${cValue < kValue ? "+26" : ""}

        = ${value}<br><br>

        Deze ${c} is dus een ${plain}
        `;

        //-------------------------------------------------

        result[index] =
        `<span class="resultLetter">${plain}</span>`;

        drawResult();

        index++;

        setTimeout(next,1500);

    }

    function drawResult(){

        document.getElementById("plainRow").innerHTML =
        result.map(x=>`<span class="${x=="•"?"empty":""}">${x}</span>`).join(" ");

    }

    next();

}


function checkKey(correctAnswer,nextPage){

    const input=document.getElementById("answer");

    const result=document.getElementById("result");

    if(input.value.trim().toLowerCase()===correctAnswer.toLowerCase()){
        animateVigenere(
            "gwiqwlpbeqvsqeighopviszsclis",
            correctAnswer
        );
    }

}