class Knjiga {
    constuctor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godinaIzdanja = gi;
        this.brojStrana = bs;
        this.cijena = c;
    }
    // METODE
    stampaj() {
        console.log(this);
    }
    obimna() {
        if (this.brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }
    skupa() {
        if (this.cijena > 8000) {
            return true;
        }
        else {
            return false;
        }
    }
    dugackoIme() {
        if (this.autor.length > 18) {
            return true;
        }
        else {
            return false;
        }
    }

    // GETERI I SETERI
    // NASLOV
    set naslov(n) {
        let n1 = n.trim();
        this._naslov = n1;
    }
    get naslov() {
        return this._naslov;
    }

    // AUTOR
    set autor(a) {
        let a1 = a.trim();
        this._autor = a1;
    }
    get autor() {
        return this._autor;
    }

    // GODINA IZDANJA
    set godinaIzdanja(gi) {
        this._godinaIzdanja = gi;
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    // BROJ STRANA 
    set brojStrana(bs) {
        if (bs > 0) {
            this._brojStrana = bs;
        }
        else {
            this._brojStrana = 100;
        }
    }
    get brojStrana() {
        return this._brojStrana;
    }

    // CIJENA
    set cijena(c) {
        this._cijena = c;
    }
    get cijena() {
        return this._cijena;
    }
}

// FUNKCIJE
let ukupnaCijena = arr => {

};

let prosjecnaCijena = arr => {

};

let prosjecnaStranica = arr => {

};

export { Knjiga, ukupnaCijena, prosjecnaCijena, prosjecnaStranica };