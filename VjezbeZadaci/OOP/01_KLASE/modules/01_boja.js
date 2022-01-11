class Boja {
    constructor(td, z, i) {
        this.talasnaDuzina = td;
        this.zasicenje = z;
        this.intenzitet = i;
    }

    // Seter i geter za polje _talasnaDuzina:
    set talasnaDuzina(td) {
        if ((td - Math.floor(td)) == 0) {
            this._talasnaDuzina = td;
        }
        else {
            this._talasnaDuzina = Math.floor(td);
        }
    }
    get talasnaDuzina() {
        return this._talasnaDuzina;
    }

    // Seter i geter za polje _zasicenje:
    set zasicenje(z) {
        this._zasicenje = z;
    }
    get zasicenje() {
        return this._zasicenje;
    }

    // Seter i geter za polje _intenzitet:
    set intenzitet(i) {
        this._intenzitet = i;
    }
    get intenzitet() {
        return this._intenzitet;
    }
}

let ispitajSlicnost = (x, y) => {
    if (x.talasnaDuzina == y.talasnaDuzina && x.zasicenje == y.zasicenje && x.intenzitet == y.intenzitet) {
        return true;
    }
    else {
        return false;
    }
};

let srednjaTalasnaDuzina = (arr) => {
    let zbir = 0;
    arr.forEach(b => {
        zbir += b.talasnaDuzina;
    });
    return zbir / arr.length;
};

export { Boja, ispitajSlicnost, srednjaTalasnaDuzina };