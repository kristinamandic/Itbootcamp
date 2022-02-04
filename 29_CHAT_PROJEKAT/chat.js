class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
        this.unsub = false; // Odredili smo da false bude kao signal da je stranica prvi put ucitana
    }
    // Seter i geter za polje _room
    set room(r) {
        this._room = r;
    }
    get room() {
        return this._room;
    }

    // Seter i geter za polje _username
    set username(u) {
        let validated = this.validateUsername(u);
        if (validated) {
            this._username = u;
        }
    }
    get username() {
        return this._username;
    }

    // Metod za Update room
    updateRoom(ur) {
        this.room = ur;
        if (this.unsub != false) {
            // unsub vise nije false nego je u getChats postalo funkcija
            this.unsub(); // unsub je sada funkcija i pozivam je sa ()
        }
    }

    // Metod za dodavanje nove poruke
    async addChat(mess) {
        // Dohvatanje trenutnog vremena potrebnog za timestamp(created_at polje u dokumentu)
        let date = new Date();
        // Kreiranje dokumenta/objekta koji prosljedjuejmo bazi podataka
        let obj = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        // Da sacuvam dokument u db
        let response = await this.chats.add(obj);
        return response; // Vracam Promise i mogu za njega da kazem .then() i .catch()
    }

    // Metod koji prati promjene u bazi i vraca poruke
    getChats(callback) {
        // Stavljamo osluskivac "onSnapshot" na nasu kolekciju "chats" iz baze podataka
        // "onSnapshot" daje sve promjene do tog trenutka
        this.unsub = this.chats
            .where("room", "==", this.room)
            .orderBy("created_at", "desc")
            .onSnapshot(snapshot => {
                // "snapshot" daje niz tih promjena
                snapshot.docChanges().forEach(change => {
                    // Ispisati dokumente koji su dodati u bazu
                    if (change.type == "added") {
                        callback(change.doc.data()); // prosljedjivanje dokumenta na ispis (ispis realizujemo kada realizujemo callback funkciju)
                    }
                });
            });
    }

    // Metoda za provjeru validnosti korisnickog imena
    validateUsername(u) {
        let u1 = u.trim();
        if (u1.length >= 2 && u1.length <= 10) {
            return true;
        }
        else {
            return false;
        }
    }

    // Metoda za obavjestenje o korisnickom imenu
    updateUsername(u) {
        let validated = this.validateUsername(u);
        if (validated) {
            this.username = u;
            let p = document.createElement("p");
            p.innerHTML += `Hello ${u} &#128516`;
            p.setAttribute("id", "wellcome");
            formUpdate.appendChild(p);
            setInterval(() => {
                p.remove();
            }, 3000);
        }
        else {
            alert("Username must contain 2 to 10 letters!");
        }
    }
};

export default Chatroom;