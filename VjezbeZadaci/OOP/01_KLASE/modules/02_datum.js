class Datum {
    constructor(d, m, g) {
        this.dan = d;
        this.mjesec = m;
        this.godina = g;
    }

    // Seter i geter za polje _dan:
    set dan(d) {
        if (d > 0 && d < 31) {
            this._dan = d;
        }
        else {
            this._dan = 1;
        }
    }
    get dan() {
        return this._dan;
    }

    // Seter i geter za polje _mjesec:
    set mjesec(m) {
        if (m > 0 && m <= 12) {
            this._mjesec = m;
        }
        else {
            this._mjesec = 1;
        }
    }
    get mjesec() {
        return this._mjesec;
    }

    // Seter i geter za polje _godina:
    set godina(g) {
        if (g > 0) {
            this._godina = g;
        }
        else {
            this._godina = 2022;
        }
    }
    get godina() {
        return this._godina;
    }
}


let ranijiDatum = (x, y) => {
    let min = x.godina;
    if (y.godina == min) {
        min = x.mjesec;
        if (y.mjesec == min) {
            min = x.dan;
            if (y.dan == min) {
                console.log(`Datum ${y.dan}. ${y.mjesec}. ${y.godina}. i datum ${x.dan}. ${x.mjesec}. ${x.godina}. su jednaki`);
            }
            else if (y.dan < min) {
                console.log(`Datum ${y.dan}. ${y.mjesec}. ${y.godina}. je raniji od datuma ${x.dan}. ${x.mjesec}. ${x.godina}.`);
            }
            else {
                console.log(`Datum ${x.dan}. ${x.mjesec}. ${x.godina}. je raniji od datuma ${y.dan}. ${y.mjesec}. ${y.godina}.`);
            }
        }
        else if (y.mjesec < min) {
            console.log(`Datum ${y.dan}. ${y.mjesec}. ${y.godina}. je raniji od datuma ${x.dan}. ${x.mjesec}. ${x.godina}.`);
        }
        else {
            console.log(`Datum ${x.dan}. ${x.mjesec}. ${x.godina}. je raniji od datuma ${y.dan}. ${y.mjesec}. ${y.godina}.`);
        }
    }
    else if (y.godina < min) {
        console.log(`Datum ${y.dan}. ${y.mjesec}. ${y.godina}. je raniji od datuma ${x.dan}. ${x.mjesec}. ${x.godina}.`);
    }
    else {
        console.log(`Datum ${x.dan}. ${x.mjesec}. ${x.godina}. je raniji od datuma ${y.dan}. ${y.mjesec}. ${y.godina}.`);
    }
}

export { Datum, ranijiDatum };