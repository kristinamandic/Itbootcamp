class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocjene = o;
    }
    stampaj() {
        console.log(this.naslov);
    }
    // DODAVANJE JEDNE OCJENE 
    dodajOcjenu(novaOcjena) {
        this._ocjene.push(novaOcjena);
    }
    prosjek() {
        let zbir = 0;
        this.ocjene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocjene.length;
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

    set ocjene(o) {
        this._ocjene = o;
    }
    get ocjene() {
        return this._ocjene;
    }
}

export default Film;