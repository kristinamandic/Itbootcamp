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
    formatDate(time) {
        let day = time.getDate();
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let hours = time.getHours();
        let minutes = time.getMinutes();

        // Dodavanje 0 ispred jednocifrenih vrijednosti
        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");


        let date = `${day}.${month}.${year}. - ${hours}:${minutes}`;
        return date;
    }

    // Metod koji sluzi kao template
    templateLI(doc) {
        let date = this.formatDate(doc.created_at.toDate());
        let htmlLi =
            `<li>
                ${doc.username}: ${doc.message}
                <br>
                ${date}
            </li>`;
        this.element.innerHTML += htmlLi;
    }
};