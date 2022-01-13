class Plivac {
    constructor(i, gr, nr) {
        this.ime = i;
        this.godinaRodjenja = gr;
        this.najboljiRezultat = nr;
    }
    ispisi() {
        console.log(this.ime, this.godinaRodjenja, this.najboljiRezultat);
    }

    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }

    set godinaRodjenja(gr) {
        this._godinaRodjenja = gr;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }

    set najboljiRezultat(nr) {
        this._najboljiRezultat = nr;
    }
    get najboljiRezultat() {
        return this._najboljiRezultat;
    }
}

let topTen = arr => {
    // let min = arr[0].najboljiRezultat;
    // let noviNiz = [];
    // arr.forEach(p => {

    // });
};

let norma = (arr, x) => {
    let noviNiz = [];
    arr.forEach(p => {
        if (p.najboljiRezultat >= x) {
            noviNiz.push(p);
        }
    });
    return noviNiz;
};

let normaNajmladji = arr => {
    let ispuniliNormu = norma(arr);
    console.log(ispuniliNormu);
    // let min = ispuniliNormu[0].godinaRodjenja;
    // let najmladji = ispuniliNormu[0];
    // ispuniliNormu.forEach(p => {
    //     if (p.godinaRodjenja < min) {
    //         min = p.godinaRodjenja;
    //         najmladji = p;
    //     }
    // });
    // console.log(najmladji);
};


export { Plivac, topTen, norma, normaNajmladji };