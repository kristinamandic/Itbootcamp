class Autobus {
    constructor(rb, bs) {
        this.registarskiBroj = rb;
        this.brojSjedista = bs;
    }
    ispis() {
        console.log(`Registarski broj autobusa je ${this.registarskiBroj} i ima ${this.brojSjedista} sjedista`);
    }

    set registarskiBroj(rb) {
        if (rb.length == 7) {
            this._registarskiBroj = rb;
        }
        else {
            this._registarskiBroj = "BG223KR";
        }
    }
    get registarskiBroj() {
        return this._registarskiBroj;
    }

    set brojSjedista(bs) {
        this._brojSjedista = bs;
    }
    get brojSjedista() {
        return this._brojSjedista;
    }
}

let ukupnoSjedista = (arr) => {
    let zbir = 0;
    arr.forEach(a => {
        zbir += a.brojSjedista;
    });
    return zbir;
};

let maksSjedista = (arr) => {
    let maks = arr[0].brojSjedista;
    let autobus = arr[0];
    arr.forEach(a => {
        if (a.brojSjedista > maks) {
            maks = a.brojSjedista;
            autobus = a;
        }
    });
    console.log(autobus);
};

let ljudi = (arr, x) => {
    let zbir = ukupnoSjedista(arr);
    if (x > zbir) {
        return false;
    }
    else {
        return true;
    }
};


export { Autobus, ukupnoSjedista, maksSjedista, ljudi };