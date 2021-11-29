// 1. Zadatak
let pera = 6780;
let mika = 8900;
let kusur = 3750;
let zajedno = pera + mika;
let dzemper = (zajedno - kusur) / 2;

let kusurPera = pera - dzemper;
let kusurMika = mika - dzemper;
console.log(`Pera treba da dobije kusur od ${kusurPera} dinara, a Mika treba da dobije kusur od ${kusurMika} dinara`)

// 2. Zadatak
let n = 150;
let a = 60;
let b = a + 2;
let c = n - (a + b);
console.log(`Citaocu je preostalo da procita ${c} poglavlja do kraja knjige`);
if(c < n / 2){
    console.log("Ostalo je da procita jos manje od polovine knjige");
}

// 3. Zadatak
let u = 6789;
let kJUkcal = 4.1868;
let kcal = u / kJUkcal;
if(kcal < 2000){
    console.log("Potrebno je povecati dnevni unos");
}
else{
    console.log("Nije potrebno povecati dnevni unos");
}