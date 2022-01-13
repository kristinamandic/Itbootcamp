// Svaka klasa mora da ima metodu constructor - u toj metodi se navode parametri koje ce buduci objekat da ima - odn polja

class Auto {
    constructor(m, b, ik, bv = 5) { // marka, boja, ima krov
        this.marka = m; // poziva se seter marka
        this.boja = b;  // polje se poziva uz pomoc setera
        this.imaKrov = ik;
        this.brojVrat = bv;

        // Kada nemamo seter i geter
        // this._boja = b;  // uvodim polje sa nazivom _boja i dajem mu vrijednost b
        // this._imaKrov = ik;
        // this._brojVrata = bv;
    }
    sviraj() {
        console.log("Beep! Beep!");
    }
    vozi(x) {
        let m = this.marka;  // poziva se geter marka
        console.log(`Auto ${m} vozi ${x}km`);
    }
    stampaj() {
        console.log(`Auto marke ${this.marka}, boje: ${this.boja}, ima Krov: ${this.imaKrov}, i ima: ${this.brojVrata} vrata`);
        // svuda su poznavi geteri
    }

    // Seter i geter za polje _marka:
    set marka(m) {  // nazivo ga isto kao polje samo bez crtice
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
    }
    get marka() {
        return this._marka;
    }

    // Seter i geter za polje _boja:
    set boja(b) {
        this._boja = b;
    }
    get boja() {
        return this._boja;
    }

    // Seter i geter za polje _imaKrov:
    set imaKrov(ik) {
        if (ik === true || ik === false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }
    get imaKrov() {
        return this._imaKrov;
    }

    // Seter i geter za polje _brojVrata:
    set brojVrata(bv) {
        if (bv > 0) {
            this._brojVrata = bv;
        }
        else {
            this._brojVrata = 1;
        }
    }
    get brojVrata() {
        return this._brojVrata;
    }

}

export default Auto;

/* Ne izgleda bas lijepo
    // Metoda koja postavlja vrijednost polja _marka:
    postaviMarku(m) {
        let m1 = m.trim(); // trim znaci ako ima spaceova na pocetku i kraju on ih izbaci
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
    }
    
    // Metoda koja cita vrijednost polja
    dohvatiMarku() {
        return this._marka;
    }
    */