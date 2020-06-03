let fut2 = document.getElementById('fut2');
fut2.innerHTML += `<p>Logovan korisnik: <snap style='color: blue; font-weight: bold;'>${window.localStorage.getItem('username')} </snap></p>`;
let buttonStart = document.getElementById('button_start');
let svaSlova = ['A', 'B', 'C', 'Č' ,'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];
let slovo ;
let slovce = document.getElementById('slovo');
let inputi = document.querySelectorAll('input');
let buttGame = document.getElementById('game');
let komp = document.getElementById('komp');
let newGame = document.getElementById('novaIgra');
let unos = document.getElementById('unos');
let vt = document.getElementById('visual-timer');

//

let slovoIgra;
// let permissiono = 0;
let p = [];
let k=[];
let b = [1,1,1,1,1,1,1];
let p2 = [];
let c;
let ap = [1,1,1,1,1,1,1];
let bp = [1,1,1,1,1,1,1];


for (let i=0; i<7; i++){
    k.push(inputi[i].id);
}



function startTimer(duration, display) {

    var minTimer = duration, minutes, seconds;
    
    setInterval(function () {
        var visualTimer = document.getElementById('visual-timer')
        visualTimer.classList.add("height-change");

        minutes = parseInt(minTimer / 60)
        seconds = parseInt(minTimer % 60);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--minTimer < 0) {
            visualTimer.classList.remove("height-change");
            minTimer = duration
        }

        if((minutes == 0) && (seconds == 0)){
            for (let i=0; i<7; i++){
                p.push(inputi[i].value);
                window.localStorage.setItem(`odg${i}`, inputi[i].value);
                p = [];
                        }
                        
                        buttGame.classList.add('nema');
                    
                    for (let i=0; i<7; i++){
                        p.push(window.localStorage.getItem(`odg${i}`));
                    }
                    location.reload();
                    unos.classList.remove('nema');
                    newGame.classList.remove('nema');
                    rezultati.classList.remove('nema')
                    vt.classList.add('none');
        }

    }, 1000);
}

window.onload = function () {
    var oneMin = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMin, display);
};

// let timer = () => {
//     for (let i=0; i<7; i++){
//         p.push(inputi[i].value);
//         window.localStorage.setItem(`odg${i}`, inputi[i].value);
       
//                 }
//                 window.localStorage.setItem('imasdozvolu', 1)
//     }


buttonStart.addEventListener('click',()=>{
    var myItem = localStorage.getItem('username');
    localStorage.clear();
    localStorage.setItem('username',myItem);
    let slovo =  Math.floor(Math.random() * svaSlova.length);
    slovoIgra = svaSlova[slovo];
    window.localStorage.setItem(`slovcee`, slovoIgra);
    slovce.innerHTML = `Dobili ste slovo <snap style='color: red; font-weight: bold; font-size: 35px'>${slovoIgra}</snap>`;
    window.localStorage.setItem('imasdozvolu', 1);
    buttGame.classList.remove('nema');
    vt.classList.remove('nema');
});
//setTimeout(timer() ,5000);
//console.log(timer());


// Kategorije 





// Pojmovi
buttGame.addEventListener('click',()=>{
    for (let i=0; i<7; i++){
    p.push(inputi[i].value);
    window.localStorage.setItem(`odg${i}`, inputi[i].value);
            }
            window.localStorage.setItem('imasdozvolu', 1);
            
        });
        
        if (window.localStorage.getItem('imasdozvolu') == 1 ){
            buttGame.classList.add('nema');
        
        for (let i=0; i<7; i++){
            p.push(window.localStorage.getItem(`odg${i}`));
        }
        console.log(p);

           



let modifikator = (cate, i) => {
    let zin = [];
    let finalni = [];
    let bla;

  
    db.collection('pojmovi').where("kategorija", "==", k[i]).where("pocetnoSlovo", "==", window.localStorage.getItem(`slovcee`))
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data().pojam, doc.data().kategorija);
            zin.push(doc.data().pojam);
           window.localStorage.setItem(k[i], zin);

        });
})

return zin;
}

console.log(modifikator(k[0],0));
            
modifikator(k[0], 0);
modifikator(k[1], 1);
modifikator(k[2], 2);
modifikator(k[3], 3);
modifikator(k[4], 4);
modifikator(k[5], 5);
modifikator(k[6], 6);

console.log(window.localStorage.getItem('Grad'));

let m1;
let m2;
let m3;
let m4;
let m5;
let m6;
let m7;




m1 = window.localStorage.getItem(k[0]);
m2 = window.localStorage.getItem(k[1]);
m3 = window.localStorage.getItem(k[2]);
m4 = window.localStorage.getItem(k[3]);
m5 = window.localStorage.getItem(k[4]);
m6 = window.localStorage.getItem(k[5]);
m7 = window.localStorage.getItem(k[6]);




let odgovori = (m) => {
    let odg = []
    let index = 0;
    if (m!== null ) {
for (let i=0; i<m.length; i++){
    if (m[i] == ','){
        odg.push(m.slice(index, i));
        index= index+i+1;}
    else if (i == m.length-1){
        
        odg.push(m.slice(index, m.length));

            }
        } 
    } 
else {
    odg = '';
}
     
return odg;
}

