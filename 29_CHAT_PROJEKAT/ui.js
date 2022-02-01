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

    // Metod koji sluzi kao template
    templateLI(doc) {
        // izvuci podatke iz prosljednjenog dokumenta i zapisati ih u formatu 
        // username: poruka
        // time_stamp

        let time = new Date(doc.created_at.seconds * 1000);
        let day = time.getDate();
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let hours = time.getHours();
        let minutes = time.getMinutes();

        let htmlLi =
            `<li>
                ${doc.username}: ${doc.message}
                <br>
                ${day}.${month}.${year}. ${hours}:${minutes}
            </li>`;
        this.element.innerHTML += htmlLi;
    }
};