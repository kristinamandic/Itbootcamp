export class ChatUI {
    constructor(el) {
        this.element = el;
    }

    // Seter i geter za element
    set element(el) {
        this._element = el;
    }
    get element() {
        return this._element;
    }

    // Metod za formatiranje polja created_at
    formatDate(doc) {
        // Datum danas 
        let dateNow = new Date();

        // Datum slanja poruke
        let date = new Date(doc);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // Dodavanje 0 ispred jednocifrenih vrijednosti
        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");

        // Ukoliko je poruka poslata danas prikazati samo vreme slanja poruke, u suprotnom prikazati datum i vreme slanja poruke 
        if (dateNow.toLocaleDateString() == date.toLocaleDateString()) {
            return `${hours}:${minutes}`;
        }
        else {
            return `${day}.${month}.${year}. - ${hours}:${minutes}`;
        }
    }

    // Metod koji sluzi kao template
    templateLI(data) {
        let doc = data.data(); // Uzimamo podatke iz dokumenta
        let date = doc.created_at.toDate();
        let htmlLi = document.createElement("li");
        htmlLi.innerHTML =
            `
            <span>${doc.username}:</span> ${doc.message}
            <br>
            <p class="time_stamp">${this.formatDate(date)}</p>
            <img class="bin" src="images/trash2.png">
            `;
        htmlLi.id = data.id;
        htmlLi.classList.remove("me");
        if (doc.username == localStorage.username) {
            htmlLi.classList.add("me");
        }
        this.element.prepend(htmlLi);
    }

    // Metod za brisanje poruka sa ekrana
    clear() {
        this.element.innerHTML = "";
    }
};