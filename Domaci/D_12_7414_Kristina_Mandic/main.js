import { Knjiga, ukupnaCijena, prosjecnaCijena, prosjecnaStranica } from "./knjiga.js";


let knjiga1 = new Knjiga("Hari Poter i Vatreni Pehar", "Dz. K. Rouling", 2000, 650, 1700);
let knjiga2 = new Knjiga("Gospodar Prstenova i duzina prstena", "Dzon Ronald Ruel Tolkin", 1954, 480, 1500);
let knjiga3 = new Knjiga("Saga o Vjescu", "Andzej Spakovski", 2012, 601, 1200);

// PROVJERA SETERA I GETERA
console.log(knjiga1.brojStrana);
console.log(knjiga2.naslov);
knjiga3.cijena = 8001;
console.log(knjiga3.cijena);

// POZIV METODA
knjiga1.stampaj();
console.log(knjiga1.obimna());
console.log(knjiga3.skupa());
console.log(knjiga2.dugackoIme());

// PRAVLJENJE NIZA
let knjige = [knjiga1, knjiga2, knjiga3];
console.log(knjige);

// Ispisati sve autore kojima je ime dugačko.
let btnIme = document.getElementById("ime");
let ispisIme = document.querySelector("#ispisIme");

btnIme.addEventListener("click", () => {
    ispisIme.innerHTML = "<ul>";
    knjige.forEach(k => {
        if (k.dugackoIme() === true) {
            ispisIme.innerHTML += `<li>${k.autor}</li>`;
        }
    });
    ispisIme.innerHTML += "</ul>";
});


// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
let btnKnjige = document.getElementById("knjige");
let ispisKnjige = document.getElementById("ispisKnjige");

btnKnjige.addEventListener("click", () => {
    let tabela = `<table border="1">`;
    knjige.forEach(k => {
        if ((k.skupa() == true) && (k.obimna() == true)) {
            tabela +=
                `<tr>
                    <td>${k.naslov}</td>
                    <td>${k.autor}</td>
                    <td>${k.godinaIzdanja}</td>
                    <td>${k.brojStrana}</td>
                    <td>${k.cijena}</td>
                </tr>
                `;
        }
    });
    tabela += `</table>`;
    ispisKnjige.innerHTML = tabela;
});


// POZIV FUNKCIJA
console.log(ukupnaCijena(knjige));
console.log(prosjecnaCijena(knjige));
console.log(prosjecnaStranica(knjige));