export class ChatUI {
    constructor(el) {
        this.element = el;
    }

    // Seter i geter
    set element(el) {
        this._element = el;
    }
    get element() {
        return this._element;
    }
};