let odg1 = odgovori(m1) ;
let odg2 = odgovori(m2) ;
let odg3 = odgovori(m3) ;
let odg4 = odgovori(m4) ;
let odg5 = odgovori(m5) ;
let odg6 = odgovori(m6) ;
let odg7 = odgovori(m7) ;

 c = [odg1, odg2, odg3, odg4, odg5, odg6, odg7];


let konacan_kompjuter = (odg) =>{
    let random_kompjuter =  Math.floor(Math.random() * odg.length);
    p2.push(odg[random_kompjuter]);
   
}

            konacan_kompjuter(odg1);
            konacan_kompjuter(odg2);
            konacan_kompjuter(odg3);
            konacan_kompjuter(odg4);
            konacan_kompjuter(odg5);
            konacan_kompjuter(odg6);
            konacan_kompjuter(odg7);
            
            function isString(x) {
                return Object.prototype.toString.call(x) === "[object String]"
              }

              let p3 = [];

              for (let i=0; i<7; i++){
                  if (isString(p2[i])){
                      p3.push(p2[i]);
                  }
                  else {
                      p3.push('');
                  }
              }


    console.log(p2);
            console.log(p3);    

            
let rez = document.getElementById('rezultati');


    



// // Novi deo koda 


// let a = ['Bocvana','Beograd','Breganlica','','Buva','Bosiljak','Bonsek'];
// let bb = ['Brazil','Beograd','Binackamorava','','Bumbar','Brusnica','Brijac'];


// // Glavna funcija za kompijuter i 



let play = (a,b,ap,bp) => {
    

for (let i=0; i<7; i++){
    let prviRandomizer = Math.floor(Math.random() * 5);
    if (prviRandomizer == 0) {
        b[i]='';
    }
}

console.log(b);

// Ovo c ce da bude niz iz baze za pojmove u nekoj kategoriji ******
// c.includes(a[i]) == false treba da bude true , trenutno je false zbog testa *****

for (let i=0; i<7; i++){
    //  Pravi ga pomocu k[i] i where
    if (a[i] == '' && b[i] !== '' ){
       ap[i]=0;
       bp[i]=15;
        }
        else if (a[i] !== '' && b[i] == '' ){
            bp[i]=0;
            if (c[i].includes(a[i]) == true){
                ap[i] = 15;
            }
            else{
                // 
                ap[i] = 0;
            }

             }
        else if (a[i] !== '' && b[i] !== '' ){
                if (a[i] == b[i]){
                   ap[i] = 5;
                   bp[i] = 5;}
                else {
                    bp[i] = 10;
                    if (c[i].includes(a[i]) == true){
                        ap[i] = 10;

                }
                    else {
                        ap[i] = 0;
                    }
                }
               
                 }
        else {
            ap[i] = 0;
            bp[i] = 0;
        }


    }
    rez.innerHTML += ` <table id="r">
<tr>
    <th>#</th>
    <th>Kategorija</th>
    <th>${localStorage.getItem('username')}</th>
    <th>Rezultat</th>
    <th>Kompjuter</th>
</tr>
</table>`

let r = document.getElementById('r');

for (let i=0; i<8; i++){
    if (i<7){
r.innerHTML += `<tr>
    <td>${i+1}</td>
    <td>${k[i]}</td>
    <td>${p[i]}</td>
    <td>${ap[i]}:${bp[i]}</td>
    <td>${p3[i]}</td>            
</tr>`
        }
        else {
            let izbroji = (niz) => {
                let br = 0;
                for (let i=0; i<7; i++){
                    if (niz[i] !== ''){
                        br++;
                    }
                }
                return br;
            }

            let saberi = (niz) =>{
                sum = 0;
                for (let i=0; i<niz.length; i++){
                    sum = sum+niz[i];
                }
                return sum;
            }

            r.innerHTML += `<tr>
                                <td>8</td>
                                <td></td>
                                <td>${izbroji(p)}</td>
                                <td>${saberi(ap)}:${saberi(bp)}</td>
                                <td>${izbroji(p3)}</td>            
                            </tr>`
        }
    }   
}




play(p,p3,ap,bp);

    console.log(ap,bp);

// Funkcija saberi

    let saberi = (niz) =>{
        sum = 0;
        for (let i=0; i<niz.length; i++){
            sum = sum+niz[i];
        }
        
        return sum;
    }


    console.log(saberi(ap),saberi(bp));

// Funkcija pobednik

    let pobednik = (x, y) => {
         saberi(ap);
        saberi(bp);
        if (x == y){
            alert('Nereseno');
        }
        else if (x > y){
            alert('Korisnik je pobedio');
        }
        else {
            alert('Kompjuter je pobedio');

        }
    }
    unos.classList.remove('nema');
    newGame.classList.remove('nema');

// Funkcija izbroji odgobore - Dodata cisto ako zatreba, trenutno se ne koristi

newGame.addEventListener('click',()=>{
    window.localStorage.setItem('imasdozvolu', 0);
    location.reload();
    localStorage.setItem('dajmi', 0);
    pobednik(saberi(ap),saberi(bp));
    

});

unos.addEventListener('click',()=>{
    
    location.reload();
    location.reload();
    localStorage.setItem('dajmi', 1);
    
});
            
    if (localStorage.getItem('dajmi') == 1){
        rezultati.classList.remove('nema');
    }

}








