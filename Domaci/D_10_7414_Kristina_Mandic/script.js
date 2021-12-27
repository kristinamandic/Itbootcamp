let dan = {
    datum: "2021/12/24",
    kisa: true,
    sunce: false,
    oblacno: true,
    temp: [5, 12, 15, 15, 14, 10, 10],
    //1. Zadatak 
    tropski: function () {
        let br = 0;
        this.temp.forEach(t => {
            if (t < 24) {
                br++;
            }
        });
        return br == 0;
    },
    // 2. Zadatak 
    nepovoljan: function () {
        let prethodni = this.temp[0];
        let sljedeci = this.temp[0 + 1];
        let br = 0;
        for (let i = 0; i < (this.temp.length - 1); i++) {
            prethodni = this.temp[i];
            sljedeci = this.temp[i + 1];
            if (prethodni - sljedeci > 8 || sljedeci - prethodni > 8) {
                br++;
            }
        }
        return br != 0;
    },
    // 3. Zadatak 
    neuobicajen: function () {
        let manjeOd5 = 0;
        let viseOd25 = 0;
        this.temp.forEach(t => {
            if (t < -5) {
                manjeOd5++;
            }
            else if (t > 25) {
                viseOd25++;
            }
        });
        if (this.kisa == true && manjeOd5 > 0) {
            return true;
        }
        else if (this.oblacno == true && viseOd25 > 0) {
            return true;
        }
        else if (this.kisa == true && this.oblacno == true && this.sunce == true) {
            return true;
        }
        else {
            return false;
        }
    }
};

console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
dan.nepovoljan()