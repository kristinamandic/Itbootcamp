// 1. Zadatak - Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).
let danUNedelji = "1.";
switch (danUNedelji) {
    case "1.":
        console.log("Ponedeljak");
        break;
    case "2.":
        console.log("Utorak");
        break;
    case "3.":
        console.log("Srijeda");
        break;
    case "4.":
        console.log("Cetvrtak");
        break;
    case "5.":
        console.log("Petak");
        break;
    case "6.":
        console.log("Subota");
        break;
    case "7.":
        console.log("Nedelja");
        break;
    default:
        console.log("Pogresan unos");
}


// 2. Zadatak - Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).
let ocjena = 5;
switch (ocjena) {
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlodobar");
        break;
    case 5:
        console.log("Odlican");
        break;
    default:
        console.log("Pogresan unos");
}


// 3. Zadatak - Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.
let paranBroj = 4;
switch (paranBroj) {
    case 0:
        console.log("Nula");
        break;
    case 2:
        console.log("Dva");
        break;
    case 4:
        console.log("Cetiri");
        break;
    case 6:
        console.log("Sest");
        break;
    case 8:
        console.log("Osam");
        break;
    default:
        console.log("Pogresan unos");
}


// 4. Zadatak - Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.
let br1 = 3;
let br2 = 2;
let karakter = "s";
let rez;
switch (karakter) {
    case "m":
        rez = br1 * br2;
        console.log(rez);
        break;
    case "d":
        rez = br1 / br2;
        console.log(rez);
        break;
    case "s":
        rez = br1 + br2;
        console.log(rez);
        break;
    case "o":
        rez = br1 - br2;
        console.log(rez);
        break;
    default:
        console.log("Pogresan unos");
}


// 5. Zadatak - Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.
let datum = new Date();
dan = datum.getDay();
switch (dan) {
    case 1:
        console.log("Preostalo je 5 dana do vikenda");
        break;
    case 2:
        console.log("Preostalo je 4 dana do vikenda");
        break;
    case 3:
        console.log("Preostalo je 3 dana do vikenda");
        break;
    case 4:
        console.log("Preostalo je 2 dana do vikenda");
        break;
    case 5:
        console.log("Preostalo je 1 dan do vikenda");
        break;
    case 6:
        console.log("Vikend je");
        break;
    case 0:
        console.log("Vikend je");
}


// 6. Zadatak - Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
mjesec = datum.getMonth();
mjesec++;
let godina;
switch (mjesec) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novembar");
        break;
    case 12:
        console.log("Decembar");
}


// 7. Zadatak - Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
let DaniUMjesecu = datum.getMonth();
DaniUMjesecu++;
switch (DaniUMjesecu) {
    case 1:
        console.log("Januar ima 31 dan");
        break;
    case 2:
        godina = datum.getFullYear();
        if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
            console.log("Februar ima 29 dana, godina je prestupna");
        }
        else {
            console.log("Februar ima 28 dana, godina nije prestupna");

        }
        break;
    case 3:
        console.log("Mart ima 31 dan");
        break;
    case 4:
        console.log("April ima 30 dana");
        break;
    case 5:
        console.log("Maj ima 31 dan");
        break;
    case 6:
        console.log("Jun ima 30 dana");
        break;
    case 7:
        console.log("Jul ima 31 dan");
        break;
    case 8:
        console.log("Avgust ima 31 dan");
        break;
    case 9:
        console.log("Septembar ima 30 dana");
        break;
    case 10:
        console.log("Oktobar ima 31 dan");
        break;
    case 11:
        console.log("Novembar ima 30 dana");
        break;
    case 12:
        console.log("Decembar ima 31 dan");
}



// 8. Zadatak - Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.
let boja = "blue";
switch (boja) {
    case "red":
        document.body.innerHTML += `<p style="color:red">Tekst paragrafa</p>`
        break;
    case "green":
        document.body.innerHTML += `<p style="color:green">Tekst paragrafa</p>`
        break;
    case "blue":
        document.body.innerHTML += `<p style="color:blue">Tekst paragrafa</p>`
        break;
    default:
        document.body.innerHTML += `<p style="color:yellow">Tekst paragrafa</p>`
}