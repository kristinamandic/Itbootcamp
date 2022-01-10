// Za modul list.js
import { generateList, generateListItem } from "./modules/list.js";

let list = generateList(document.body);
generateListItem(list, "images/image1.jpg");
generateListItem(list, "images/image2.jpg");
generateListItem(list, "images/image3.jpg");

// Za modul table.js