class Radnik {
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }

    set ime(i) {
        let i1 = i.trim();
        if (i1.length > 0) {
            this._ime = i1;
        }
        else {
            this._ime = "Radnik";
        }
    }
    get ime() {
        return this._ime;
    }

    set plata(p) {
        if (p > 0) {
            this._plata = p;
        }
        else {
            this._plata = 350;
        }
    }
    get plata() {
        return this._plata;
    }
}

let maksPlata = (arr) => {
    let maks = arr[0].plata;
    arr.forEach(r => {
        if (r.plata > maks) {
            maks = r.plata;
        }
    });
    return maks;
};

let maksPlataOsoba = (arr) => {
    let maks = maksPlata(arr);
    arr.forEach(r => {
        if (r.plata == maks) {
            console.log(r);
        }
    });
};

export { Radnik, maksPlata, maksPlataOsoba };