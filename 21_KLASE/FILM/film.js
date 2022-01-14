class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocjene = o;
    }

    // METOD ZA STAMPAJ
    stampaj() {
        console.log(this.naslov);
    }

    // METOD ZA DODAVANJE JEDNE OCJENE 
    dodajOcjenu(novaOcjena) {
        this._ocjene.push(novaOcjena);
    }

    // METOD ZA PROSJEK
    prosjek() {
        let zbir = 0;
        this.ocjene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocjene.length;
    }

    // SETER I GETER ZA NASLOV
    set naslov(n) {
        let n1 = n.trim();
        this._naslov = n1;
    }
    get naslov() {
        return this._naslov;
    }

    // SETER I GETER ZA REZISER
    set reziser(r) {
        let r1 = r.trim();
        this._reziser = r1;
    }
    get reziser() {
        return this._reziser;
    }

    // SETER I GETER ZA GODINU IZDANJA
    set godinaIzdanja(gi) {
        if (gi > 1800) {
            this._godinaIzdranja = gi;
        }
        else {
            this._godinaIzdranja = 1800;
        }
    }
    get godinaIzdanja() {
        return this._godinaIzdranja;
    }

    // SETER I GETER ZA OCJENE
    set ocjene(o) {
        this._ocjene = o;
    }
    get ocjene() {
        return this._ocjene;
    }
}

let vijekFilmova = (arr, x) => {
    let pocetak = x * 100 - 99;
    let kraj = x * 100;
    arr.forEach(f => {
        if (f.godinaIzdanja >= pocetak && f.godinaIzdanja <= kraj) {
            console.log(f.naslov);
        }
    });
    // MOJ NACIN - RADI ALI NIJE DOBAR
    // arr.forEach(f => {
    //     if (x == 19) {
    //         if (f.godinaIzdanja >= 1800 && f.godinaIzdanja < 1900) {
    //             console.log(f);
    //         }
    //     }
    //     else if (x == 20) {
    //         if (f.godinaIzdanja >= 1900 && f.godinaIzdanja < 2000) {
    //             console.log(f);
    //         }
    //     }
    //     else if (x == 21) {
    //         if (f.godinaIzdanja >= 2000 && f.godinaIzdanja < 2100) {
    //             console.log(f);
    //         }
    //     }
    //     else {
    //         console.log("Unjeli ste pogresan vijek");
    //     }
    // });
};

let prosjecnaOcjena = arr => {
    let broj = 0;
    let zbir = 0;
    arr.forEach(f => {
        f.ocjene.forEach(o => {
            broj++;
            zbir += o;
        });
    });
    return zbir / broj;
};

let najboljeOcjenjeni = arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max.prosjek() < arr[i].prosjek()) {
            max = arr[i];
        }
    }
    return max;
}

let osrednjiFilm = arr => {
    let globalniProsjek = prosjecnaOcjena(arr);
    let filmNajbliziProsjeku = arr[0]; // pretpostavka da je prvi film najblizi prosjeku
    let najmanjaRazlikaOdProsjeka = Math.abs(globalniProsjek - filmNajbliziProsjeku.prosjek());
    arr.forEach(f => {
        let prosjecnaOcjenaFilma = f.prosjek();
        if (Math.abs(globalniProsjek - prosjecnaOcjenaFilma) < najmanjaRazlikaOdProsjeka) {
            najmanjaRazlikaOdProsjeka = Math.abs(globalniProsjek - prosjecnaOcjenaFilma);
            filmNajbliziProsjeku = f;
        }
    });
    return filmNajbliziProsjeku;
    // DOBRO JE, ALI SAM ISLA PJESKE
    // let film = arr[0];
    // let minRazlika = prosjecnaOcjena(arr) - arr[0].prosjek();
    // if (minRazlika < 0) {
    //     minRazlika = -minRazlika;
    // }
    // arr.forEach(f => {
    //     let sadaRazlika = prosjecnaOcjena(arr) - f.prosjek();
    //     if (sadaRazlika < 0) {
    //         sadaRazlika = -sadaRazlika;
    //     }
    //     if (minRazlika > sadaRazlika) {
    //         minRazlika = sadaRazlika;
    //         film = f;
    //     }
    // });
    // return film;
};

let najmanjaOcjenaNajboljeg = arr => {
    let najbolji = najboljeOcjenjeni(arr);
    let min = najbolji.ocjene[0];
    najbolji.ocjene.forEach(o => {
        if (min > o) {
            min = o;
        }
    });
    console.log(min);
};

let najmanjaOcjena = arr => {
    let min = arr[0].ocjene[0];
    arr.forEach(f => {
        f.ocjene.forEach(o => {
            if (min > o) {
                min = o;
            }
        });
    });
    return min;
};


export { Film, vijekFilmova, prosjecnaOcjena, najboljeOcjenjeni, osrednjiFilm, najmanjaOcjenaNajboljeg, najmanjaOcjena };