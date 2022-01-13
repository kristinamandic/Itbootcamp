class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    Stampaj() {
        // Ako stavimo "this" znaci stampa se cijeli objekat
        console.log(this.ime, this.visina, this.tezina);
    }
    StampajListu() {
        let htmlLista =
            `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }
    Bmi() {
        let m = this.visina / 100;
        let bmi = this.tezina / (m * m);
        return bmi;
    }
    Kritican() {
        let bmi = this.Bmi();
        if (bmi < 15 || bmi > 40) {
            return true;
        }
        else {
            return false;
        }
    }


    set ime(i) {
        let i1 = i.trim();
        this._ime = i1;
    }
    get ime() {
        return this._ime;
    }

    set visina(v) {
        if (v >= 0 && v <= 250) {
            this._visina = v;
        }
        else {
            this._visina = 160;
        }
    }
    get visina() {
        return this._visina;
    }

    set tezina(t) {
        if (t >= 0 && t <= 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 60;
        }
    }
    get tezina() {
        return this._tezina;
    }
}

export { Pacijent };