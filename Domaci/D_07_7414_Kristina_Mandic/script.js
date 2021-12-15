// 1. Zadatak - Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1;
    for (i = n; i <= m; i++) {
        proizvod *= i;
    }
    console.log(proizvod);
}

mnozi(5, 6);


// 2. Zadatak - Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina(n, m) {
    let br = 0;
    let suma = 0;
    for (i = n; i <= m; i++) {
        suma += i;
        br++;
    }
    let arSred = suma / br;
    return arSred;
}

arSred1 = aritmetickaSredina(1, 5);
console.log(arSred1);


// 3. Zadatak - Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina3(n, m) {
    let br = 0;
    let suma = 0;
    for (i = n; i <= m; i++) {
        if (n % 10 == 3) {
            suma += i;
            br++;
        }
    }
    let arSred = suma / br;
    return arSred;
}

arSred3 = aritmetickaSredina3(3, 23);
console.log(arSred3);


// 4. Zdatak - Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function velicinaTeksta(n) {
    document.body.innerHTML += `<p style="font-size:${n}px">Tekst Tekst</p>`
}

velicinaTeksta(20);