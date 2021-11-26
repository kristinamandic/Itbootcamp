console.log("Pozdrav iz JS datoteke!");

let a = 3, b = 6;
console.log(a * b);
console.log("Pera" + "Stankovic");
console.log("Pera" * "Stankovic");

b = b / a;
console.log(a, b);  // a = 3, b = 2
a = b * a + a;  // 2 * 3 + 3 = 6 + 3 = 9
console.log(a, b);  // a = 9, b = 2
b = (a - 2 * b) / b;  // (9 - 2 * 2) / 2 = (9 - 4) / 2 = 5 / 2 = 2.5
console.log(a, b);

// a = a + 10;
a += 10;  // skracenica od ovoga gore
console.log(a);  // a = 19
b /= a;  // b = b / a
console.log(b);

// a = a + 1;
// a += 1;
a++;  // vrijednost se uvecava za 1, isto je kao ovo gore
console.log(a);

// a + 1 = a; - ovo je greska
++a; // i ovo uvecava vrijednost za 1, razlika izmedju njih je kada se koriste u izrazima
console.log(a);

let c = 5;
console.log(c++);  // Prvo se iskoristi prava vrijednost promjenljive u izrazu pa se onda vrijednost promjenljive poveca, c = 5
console.log(c);  // Poslije prve komande c dobija novu vrijednost, c = 6

let d = 3;
console.log(++d);  //Prvo se vrijednost promjenljive poveca za 1, a onda se nova vrijednost koristi u izrazu, d = 4
console.log(d);  // d = 4

c = 4;
d = 3;
x = (c++) * (--d); // 4 * 2 = 8
console.log(c, d, x);  // c = 5, d = 2, x = 8

// Modularna aritmetika (%):
console.log(7 % 2);  // 7 = 3 * 2 + 1, odnosno, ostatak od djeljenja
console.log(9 % 2);  // 9 = 4 * 2 + 1
console.log(6 % 2);  // 6 = 3 * 2 + 0

console.log(180 % 60);  // 180 = 3 * 60 + 0, ostatak je 0 moguci rezultati: 0, 1, 2, ..., 59

// Prof. otvori stranicu (56 % 13) + 1  -> (1, 2,..., 12, 13)
console.log(365 % 7);  // ostatak = 1, ove god je 31.dec petak, a sljedece subota, ako je prestupna godina onda je 2 dana razlike

// Stepenovanje (**):
console.log(4 ** 3);  // 4 * 4 * 4 = 16 * 4 = 64

c = 3;
d = 1 + c ** 3;  // 1 + (3 ** 3) = 1 + 27 = 28
console.log(d);

