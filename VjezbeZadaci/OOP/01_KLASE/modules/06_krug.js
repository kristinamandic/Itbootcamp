class Krug {
    constructor(pp) {
        this.poluprecnik = pp;
    }
    obimKruga() {
        let o = 2 * this.poluprecnik * Math.PI;
        return o;
    }
    povrsinaKruga() {
        let p = this.poluprecnik * this.poluprecnik * Math.PI;
        return p;
    }

    set poluprecnik(pp) {
        this._poluprecnik = pp;
    }
    get poluprecnik() {
        return this._poluprecnik;
    }
}

let upisaniKrug = (x, y) => {
    let prvi = x.poluprecnik;
    let drugi = y.poluprecnik;
    if (prvi < drugi) {
        return true;
    }
    else {
        return false;
    }
};

let rastuci = (arr) => {
    let broj = 0;
    let maks = arr[0].poluprecnik;
    arr.forEach(k => {
        if (k.poluprecnik > maks) {
            broj++;
            maks = k.poluprecnik;
        }
    });
    if (broj == (arr.length - 1)) {
        return true;
    }
    else {
        return false;
    }
};

export { Krug, upisaniKrug, rastuci };