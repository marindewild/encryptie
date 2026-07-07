const cipherText = "PZCA EZXKX GDPXD! DABX GXZR ATTG GDPX JTR QXXGEZCN. AM PZR ZN CX XADGP. ZN JTR BD XAWQDMRZTRW PXW CX MZWADVZFZAF! JTAAXXG BZXA JX XENTTG JXXG? WDW VTA VXAN ZN XENX VTF XA ATUQW TTA CX XA TTA DABX QXXGEZCNX KTNTAWZX. EZXSR CMEZT"
const frequency = {};
let map = {}; // substitutie mapping

// ----------------------
// INIT
// ----------------------
function init() {
    document.getElementById("cipherText").innerText = cipherText;
    calculateFrequency();
    renderTranslation();
}

// ----------------------
// FREQUENTIE ANALYSE
// ----------------------
function calculateFrequency() {
    const text = cipherText.replace(/ /g, "");

    for (let char of text) {

        if (char.match(/[a-z]/i)){
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    const freqDiv = document.getElementById("frequency");

    let html = "";

    Object.keys(frequency)
        .sort((a,b) => frequency[b] - frequency[a])
        .forEach(letter => {
            html += `<div>${letter} : ${frequency[letter]}</div>`;
        });

    freqDiv.innerHTML = html;
}

// ----------------------
// SUBSTITUTIE TOEVOEGEN
// ----------------------
function applySubstitution() {
    const from = document.getElementById("letterFrom").value.toUpperCase();
    const to = document.getElementById("letterTo").value.toUpperCase();

    if(from && to){
        map[from] = to;
    }

    renderTranslation();
}

// ----------------------
// RESET
// ----------------------
function resetTranslation(){
    map = {};
    renderTranslation();
}

// ----------------------
// VERTALING RENDEREN
// ----------------------
function renderTranslation() {

    const output = document.getElementById("translation")

    let result = "";

    for (let char of cipherText) {

        if (char === " ") {
            result += " ";
            continue;
        }

        if (map[char]) {
            result += `<span class="correct">${map[char]}</span>`;
        } else {
            result += `<span class="unchanged">${char}</span>`;
        }
    }

    output.innerHTML = result;
}

init();