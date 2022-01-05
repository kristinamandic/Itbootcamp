let btnIzracunaj = document.getElementById("izracunaj");
let pIspis = document.getElementById("ispis");
let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let inputPokloni = document.querySelectorAll("input[name='pokloni']");
let inputPlacanje = document.querySelectorAll("input[name='placanje']");

btnIzracunaj.addEventListener("click", () => {
    pIspis.innerHTML += `<h2>Vaša porudžbina:</h2>`;

    // Ruze
    let inputRuzeValue = inputRuze.value;
    inputRuzeValue = parseInt(inputRuzeValue || 0);
    for (let i = 1; i <= inputRuzeValue; i++) {
        pIspis.innerHTML += `<img src="slike/ruza.png">`;
    }
    pIspis.innerHTML += "<br>";
    let ruzeDin = inputRuzeValue * 150;

    // Ljiljani
    let inputLjiljaniValue = inputLjiljani.value;
    inputLjiljaniValue = parseInt(inputLjiljaniValue || 0);
    for (let i = 1; i <= inputLjiljaniValue; i++) {
        pIspis.innerHTML += `<img src="slike/ljiljan.png">`;
    }
    pIspis.innerHTML += "<br>";
    let ljiljaniDin = inputLjiljaniValue * 120;

    // Gerberi
    let inputGerberiValue = inputGerberi.value;
    inputGerberiValue = parseInt(inputGerberiValue || 0);
    for (let i = 1; i <= inputGerberiValue; i++) {
        pIspis.innerHTML += `<img src="slike/gerber.png">`;
    }
    let gerberiDin = inputGerberiValue * 70;

    // Dodatni pokloni
    let checkedPokloni = document.querySelectorAll("input[name='pokloni']:checked");
    let checkedPokloniValue = [];
    checkedPokloni.forEach(p => {
        checkedPokloniValue.push(p.value);
    });
    checkedPokloniValue.forEach(p => {
        if (p == "bom") {
            pIspis.innerHTML += "<p>+Bombonjera</p>"
        }
        else if (p == "cok") {
            pIspis.innerHTML += "<p>+Čokolada</p>"
        }
        else {
            pIspis.innerHTML += "<p>+Šampanjac</p>"
        }
    });
    let pokloniDin = checkedPokloniValue.length * 500;

    // Placanje
    let ukupnoDin = ruzeDin + gerberiDin + ljiljaniDin + pokloniDin;
    let ukupnoSaPopustom = ukupnoDin - ukupnoDin * 0.1;

    let checkedPlacenje = document.querySelector("input[name='placanje']:checked");
    let checkedPlacenjeValue = checkedPlacenje.value;
    if (checkedPlacenjeValue == "kes" || (checkedPlacenjeValue == "kartica" && ukupnoDin < 2000)) {
        pIspis.innerHTML += `<h3>Ukupna cijena je: ${ukupnoDin}</h3>`
    }
    else {
        pIspis.innerHTML += `<p>Cijena bez popusta je: ${ukupnoDin}</p>`
        pIspis.innerHTML += `<h3>Cijena sa popustom je: ${ukupnoSaPopustom}</h3>`
    }
});