class Cipela {
    constructor(n, bc, np) {
        this.naziv = n;
        this.brojCipele = bc;
        this.nizPrepravki = np;
    }
    zalepi() {
        console.log("Zalepljenja cipela");
    }
    prosiri() {
        console.log("Prosirena cipela");
    }
    usij() {
        console.log("Usivena cipela");
    }

    set naziv(n) {
        let n1 = n.trim();
        this._naziv = n1;
    }
    get naziv() {
        return this._naziv;
    }

    set brojCipele(bc) {
        this._brojCipele = bc;
    }
    get brojCipele() {
        return this._brojCipele;
    }

    set nizPrepravki(np) {
        this._nizPrepravki = np;
    }
    get nizPrepravki() {
        return this._nizPrepravki;
    }
}

let radi = x => {
    let cipela = x.nizPrepravki;
    let broj = 0;
    if (cipela.includes("zalepi") == true) {
        x.zalepi();
        broj++;
    }
    if (cipela.includes("prosiri") == true) {
        x.prosiri();
        broj++;
    }
    if (cipela.indexOf("usij") != (-1)) {
        x.usij();
        broj++;
    }
    if (broj < cipela.length) {
        console.log("Nepoznata prepravka");
    }

};

let najvisePrepravki = arr => {
    let maks = arr[0].nizPrepravki.length;
    arr.forEach(c => {
        if (c.nizPrepravki.length > maks) {
            maks = c.nizPrepravki.length;
        }
    });
    arr.forEach(c => {
        if (c.nizPrepravki.length == maks) {
            console.log(c);
        }
    });
};

let brojPrepravki = (arr, x) => {
    let broj = 0;
    arr.forEach(c => {
        c.nizPrepravki.forEach(p => {
            if (p.indexOf(x) != (-1)) {
                broj++;
            }
        });
    });
    return broj;
};

export { Cipela, radi, najvisePrepravki, brojPrepravki };