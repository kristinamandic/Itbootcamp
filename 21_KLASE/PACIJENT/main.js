import { Pacijent } from "./pacijent.js";

let pacijent1 = new Pacijent("Jelena", 173, 66);
let pacijent2 = new Pacijent("Ana", 180, 72);
let pacijent3 = new Pacijent("Pera", 190, 140);
let pacijent4 = new Pacijent("Mika", 167, 57);
let pacijent5 = new Pacijent("Mila", 150, 70);

console.log(pacijent1);
console.log(pacijent2.visina);
console.log(pacijent3.tezina);

pacijent1.Stampaj();
console.log(pacijent2.Bmi());
console.log(pacijent3.Kritican());

let pacijenti = [pacijent1, pacijent2, pacijent3, pacijent4, pacijent5];
console.log(pacijenti);

////////////////////////////////////
// VJEZBANJE DOMA NA OVOM ZADATKU

// 1. Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTez = document.getElementById("minTez");
let pMinTezRez = document.getElementById("minTezRez");

btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0];
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {
            min = p;
        }
    });
    pMinTezRez.innerHTML = min.StampajListu();
    // console.log(min);
    // min.Stampaj();
});


// 2. Ispisati podatke o pacijentu sa najvećom bmi vrednošću.

let btnMaxBMI = document.querySelector("#maxBMI");
let pMaxBMIRez = document.querySelector("#maxBMIRez");

btnMaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0];
    // jer smo nultog uzeli kao pretpostavku, krecemo od 1
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBMI.Bmi() < pacijenti[i].Bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    pMaxBMIRez.innerHTML = maxBMI.StampajListu();
});


// Ideje za vjezbu: pravljenje tabele iskred dugmadi koja ispisuje sve podatke o svim pacijentima i true ili false da li je kristican, npr.kriticne obojiti u crveno, ili dugme koje kada se klikne oboji kritsicne u crveno, to bi trebalo da se doda stapmajTR u klasi - jedan red == jedan pacijent, ili napraviti u scriptu preko petlje??