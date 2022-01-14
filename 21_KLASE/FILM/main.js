import { Film, vijekFilmova, prosjecnaOcjena, najboljeOcjenjeni, osrednjiFilm, najmanjaOcjenaNajboljeg, najmanjaOcjena } from "./film.js";


let film1 = new Film("The Silence of the Lambs", "Johnathan Demme", 1991, [8.8, 8.9, 8.2, 9.7, 9.6]);
let film2 = new Film("Hannibal", "Ridley Scott", 2001, [9.8, 7.9, 9.2, 9.7, 8.4]);
let film3 = new Film("Red Dragon", "Brett Ratner", 2004, [8.5, 9.1, 7.9, 9.2, 8.6]);
console.log(film1);
console.log(film2.reziser);
film3.godinaIzdanja = 2002;
console.log(film3);

film2.stampaj();

let filmovi = [film1, film2, film3];
console.log(filmovi);

// Dodavanje ocjene u film1
film1.dodajOcjenu(10);
console.log(film1);

// Prikaz svih filmova u tabeli
let tabelica =
    `<table border="1">
        <tr>
            <th>Naziv filma</th>
            <th>Reziser</th>
            <th>Godina izdanja</th>
            <th>Ocjene</th>
            <th>Prosjecna</th>
        </tr>
`;

filmovi.forEach(f => {
    tabelica +=
        `<tr>
            <td>${f.naslov}</td>
            <td>${f.reziser}</td>
            <td>${f.godinaIzdanja}</td>
            <td>${f.ocjene}</td>
            <td>${f.prosjek()}</td>
        </tr>`;
});

tabelica += `</table>`;

document.body.innerHTML = tabelica;


// Prosjek, vijekFilmova, prosjecnaOcjena

console.log(film1.prosjek());
console.log(film2.prosjek());
console.log(film3.prosjek());

vijekFilmova(filmovi, 21);

console.log(prosjecnaOcjena(filmovi));

console.log(najboljeOcjenjeni(filmovi));

console.log(osrednjiFilm(filmovi));

najmanjaOcjenaNajboljeg(filmovi);

console.log(najmanjaOcjena(filmovi));


//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

// Prvo pravimo niz svih ocjena
let sveOcjene = arr => {
    // MOJ NACIN
    // let sveOcjene = [];
    // arr.forEach(f => {
    //     f.ocjene.forEach(o => {
    //         sveOcjene.push(o);
    //     });
    // });
    // return sveOcjene;

    // CONCAT moze odjednom da se vrsi, ili pojedinacno:
    // Odjednom bi glasilo: sveOcjene = sveOcjene.concat(film1, film2, film3)
    // Pojedinacno cemo ovako:
    let arrSveOcjene = [];
    arr.forEach(f => {
        arrSveOcjene = arrSveOcjene.concat(f.ocjene);
    });
    return arrSveOcjene;
};

// Niz koji prosljedjujemo je niz svih ocjena
let najcescaOcjena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // sigurno se jednom pojavio

    for (let i = 0; i < arr.length; i++) {
        let tekuci = arr[i];
        let tekuciBrPojavljivanja = 0;

        for (let j = 0; j < arr.length; j++) {
            if (tekuci == arr[j]) {
                tekuciBrPojavljivanja++;
            }
        }

        if (pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
};

console.log(sveOcjene(filmovi));
console.log(najcescaOcjena(sveOcjene(filmovi)));


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcjene = (arr, x) => {
    let nizFilmova = [];
    arr.forEach(f => {
        if (f.prosjek() > x) {
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
};

console.log(iznadOcjene(filmovi, 8.9));


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (arr, x) => {
    let iznadOcjeneFilmovi = iznadOcjene(arr, x);
    let max = iznadOcjeneFilmovi[0];
    iznadOcjeneFilmovi.forEach(f => {
        if (f.godinaIzdanja > max.godinaIzdanja) {
            max = f;
        }
    });
    console.log(max);
}

iznadOceneNoviji(filmovi, 8);