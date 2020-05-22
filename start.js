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
    let korisnickoLS = window.localStorage.getItem('username');
    //console.log(korisnickoLS);

    if (korisnicko == korisnickoLS){
        
        window.localStorage.setItem('permission', 1);
    }
    else {
        alert('Unesite ispravno korisnicko ime.');
        window.localStorage.setItem('permission', 0);
        
    }
    });

}

start_funkcija();

// localStorage.setItem('dozvola',false);




    // Pojam - promenjive

    if (window.localStorage.getItem('permission') == 1){
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

            var validacija =       /^[A-Za-z0-9đščžćČĆŽĐŠ]*$/;    // /^[0-9a-zA-Z]+$/; 

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

            if(window.localStorage.getItem('pojamm') != null){

            db.collection('pojmovi').add({
                            kategorija: window.localStorage.getItem('kateg'),
                            korisnik: window.localStorage.getItem('username'),
                            pocetnoSlovo: window.localStorage.getItem('pocetno'),
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
                    else{
                        alert("ZABRANJEN PRAZAN UNOS");
                    }
        }
    })
    .catch(error => {
        console.error("Cannot get documents from collection: ", error);
    });;



}

dodavanje();



let halloffame = () => {
    
    let juzernejmovi = [];
    //let podaci = [];
    
    db.collection('pojmovi')
    .get().then(snapshot => {

            snapshot.docs.forEach(doc => {
            
                // doc.data().korisnik;
                // doc.data().pojam;

                //let podatak = doc.data().korisnik.concat(doc.data().pojam);
            
                juzernejmovi.push(doc.data().korisnik);
                //podaci.push(podatak);

        });
    
    })
    .catch(error => {
        console.error("Cannot get documents from collection: ", error);
    });;


    function count() {

    
        var current = null;
        var cnt = 0;
        for (var i = 0; i < juzernejmovi.length; i++) {
            if (juzernejmovi[i] != current) {
                if (cnt > 0) {
                    document.write(current + ' comes --> ' + cnt + ' times<br>');
                }
                current = juzernejmovi[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            document.write(current + ' comes --> ' + cnt + ' times');
        }
    
    }
    
    count();

    
    // var map = juzernejmovi.reduce(function(prev, cur) {
    // prev[cur] = (prev[cur] || 0) + 1;
    //     return prev;
    // }, {});

    // // map is an associative array mapping the elements to their frequency:
    // console.log(JSON.stringify(map));
    // // prints {"a": 3, "b": 2, "c": 2, "d": 2, "e": 2, "f": 1, "g": 1, "h": 3}


    console.log(juzernejmovi);



}

halloffame();


//console.log(juzernejmovi);



    }