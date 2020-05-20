// Korisnicko ime - promenjive

let buttonLog = document.getElementById('button_name');
let inputLog = document.getElementById('input_name');
window.localStorage.setItem('username','bojankitanovic');
let formNotion = document.getElementById('form_notion');
let korisnicko;
// Korisnicko ime - dugme


let start_funkcija = () => {

buttonLog.addEventListener('click', (e)=>{
    e.preventDefault;
    korisnicko = inputLog.value;
    //console.log(korisnicko);
    let korisnickoLS = localStorage.getItem('username');
    //console.log(korisnickoLS);

    if (korisnicko == korisnickoLS){
        
        localStorage.setItem('permission', 1);
    }
    else {
        alert('Unesite ispravno korisnicko ime.');
        localStorage.setItem('permission', 0);
        
    }
    });

}

start_funkcija();

// localStorage.setItem('dozvola',false);




    // Pojam - promenjive

    if (localStorage.getItem('permission') == 1){
        formNotion.classList.remove('nema');
    
    


    let buttonNot = document.getElementById('button_notion');
    let inputNot = document.getElementById('input_notion');
    let selectCat = document.getElementById('select_cat');
    

    buttonNot.addEventListener('click', (e)=>{
        e.preventDefault;
        let kategorija = selectCat.value;
        window.localStorage.setItem('kateg', kategorija);
        let pojam = inputNot.value;

        // Faza jedan - izbacivanje razmaka

        let pojam_trim = pojam.replace(/\s+/g,'');

        // Faza dva - provera za specijalne karaktere

            var validacija = /^[0-9a-zA-Z]+$/;

            if (pojam_trim.match(validacija)){
                let pojam3 = pojam_trim.toLowerCase();
                let prvo = pojam3[0].toUpperCase();
                let resto = pojam3.substr(1);

                let pojam4 = prvo.concat(resto);
                console.log(pojam4);
                
                window.localStorage.setItem('pojamm', pojam4);
                window.localStorage.setItem('pocetno', prvo);
                

            }
            
            else {
                alert('unos ne sme sadrzati specijalne karaktere');
            }
        
    });






let dodavanje = () => {
    

    db.collection('pojmovi')
    .where("kategorija", "==", window.localStorage.getItem('kateg'))
    .where("pojam", "==", window.localStorage.getItem('pojamm'))
    .get().then(snapshot => {
        if (!snapshot.empty){
            snapshot.docs.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            alert("POJAM U ODREDJENOJ KATEGORIJI VEC POSTOJI");
        });
    }
        else{
            let dateTmp = new Date();

            db.collection('pojmovi').add({
                            pocetnoSlovo: localStorage.getItem('pocetno'),
                            korisnik: localStorage.getItem('username'),
                            kategorija: window.localStorage.getItem('kateg'),
                            pojam: window.localStorage.getItem('pojamm'),
                            vreme: firebase.firestore.Timestamp.fromDate(dateTmp)
                        })
                        .then(function(docRef) {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
        }
    })
    .catch(error => {
        console.error("Cannot get documents from collection: ", error);
    });;



}

dodavanje();
    }