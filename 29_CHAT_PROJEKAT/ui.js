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
        let dayNow = dateNow.getDate();
        let monthNow = dateNow.getMonth() + 1;
        let yearNow = dateNow.getFullYear();

        // Datum slanja poruke
        let time = doc.created_at.toDate();
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

        // Ukoliko je poruka poslata danas prikazati samo vreme slanja poruke, u suprotnom prikazati datum i vreme slanja poruke 
        let date;
        if (day != dayNow || month != monthNow || year != yearNow) {
            date = `${day}.${month}.${year}. - ${hours}:${minutes}`;
        }
        else {
            date = `${hours}:${minutes}`;
        }
        return date;
    }

    // Metod koji sluzi kao template
    templateLI(doc) {
        let date = this.formatDate(doc);
        let htmlLi =
            `<li>
                <span>${doc.username}:</span> ${doc.message}
                <br>
                <p class="time_stamp">${date}</p>
            </li>`;
        this.element.innerHTML += htmlLi;
    }

    // Metod za brisanje poruka sa ekrana
    clear() {
        this.element.innerHTML = "";
    }
};