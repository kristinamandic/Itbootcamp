/*
import { generateList, generateItem as generateListItem } from "./modules/list.js";
import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// Za modul list.js
let list = generateList(document.body);
generateListItem(list, "images/image1.jpg");
generateListItem(list, "images/image2.jpg");
generateListItem(list, "images/image3.jpg");

// Za modul table.js
let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/image1.jpg");
generateTableItem(tr, "images/image2.jpg");
generateTableItem(tr, "images/image3.jpg");
*/

// Kada zelimo da importujemo sve odjednom. On ga importuje kao objekat. To u isto vrijeme rijesava i kada imamo iste nazive promjenljivih ili funkcija u vise modula koje importujemo
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
// import { generateDiv, generateDivItem } from "./modules/div.js";
import * as Div from "./modules/div.js"


let list = List.generateList(document.body);
List.generateItem(list, "images/image1.jpg");
List.generateItem(list, "images/image2.jpg");
List.generateItem(list, "images/image3.jpg");


let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/image1.jpg");
Table.generateItem(tr, "images/image2.jpg");
Table.generateItem(tr, "images/image3.jpg");


// let div = generateDiv(document.body);
// generateDivItem(div, "images/image1.jpg");
// generateDivItem(div, "images/image2.jpg");
// generateDivItem(div, "images/image3.jpg");

let div = Div.generateDiv(document.body);
Div.generateDivItem(div, "images/image1.jpg");
Div.generateDivItem(div, "images/image2.jpg");
Div.generateDivItem(div, "images/image3.jpg");