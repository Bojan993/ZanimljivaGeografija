// Korisnicko ime - promenjive

let buttonLog = document.getElementById('button_name');
let inputLog = document.getElementById('input_name');
window.localStorage.setItem('username','bojankitanovic');
let formNotion = document.getElementById('form_notion');
let korisnicko;
let score = document.getElementById('score');
let hof = document.getElementById('hof');
let button1 = document.getElementById('button1');
let fut = document.getElementById('fut');
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
        score.classList.remove('nema');
    
        fut.innerHTML += `<p>Logovan korisnik: <snap style='color: blue; font-weight: bold;'>${window.localStorage.getItem('username')} </snap></p>`


    let buttonNot = document.getElementById('button_notion');
    let inputNot = document.getElementById('input_notion');
    let selectCat = document.getElementById('select_cat');
    


    buttonNot.addEventListener('click',(e)=>{
   

    
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
        db.collection('pojmovi')
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
                juzernejmovi.push(doc.data().korisnik);
            });
    
            let result = {};
            juzernejmovi.forEach(function (x) {
              result[x] = (result[x] || 0) + 1;
            });
            let entries = Object.entries(result);
            entries = entries.sort(function (a, b) {
              return a[1] - b[1];
            });
            entries.reverse();
            
            // for (let i = 0; i < 5; i++) {
            //     console.log(entries[i]);
                
                score.innerHTML +=`<table><caption>Hall of Fame</caption>
                <th>r. br.</th>
                <th>username</th>
                <th>br. pojmova</th>
                <tr><td>1</td><td> ${entries[0][0]}</td><td> ${entries[0][1]}</td></tr>
                <tr><td>2</td><td>${entries[1][0]}</td> <td> ${entries[1][1]}</td></tr>
                <tr><td>3</td><td>${entries[2][0]}</td> <td> ${entries[2][1]}</td></tr>
                <tr><td>4</td><td>${entries[3][0]}</td> <td> ${entries[3][1]}</td></tr>
                <tr><td>5</td><td>${entries[4][0]}</td> <td> ${entries[4][1]}</td></tr></table>`;

              
                
            // }
          })
          .catch((err) => {
            console.error(err);
          });
      }

      let brojac = 0;

      button1.addEventListener('click',()=>{
          
          if (brojac%2 == 0){
            halloffame();
            brojac++;
          }
        else {
            score.innerHTML=``;
            brojac++;
        }
    });
}
    




    



