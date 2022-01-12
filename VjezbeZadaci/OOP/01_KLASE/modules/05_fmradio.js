class FMRadio {
    constructor(s, f, jt) {
        this.stanica = s;
        this.frekvencija = f;
        this.jacinaTona = jt;
    }
    promjeniZvuk(x) {
        let jz = this.jacinaTona;
        if (x == "+") {
            jz++;
            if (jz > 20) {
                jz = 20;
            }
        }
        else if (x == "-") {
            jz--;
            if (jz < 0) {
                jz = 0;
            }
        }
        else {
            console.log("Unjeli ste pogresan simbol");
        }
        this.jacinaTona = jz;
    }
    frekvencijaIskljuci() {
        this.frekvencija = 87.5;
    }

    set stanica(s) {
        let s1 = s.trim();
        if (s1.length > 0) {
            this._stanica = s1;
        }
        else {
            this._stanica = "Radio";
        }
    }
    get stanica() {
        return this._stanica;
    }

    set frekvencija(f) {
        if (f >= 87.5 && f <= 108) {
            this._frekvencija = f;
        }
        else {
            this._frekvencija = 100;
        }
    }
    get frekvencija() {
        return this._frekvencija;
    }

    set jacinaTona(jt) {
        if (jt >= 0 && jt <= 20) {
            this._jacinaTona = jt;
        }
        else {
            this._jacinaTona = 15;
        }
    }
    get jacinaTona() {
        return this._jacinaTona;
    }
}

let srednjaFrekvencija = (arr) => {
    let zbir = 0;
    arr.forEach(s => {
        zbir += s.frekvencija;
    });
    return zbir / arr.length;
};

// Shvatila sam da ne treba da se ispise maksimalna frekvencija, vec druga maksimalna frekvencija
function najbliziMaks(arr) {
    let maks = arr[0].frekvencija;
    arr.forEach(s => {
        if (s.frekvencija > maks) {
            maks = s.frekvencija;
        }
    });
    let maks2 = arr[0].frekvencija;
    arr.forEach(s => {
        if (s.frekvencija > maks2 && s.frekvencija < maks) {
            maks2 = s.frekvencija;
        }
    });
    return maks2;
}

export { FMRadio, srednjaFrekvencija, najbliziMaks };