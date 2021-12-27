// Zadatak 1. - Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).

let student1 = {
    name: "Kristina",
    surname: "Mandic",
    year: 4,
    marks: [8, 9, 9, 10, 6, 9],
    myMarks: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma;
    },
    avgMarks: function () {
        let avg = this.myMarks() / this.marks.length;
        return avg;
    },
    average: function () {
        let res = true;
        this.marks.forEach(m => {
            if (m == 6 || m == 10) {
                res = false;
            }
        });
        return res;
    }
};

let student2 = {
    name: "Ines",
    surname: "Kokotovic",
    year: 3,
    marks: [7, 7, 9, 10, 8, 6, 10],
    myMarks: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma;
    },
    avgMarks: function () {
        let avg = this.myMarks() / this.marks.length;
        return avg;
    },
    average: function () {
        let res = true;
        this.marks.forEach(m => {
            if (m == 6 || m == 10) {
                res = false;
            }
        });
        return res;
    }
};

let student3 = {
    name: "Isidora",
    surname: "Becanovic",
    year: 4,
    marks: [6, 6, 10, 8, 9, 8, 7],
    myMarks: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma;
    },
    avgMarks: function () {
        let avg = this.myMarks() / this.marks.length;
        return avg;
    },
    average: function () {
        let res = true;
        this.marks.forEach(m => {
            if (m == 6 || m == 10) {
                res = false;
            }
        });
        return res;
    }
};

let student4 = {
    name: "Bojana",
    surname: "Boca",
    year: 1,
    marks: [7, 7, 7, 6, 8, 6, 6],
    myMarks: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma;
    },
    avgMarks: function () {
        let avg = this.myMarks() / this.marks.length;
        return avg;
    },
    average: function () {
        let res = true;
        this.marks.forEach(m => {
            if (m == 6 || m == 10) {
                res = false;
            }
        });
        return res;
    }
};

let student5 = {
    name: "Katarina",
    surname: "Nakicenovic",
    year: 1,
    marks: [10, 10, 10, 10, 10],
    myMarks: function () {
        let suma = 0;
        this.marks.forEach(m => {
            suma += m;
        });
        return suma;
    },
    avgMarks: function () {
        let avg = this.myMarks() / this.marks.length;
        return avg;
    },
    average: function () {
        let res = true;
        this.marks.forEach(m => {
            if (m == 6 || m == 10) {
                res = false;
            }
        });
        return res;
    }
};

let students = [student1, student2, student3, student4, student5];

// 1. Zadatak - Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let prezime = (arr, x) => {
    arr.forEach(s => {
        if (s.surname.charAt(0) == x) {
            console.log(s.name, s.surname);
        }
    });
};

prezime(students, "N");


// 2. Zadatak - Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let imePrezime = (arr, x, y) => {
    arr.forEach(s => {
        if (s.name.charAt(0) == x && s.surname.charAt(0) == y) {
            console.log(s.name, s.surname);
        }
    });
};

imePrezime(students, "I", "B");


// 3. Zadatak - Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let godinaStudija = (arr, x) => {
    let broj = 0;
    arr.forEach(s => {
        if (x >= 1 && x <= 5 && s.year == x) {
            broj++;
        }
    });
    return broj;
};

console.log(godinaStudija(students, 4));


// 4. Zadatak - Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let maxProsjek = arr => {
    let max = Number.MIN_VALUE;
    let student = arr[0];
    arr.forEach(s => {
        if (s.avgMarks() > max) {
            max = s.avgMarks();
            student = s;
        }
    });
    console.log(student.name, student.surname);
};

maxProsjek(students);


// 5. Zadatak - Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosjecni = arr => {
    arr.forEach(s => {
        if (s.average() == true) {
            console.log(s.name, s.surname);
        }
    });
};

prosjecni(students);


// 6. Zadatak - Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let ekstra = arr => {
    arr.forEach(s => {
        let br9 = 0;
        let br10 = 0;
        s.marks.forEach(m => {
            if (m == 9) {
                br9++;
            }
            else if (m == 10) {
                br10++
            }
        });
        if (br10 + br9 == s.marks.length && br10 >= br9 * 2) {
            console.log(s.name, s.surname);
        }
    });
};

ekstra(students);


// 7. Zadatak - Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let kida = arr => {
    arr.forEach(s => {
        let br9 = 0;
        let br10 = 0;
        s.marks.forEach(m => {
            if (m == 10) {
                br10++;
            }
            else if (m == 9) {
                br9++;
            }
        });
        if (br10 + br9 == s.marks.length && br9 < s.year) {
            console.log(s.name, s.surname);
        }
    });
};

kida(students);


// 8. Zadatak - Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let razbija = arr => {
    arr.forEach(s => {
        let br10 = 0;
        s.marks.forEach(m => {
            if (m == 10) {
                br10++;
            }
            if (s.year == 1) {
                s.year++;
            }
        });
        if (br10 == s.marks.length && br10 >= 5 * (s.year - 1)) {
            console.log(s.name, s.surname);
        }
    });
};

razbija(students);


// 9. Zadatak - Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkav = arr => {
    let aljkavi = 0;
    arr.forEach(s => {
        let br = 0;
        s.marks.forEach(m => {
            if (m > 7) {
                br++;
            }
        });
        if (br == 0) {
            aljkavi++;
        }
    });
    return aljkavi;
};

console.log(aljkav(students));


// 10. Zadatak - Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let bruka = arr => {
    let brukaju = 0;
    arr.forEach(s => {
        let br = 0;
        if (s.year > 1) {
            s.marks.forEach(m => {
                if (m > 7) {
                    br++;
                }
            });
            if (s.marks.length < 3 * (s.year - 1) && br == 0) {
                brukaju++;
            }
        }
    });
    return brukaju;
};

console.log(bruka(students));