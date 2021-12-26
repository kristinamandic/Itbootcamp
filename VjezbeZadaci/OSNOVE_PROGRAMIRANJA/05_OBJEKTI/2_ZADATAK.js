// 2. Zadatak Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu). Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik). Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:
// Naziv kursa može biti “Razvoj veb stranica: JS”, “Razvoj veb stranica: PHP”, “Testiranje softvera: QA”, “Osnove programiranja: Java”.
// Grad može biti “Beograd”, “Niš”, “Novi Sad” ili “Kosovska Mitrovica”.
// Imena polaznika za svaki kurs su proizvoljni, kao i ocene, dokle god je svaka ocena ceo broj između 0 i 100.

let polaznik1 = {
    ime: "Kristina",
    prezime: "Mandic",
    ocjena: 95
};

let polaznik2 = {
    ime: "Jelena",
    prezime: "Matejic",
    ocjena: 78
};

let polaznik3 = {
    ime: "Stefan",
    prezime: "Stanimirovic",
    ocjena: 82
};

let polaznik4 = {
    ime: "Petar",
    prezime: "Petrovic",
    ocjena: 23
};

let polaznik5 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    ocjena: 38
};

let polaznik6 = {
    ime: "Radovan",
    prezime: "Radic",
    ocjena: 56
};

let polaznik7 = {
    ime: "Ilija",
    prezime: "Ilic",
    ocjena: 100
};

let polaznik8 = {
    ime: "Ljubica",
    prezime: "Radonjic",
    ocjena: 45
};

let polaznik9 = {
    ime: "Isidora",
    prezime: "Becanovic",
    ocjena: 81
};

let polaznik10 = {
    ime: "Ines",
    prezime: "Kokotovic",
    ocjena: 97
};

let polaznik11 = {
    ime: "Katarina",
    prezime: "Nakicenovic",
    ocjena: 14
};

let polaznik12 = {
    ime: "Dordje",
    prezime: "Zoric",
    ocjena: 64
};

let polaznik13 = {
    ime: "Srdjan",
    prezime: "Bosnjak",
    ocjena: 88
};

let polaznik14 = {
    ime: "Sava",
    prezime: "Ukropina",
    ocjena: 33
};

let polaznik15 = {
    ime: "Srdjan",
    prezime: "Filipovic",
    ocjena: 99
};

let kurs1 = {
    naziv: "Razvoj veb stranica: JS",
    grad: "Beograd",
    polaznici: [polaznik1, polaznik2, polaznik3],
    avgOcjena: function () {
        let suma = 0;
        this.polaznici.forEach(p => {
            suma += p.ocjena;
        });
        return suma / this.polaznici.length;
    }
};

let kurs2 = {
    naziv: "Razvoj veb stranica: PHP",
    grad: "Nis",
    polaznici: [polaznik4, polaznik5, polaznik6, polaznik7],
    avgOcjena: function () {
        let suma = 0;
        this.polaznici.forEach(p => {
            suma += p.ocjena;
        });
        return suma / this.polaznici.length;
    }
};

let kurs3 = {
    naziv: "Testiranje softvera: QA",
    grad: "Kosovska Mitrovica",
    polaznici: [polaznik8, polaznik9, polaznik10, polaznik11, polaznik12],
    avgOcjena: function () {
        let suma = 0;
        this.polaznici.forEach(p => {
            suma += p.ocjena;
        });
        return suma / this.polaznici.length;
    }
};

let kurs4 = {
    naziv: "Osnove programiranja: Java",
    grad: "Novi Sad",
    polaznici: [polaznik13, polaznik14, polaznik15],
    avgOcjena: function () {
        let suma = 0;
        this.polaznici.forEach(p => {
            suma += p.ocjena;
        });
        return suma / this.polaznici.length;
    }
};

let kurs = [kurs1, kurs2, kurs3, kurs4];

// 1. Zadatak - Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let kursGrad = (arr, x) => {
    let broj = 0;
    arr.forEach(k => {
        if (k.grad == x) {
            broj++;
        }
    });
    return broj;
};

console.log(kursGrad(kurs, "Kosovska Mitrovica"));


// 2. Zadatak - Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.

let kursNaziv = (arr, x) => {
    let broj = 0;
    arr.forEach(k => {
        if (k.naziv == x) {
            broj++;
        }
    });
    return broj;
};

console.log(kursNaziv(kurs, "Osnove programiranja: Java"));


// 3. Zadatak - Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let maxPolaznika = arr => {
    let max = arr[0].polaznici
    let naziv = arr[0].naziv
    arr.forEach(k => {
        if (k.polaznici.length > max.length) {
            max = k.polaznici;
            naziv = k.naziv;
        }
    });
    console.log(naziv);
};

maxPolaznika(kurs);


// 4. Zadatak - Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let prezimePolaznika = (arr, x) => {
    arr.forEach(k => {
        k.polaznici.forEach(p => {
            if (p.prezime == x) {
                console.log(p.ime, p.prezime, k.naziv, k.grad);
            }
        });
    });
};

prezimePolaznika(kurs, "Kokotovic");


// 5. Zadatak - Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

let najboljaAvgOcjena = arr => {
    let max = arr[0].avgOcjena();
    let kurs = arr[0];
    arr.forEach(k => {
        if (k.avgOcjena() > max) {
            max = k.avgOcjena();
            kurs = k;
        }
    });
    console.log(kurs.naziv, kurs.grad);;
};

najboljaAvgOcjena(kurs);


// 6. Zadatak - Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let uspjesan = arr => {
    let uspjesni = 0;
    arr.forEach(k => {
        let broj = 0;
        k.polaznici.forEach(p => {
            if (p.ocjena <= 65) {
                broj++;
            }
        });
        if (broj == 0) {
            uspjesni++;
        }
    });
    return uspjesni;
};

console.log(uspjesan(kurs));


// 7. Zadatak - Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

let kida = (arr, x) => {
    let gradovi = 0;
    let uspjesni = 0;
    arr.forEach(k => {
        if (k.grad == x) {
            gradovi++;
            let broj = 0;
            k.polaznici.forEach(p => {
                if (p.ocjena <= 65) {
                    broj++;
                }
            });
            if (broj == 0) {
                uspjesni++;
            }
        }
    });
    return gradovi == uspjesni;
};

console.log(kida(kurs, "Beograd"));


// 8. Zadatak - Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).

let pokidali = (arr, x) => {
    let pokida = 0;
    arr.forEach(k => {
        let broj = 0;
        k.polaznici.forEach(p => {
            if (p.ocjena < 80) {
                broj++;
            }
        });
        if (broj == 0) {
            pokida++;
        }
    });

    return pokida > 0;
};

console.log(pokidali(kurs, "Razvoj veb stranica: JS"));