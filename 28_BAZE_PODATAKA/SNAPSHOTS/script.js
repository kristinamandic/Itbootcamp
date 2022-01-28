let ul = document.querySelector("ul");
let form = document.querySelector("form");

/*
db.collection("tasks")
    .orderBy("start_date", "desc")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                let li = document.createElement("li");
                li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`;
                if (obj.priority == false) {
                    li.style.color = "red";
                }
                ul.appendChild(li);
            });
        }
        else {
            console.log("Nema dokumenata koji odgovaraju zahtjevu");
        }
    })
    .catch(err => {
        console.log(`Greska: ${err}`);
    });
*/

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    // console.log(title, start_date, due_date, priority, description);

    let start_date_obj = new Date(start_date);
    let due_date_obj = new Date(due_date);
    let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

    let obj = {
        title: title,
        start_date: start_date_ts,
        due_date: due_date_ts,
        priority: priority,
        description: description
    };
    db.collection("tasks")
        .add(obj)
        .then(() => {
            console.log("Uspjesno dodat novi zadatak");
        })
        .catch(err => {
            console.log(`Greska prilikom dodavanja zadatka: ${err}`);
        })
});

db.collection("tasks")
    // cim se nesto promjenilo u bazi podataka, on opet poziva ovu metodu
    .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        // console.log(changes);
        changes.forEach(change => {
            let type = change.type;
            let doc = change.doc;
            let id = doc.id;
            if (type == "added") {
                let obj = doc.data();
                let li = document.createElement("li");
                li.id = id;
                li.innerHTML = `${obj.title}, ${obj.description}`;
                if (obj.priority == false) {
                    li.style.color = "red";
                }
                ul.appendChild(li);

                let button = document.createElement("button");
                button.innerHTML = "Delete task";
                li.appendChild(button);
            }
            else if (type == "removed") {
                let li = document.getElementById(id);
                li.remove();
            }
        });
    });

ul.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentElement;
        let id = li.id;
        db.collection("tasks")
            .doc(id)
            .delete()
            .then(() => {
                alert("Uspjesno obrisan zadatak");
            })
            .catch(err => {
                alert("Greska prilikom brisanja: " + err)
            })
    }
});