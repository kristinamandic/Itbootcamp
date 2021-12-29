let student1 = {
    name: "Kristina",
    surname: "Mandic",
    year: 4,
    marks: [8, 9, 9, 10, 6, 9],
    prosijek: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma / this.marks.length;
    }
};

let student2 = {
    name: "Pera",
    surname: "Peric",
    year: 2,
    marks: [7, 10, 6, 6, 9, 9, 8],
    prosijek: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma / this.marks.length;
    }
};

let student3 = {
    name: "Mika",
    surname: "Mikic",
    year: 3,
    marks: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 10],
    prosijek: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma / this.marks.length;
    }
};

let student4 = {
    name: "Pera",
    surname: "Peric",
    year: 2,
    marks: [7, 7, 10, 6, 8, 8, 10, 6, 6, 9],
    prosijek: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma / this.marks.length;
    }
};

let student5 = {
    name: "Marko",
    surname: "Markovic",
    year: 1,
    marks: [8, 8, 9, 9, 9, 10, 10, 10],
    prosijek: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma / this.marks.length;
    }
};

let studenti = [student1, student2, student3, student4, student5];


// 1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let pocetnoSlovo = (arr, x) => {
    arr.forEach(s => {
        if (s.surname.charAt(0) == x) {
            console.log(s.name, s.surname);
        }
    });
};

pocetnoSlovo(studenti, "M");


// 2. Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let imePrezime = (arr, x, y) => {
    arr.forEach(s => {
        if (s.name.includes(x) && s.surname.includes(y)) {
            console.log(s.name, s.surname);
        }
    });
};

imePrezime(studenti, "ris", "ic");


// 3. Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let godinaStudija = (arr, x) => {
    let broj = 0;
    arr.forEach(s => {
        if (s.year == x) {
            broj++;
        }
    });
    return broj;
};

console.log(godinaStudija(studenti, 2));


// 4. Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let maxProsjek = arr => {
    let max = arr[0].prosijek();
    let student = arr[0];
    arr.forEach(s => {
        if (s.prosijek() > max) {
            max = s.prosijek();
            student = s;
        }
    });
    console.log(student.name, student.surname);
};

maxProsjek(studenti);


// 5. Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosjecan = arr => {
    arr.forEach(s => {
        let broj = 0;
        s.marks.forEach(m => {
            if (m == 6 || m == 10) {
                broj++;
            }
        });
        if (broj == 0) {
            console.log(s.name, s.surname);
        }
    });
};


prosjecan(studenti);


// 6. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let ekstra = arr => {
    arr.forEach(s => {
        let br10 = 0;
        let br9 = 0;
        s.marks.forEach(m => {
            if (m == 9) {
                br9++;
            }
            else if (m == 10) {
                br10++;
            }
        });
        if (br9 + br10 == s.marks.length && br10 >= br9 * 2) {
            console.log(s.name, s.surname);
        }
    });
};

ekstra(studenti);


// 7. Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let kida = arr => {
    arr.forEach(s => {
        let br10 = 0;
        let br9 = 0;
        s.marks.forEach(m => {
            if (m == 9) {
                br9++;
            }
            else if (m == 10) {
                br10++;
            }
        });
        if (br9 + br10 == s.marks.length && br9 < s.year) {
            console.log(s.name, s.surname);
        }
    });
};

kida(studenti);


// 8. Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let razbija = arr => {
    arr.forEach(s => {
        let br10 = 0;
        s.marks.forEach(m => {
            if (m == 10) {
                br10++;
            }
        });
        if (br10 == s.marks.length && br10 >= 5 * (s.year - 1) && s.year != 1) {
            console.log(s.name, s.surname);
        }
    });
};

razbija(studenti);


// 9. Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkavi = arr => {
    let aljkav = 0;
    arr.forEach(s => {
        let veceOd7 = 0;
        s.marks.forEach(m => {
            if (m > 7) {
                veceOd7++;
            }
        });
        if (veceOd7 == 0) {
            aljkav++;
        }
    });
    return aljkav;
};

console.log(aljkavi(studenti));


// 10. Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let brukaju = arr => {
    let bruka = 0;
    arr.forEach(s => {
        let veciOd7 = 0;
        s.marks.forEach(m => {
            if (m > 7) {
                veciOd7++;
            }
        });
        if (s.year > 1 && veciOd7 == 0 && s.marks.length < 3 * (s.year - 1)) {
            bruka++
        }
    });
    return bruka;
};

console.log(brukaju(studenti));