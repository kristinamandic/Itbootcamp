console.log("Logicki Operatori")

// 1. prioritet - Negacija
// 2. And
// 3. Or
// logicki operatori bi trebali da se odvajaju zagradama
// if(true && true || false) -> (false && true || false) -> (false || false) -> false
// if (true && true) || false

// 1. Zadatak
let pol = "m";
let god = 18;

if(pol == "m" && god >= 18){
    console.log("Osoba je muskog pola i punoljetna je");
}
else if(pol == "m" && god < 18 && god >= 0){
    console.log("Osoba je muskog pola i maloljetna je");
}
else if(pol == "z" && god >= 18){
    console.log("Osoba je zenskog pola i punoljetna je");
}
else if(pol == "z" && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloljetna je");
}
else{
    console.log("Pogresan unos");
}

////////////////////////

pol = "m";
if(pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž"){
    document.body.innerHTML = `Zenski pol`;
}
else if(pol == "m" || pol == "M"){
    document.body.innerHTML = `Muski pol`;
}
else{
    document.body.innerHTML = `<p>Pogresan unos</p>`;
}

document.body.innerHTML += "Hello";

//////////////////////////

pol = "z";
god = 73;
if( (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18){
    console.log("Osoba je zenskog pola i punoljetna je")
}
else if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloljetna je");
}
else if((pol == "m" || pol == "M") && god >= 18){
    console.log("Osoba je muskog pola i punoljetna je");
}
else if((pol == "m" || pol == "M") && god < 18 && god >= 0){
    console.log("Osoba je muskog pola i maloljetna je");
}
else{
    console.log("Pogresan unos");
}