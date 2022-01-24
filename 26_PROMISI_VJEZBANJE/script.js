/*
1. IDEJA: getItems() da se pozove jedan za drugim
          getItems("./JSON/stock.json");
          getItems("./JSON/weights.json");
          getItems("./JSON/prices.json");
   NETACNA IDEJA, jer je svaki getItem asinhron poziv,
   sto znaci da ne mora weights.json da se dohvati prije stock.json
   (slicno i za prices.json)

2. IDEJA: Redosljed asinhronih poziva odvija preko callbeck funkcija
   TACNA IDEJA, ali neprakticna (callback hell)

3. IDEJA: Redosljed asinhronih poziva odvija preko Promis-a

*/

let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");


// PREKO CALLBACK HELL-a
function getItem(resourse, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            // Sve OK
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            // Nije sve OK - desila se neka greska
            reject("Could not fetch data");
        }
    });
    request.open("GET", resourse);
    request.send();
}

function submitForm1(event) {
    event.preventDefault();
    let capasity = inputOrder.value;
    let ids = [];
    getItem("./JSON/stock.json", (data) => {
        data.forEach(item => {
            if (item.stock <= 0) {
                ids.push(item.id);
            }
        });
        getItem("JSON/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            // console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${totalWeight}`);
            if (totalWeight > capasity) {
                let par = document.createElement("p");
                par.innerHTML = "Ukupna tezina proizvoda je veca od kapaciteta kamiona";
                par.style.color = "red";
                par.style.fontSize = "24px";
                par.style.fontWeight = "bold";
                divOrder.append(par);
            }
            else {
                getItem("JSON/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (ids.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement("p");
                    par.innerHTML = `Ukupna cijena porudzbine je: ${totalPrice} RSD`;
                    par.style.color = "green";
                    par.style.fontSize = "24px";
                    par.style.fontWeight = "bold";
                    divOrder.append(par);
                }, (message) => {
                    console.log(message);
                });
            }
        }, (message) => {
            console.log(message);
        });
    }, (message) => {
        console.log(message);
    });
}

// formOrder.addEventListener("submit", submitForm1);


/////////////////////////////////////////////////
// PREKO PROMIS-a
function getItemReturnPromise(resourse) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Could not fetch data");
            }
        });
        request.open("GET", resourse);
        request.send();
    });
}

// 1. ZADATAK - BONUS
function submitForm2(event) {
    event.preventDefault();
    let capasity = inputOrder.value;
    let ids = [];
    getItemReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return getItemReturnPromise("./JSON/weights.json");
        })
        .then((data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight > capasity) {
                let par = document.createElement("p");
                par.innerHTML = "Ukupna tezina proizvoda je veca od kapaciteta kamiona";
                par.style.color = "red";
                par.style.fontSize = "24px";
                par.style.fontWeight = "bold";
                divOrder.append(par);
            }
            else {
                return getItemReturnPromise("JSON/prices.json");
            }
        })
        .then((data) => {
            if (data != undefined) {
                let totalPrice = 0;
                let tabela = document.createElement("table");
                tabela.style.border = "black 1px solid";
                divOrder.appendChild(tabela);
                data.forEach(item => {
                    if (ids.includes(item.id)) {
                        totalPrice += item.price;
                        let trItem = document.createElement("tr");
                        let tdItem = document.createElement("td");
                        tdItem.innerText = `${item.item}`;
                        trItem.appendChild(tdItem);
                        let tdPrice = document.createElement("td");
                        tdPrice.innerText = `${item.price}`;
                        trItem.appendChild(tdPrice);
                        tabela.appendChild(trItem);
                    }
                });
                let trTotal = document.createElement("tr");
                let tdTotal = document.createElement("td");
                tdTotal.innerText = `UKUPNO`;
                trTotal.appendChild(tdTotal);
                let tdTotalPrice = document.createElement("td");
                tdTotalPrice.innerText = `${totalPrice}`;
                trTotal.appendChild(tdTotalPrice);
                tabela.appendChild(trTotal);
            }
        })
        .catch((message) => {
            console.log(message);
        });
}

// formOrder.addEventListener("submit", submitForm2);


//////////////////////////////////////////////////
// 2. ZADATAK

let divInStock = document.getElementById("inStock");
let formInStock = document.querySelector("#inStock form");
let inputKeyWord = document.querySelector("#keyWord");
let inputMinPrice = document.getElementById("minPrice");
let inputMaxPrice = document.getElementById("maxPrice");


