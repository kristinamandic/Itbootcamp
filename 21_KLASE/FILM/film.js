class Film {
    constructor(n, r, gi) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
    }
    stampaj() {
        console.log(this.naslov);
    }

    set naslov(n) {
        let n1 = n.trim();
        this._naslov = n1;
    }
    get naslov() {
        return this._naslov;
    }

    set reziser(r) {
        let r1 = r.trim();
        this._reziser = r1;
    }
    get reziser() {
        return this._reziser;
    }

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
}

export default Film;