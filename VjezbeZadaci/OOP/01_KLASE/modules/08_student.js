class Student {
    constructor(j, i, p, no, po) {
        this.jmbg = j;
        this.ime = i;
        this.prezime = p;
        this.nizOcjena = no;
        this.prosjecnaOcjena = po;
    }
    ispis() {
        console.log(this.ime, this.prezime, this.jmbg, this.nizOcjena, this.prosjecnaOcjena);
    }

    set jmbg(j) {
        if (j.length == 13) {
            this._jmbg = j;
        }
        else {
            this._jmbg = false;
        }
    }
    get jmbg() {
        return this._jmbg;
    }

    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }

    set prezime(p) {
        this._prezime = p;
    }
    get prezime() {
        return this._prezime;
    }

    set nizOcjena(no) {
        for (let i = 0; i < no.length; i++) {
            if (no[i] < 6 || no[i] > 10) {
                no[i] = 6;
            }
        }
        this._nizOcjena = no;
    }
    get nizOcjena() {
        return this._nizOcjena;
    }

    set prosjecnaOcjena(po) {
        let zbir = 0;
        this.nizOcjena.forEach(o => {
            zbir += o;
        });
        this._prosjecnaOcjena = zbir / this.nizOcjena.length;
    }
    get prosjecnaOcjena() {
        return this._prosjecnaOcjena;
    }
}

let imePrezime = (arr, x, y) => {
    let broj = 0;
    arr.forEach(s => {
        if (s.ime == x && s.prezime == y) {
            broj++;
        }
    });
    return broj;
};

let srednjaOcjena = arr => {
    let zbir = 0;
    let broj = 0;
    arr.forEach(s => {
        s.nizOcjena.forEach(o => {
            zbir += o;
            broj++;
        });
    });
    let sreO = zbir / broj;
    console.log(sreO);
    return sreO;
};

let osrednji = arr => {
    let sreO = srednjaOcjena(arr);
    let min = sreO - arr[0].prosjecnaOcjena;
    let student = arr[0];
    arr.forEach(s => {
        let sadasnjiStudent = sreO - s.prosjecnaOcjena;
        if (sadasnjiStudent < 0) {
            sadasnjiStudent = -sadasnjiStudent;
        }
        if (min < 0) {
            min = -min;
        }
        if (sadasnjiStudent < min) {
            min = sadasnjiStudent;
            student = s;
        }
    });
    console.log(student);
};

let najmanjaOcjenaNajboljeg = arr => {
    let najbolji = arr[0].prosjecnaOcjena;
    let student = arr[0];
    arr.forEach(s => {
        if (s.prosjecnaOcjena > najbolji) {
            najbolji = s.prosjecnaOcjena;
            student = s;
        }
    });
    let min = student.nizOcjena[0];
    console.log(min);
    student.nizOcjena.forEach(o => {
        if (o < min) {
            min = o;
        }
    });
    console.log(student.ime, student.prezime, min);
};

let najmanjaOcjena = arr => {
    let min = arr[0].nizOcjena[0];
    arr.forEach(s => {
        s.nizOcjena.forEach(o => {
            if (o < min) {
                min = o;
            }
        });
    });
    return min;
};

let najcescaOcjena = arr => {
    // Napravljen je niz od 5 elemenata, svaki element predstavlja jednu ocjenu, krece od 6 i zavrsava se sa 10
    // Razlika izmedju broja indeksa niza "br" i svake ocjene je 6 i zbog toga se u if grani na index dodaje 6
    let br = [0, 0, 0, 0, 0];
    for (let i = 0; i < br.length; i++) {
        arr.forEach(s => {
            s.nizOcjena.forEach(o => {
                if (o == (i + 6)) {
                    br[i]++;
                }
            });
        });
    }
    let najcesce = br[0];
    let ocjena = br[0];
    br.forEach((b, i) => {
        if (b > najcesce) {
            najcesce = b;
            ocjena = i + 6;
        }
    });
    return ocjena;
};

let rodjeniGodine = (arr, x) => {
    arr.forEach(s => {
        if (s.jmbg.includes(x - 1000)) {
            console.log(s);
        }
    });
};

export { Student, imePrezime, srednjaOcjena, osrednji, najmanjaOcjenaNajboljeg, najmanjaOcjena, najcescaOcjena, rodjeniGodine };