import Film from "./film.js";


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

console.log(film3.prosjek());

// Prikaz svih filmova u tabeli
let tabelica =
    `<table border="1">
        <tr>
            <th>Naziv filma</th>
            <th>Reziser</th>
            <th>Godina izdanja</th>
            <th>Ocjene</th>
        </tr>
`;

filmovi.forEach(f => {
    tabelica +=
        `<tr>
            <td>${f.naslov}</td>
            <td>${f.reziser}</td>
            <td>${f.godinaIzdanja}</td>
            <td>${f.ocjene}</td>
        </tr>`;
});

tabelica += `</table>`;

document.body.innerHTML = tabelica;