function submitForm3(event) {
    event.preventDefault();
    let inStock = [];
    let keyWord = inputKeyWord.value;
    let minPrice = parseFloat(inputMinPrice.value);
    let maxPrice = parseFloat(inputMaxPrice.value);
    getItemReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach(i => {
                if (i.stock > 0 && i.item.includes(keyWord)) {
                    inStock.push(i.item);
                }
            });
            return getItemReturnPromise("./JSON/prices.json");
        })
        .then((data) => {
            if (data != undefined) {
                let ul = document.createElement("ul");
                divInStock.appendChild(ul);
                data.forEach(i => {
                    if (inStock.includes(i.item)) {
                        if (i.price >= minPrice && i.price <= maxPrice) {
                            let li = document.createElement("li");
                            li.innerHTML = `${i.item}`;
                            ul.appendChild(li);
                        }
                    }
                });
            }
        })
        .catch((msg) => {
            console.log(msg);
        });
}

// formInStock.addEventListener("submit", submitForm3);


// 2. ZADATAK - BONUS
function submitForm4(event) {
    event.preventDefault();
    let inStock = [];
    let keyWord = inputKeyWord.value;
    let minPrice = parseFloat(inputMinPrice.value);
    let maxPrice = parseFloat(inputMaxPrice.value);
    getItemReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach(i => {
                if (i.stock > 0 && i.item.includes(keyWord)) {
                    inStock.push(i.item);
                }
            });
            return getItemReturnPromise("./JSON/prices.json");
        })
        .then((data) => {
            if (data != undefined) {
                let tabela = document.createElement("table");
                divInStock.appendChild(tabela);
                let trHeader = document.createElement("tr");
                let th1 = document.createElement("th");
                th1.innerText = "Naziv artikla";
                trHeader.appendChild(th1);
                let th2 = document.createElement("th");
                th2.innerText = "Stanje u magacinu";
                trHeader.appendChild(th2);
                let th3 = document.createElement("th");
                th3.innerText = "Cijena artikla";
                trHeader.appendChild(th3);
                tabela.appendChild(trHeader);
                data.forEach(i => {
                    if (inStock.includes(i.item)) {
                        if (i.price >= minPrice && i.price <= maxPrice) {
                            let trItem = document.createElement("tr");
                            let td1 = document.createElement("td");
                            td1.innerText = `${i.item}`;
                            trItem.appendChild(td1);
                            let td2 = document.createElement("td");
                            td2.innerText = `${i.stock}`;
                            trItem.appendChild(td2);
                            let td3 = document.createElement("td");
                            td3.innerText = `${i.price}`;
                            trItem.appendChild(td3);
                            tabela.appendChild(trItem);
                        }
                    }
                });
            }
        })
        .catch((msg) => {
            console.log(msg);
        });
}

// formInStock.addEventListener("submit", submitForm4);


// 2. ZADATAK - BONUS - ALTERNATIVNI NACIN 

// Asinhrona funckija po defaltu vraca Promise
// async - Kljucna rijec kojom funkciju cinimo asinhronom
async function clickGetItems() {
    let keyWord = inputKeyWord.value;
    let minPrice = parseFloat(inputMinPrice.value);
    let maxPrice = parseFloat(inputMaxPrice.value);

    let data1 = await getItemReturnPromise("JSON/stock.json"); // pozovi promis i cekaj da zavrsi - await = cekanje - da bi ova kljucna rijec radila, moramo da stavimo async ispred funkcije
    let inStock = [];
    data1.forEach(i => {
        if (i.stock > 0) {
            inStock.push(i.id);
        }
    });

    let tabela = document.createElement("table");
    let data2 = await getItemReturnPromise("JSON/prices.json");
    data2.forEach(i => {
        if (inStock.includes(i.id) && i.item.includes(keyWord) && i.price >= minPrice && i.price <= maxPrice) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerHTML = i.item;
            td2.innerHTML = i.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    });

    return tabela;
}

function action(event) {
    event.preventDefault();
    //  Pozivamo asinhronu funkciju
    clickGetItems()
        .then((data) => {
            divInStock.appendChild(data);
        })
        .catch((err) => {
            console.log(err);
        });
}


formInStock.addEventListener("submit", action);