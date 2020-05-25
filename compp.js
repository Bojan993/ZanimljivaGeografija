let fut2 = document.getElementById('fut2');
fut2.innerHTML += `<p>Logovan korisnik: <snap style='color: blue; font-weight: bold;'>${window.localStorage.getItem('username')} </snap></p>`;
let buttonStart = document.getElementById('button_start');
let svaSlova = ['A', 'B', 'C', 'Č' ,'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];
let slovo ;
let slovce = document.getElementById('slovo');
let inputi = document.querySelectorAll('input');
let buttGame = document.getElementById('game');
let komp = document.getElementById('komp');
let slovoIgra;

buttonStart.addEventListener('click',()=>{
    let myItem = window.localStorage.getItem('username');
    window.localStorage.clear();
    window.localStorage.setItem('username', myItem);
    let slovo =  Math.floor(Math.random() * svaSlova.length);
    slovoIgra = svaSlova[slovo];
    window.localStorage.setItem(`slovcee`, slovoIgra);
    slovce.innerHTML = `Dobili ste slovo <snap style='color: red; font-weight: bold; font-size: 35px'>${slovoIgra}</snap>`;
    window.localStorage.setItem('imasdozvolu', 0);
    buttGame.classList.remove('nema');
});

let k = [];
let p = [];
let p2 = [];
let ap = [1,1,1,1,1,1,1];
let bp = [1,1,1,1,1,1,1];
let p3 = [];
let c;

// Kategorije 
for (let i=0; i<7; i++){
    k.push(inputi[i].id);
}

// Pojmovi
    game.addEventListener('click',()=>{
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
    // let finalni = [];
    // let bla;

    db.collection('pojmovi').where("kategorija", "==", k[i]).where("pocetnoSlovo", "==", window.localStorage.getItem(`slovcee`))
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
            //console.log(doc.data().pojam, doc.data().kategorija);
            zin.push(doc.data().pojam);
            window.localStorage.setItem(k[i], zin);
        });
})
return zin;
}

//console.log(modifikator(k[0],0));
            
modifikator(k[0], 0);
modifikator(k[1], 1);
modifikator(k[2], 2);
modifikator(k[3], 3);
modifikator(k[4], 4);
modifikator(k[5], 5);
modifikator(k[6], 6);

// for (let i=0; i<7; i++){
//         // Menjano 
//         if (window.localStorage.getItem(k[i]) == undefined){
//             window.localStorage.setItem(k[i], ''); 
//         }
//         p2.push(window.localStorage.getItem(k[i]));
//         }
        
//         //console.log(p2);

let m1 = window.localStorage.getItem(k[0]);
let m2 = window.localStorage.getItem(k[1]);
let m3 = window.localStorage.getItem(k[2]);
let m4 = window.localStorage.getItem(k[3]);
let m5 = window.localStorage.getItem(k[4]);
let m6 = window.localStorage.getItem(k[5]);
let m7 = window.localStorage.getItem(k[6]);

let odgovori = (m) => {
    let odg = []
    let index = 0;
    if (m !== null) {
        for (let i=0; i<m.length; i++)
        {
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

//console.log(odgovori(m1));

function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]"
  }


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



for (let i=0; i<7; i++){
    if (isString(p2[i])){
        p3.push(p2[i]);
    }
    else {
        p3.push('');
    }
}
console.log(p3);

// let br = 7 - p2.length;
// for (let i=1; i<=br; i++){
//     p2.push(''); 
// }
        

// for (let i=0; i<7; i++){
//     if (p2[i].length > 0){
//         console.log(p2[i]);
//     }
// }

//console.log(p2);

//     // console.log(modifikator(k[0], 0));
//     let b2 = [1,1,1,1,1,1,1];
    
    




// // buttGame.addEventListener('click',(
// // )=>{
    



// // })


// // for (let i=0; i<7; i++){
// //     if (p[i] == ''){
// //         b[i] = 0;
// //     }
// //     else{
// //         db.collection('pojmovi')
// //             .where("kategorija", "==", k[i])
// //             .where("pojam", "==", p[i])
// //             .get().then(snapshot => {
// //                 if (!snapshot.empty){
// //                     b[i] = 10;
// //                 }
// //                 else{
// //                     b[i] = 0;
// //                 }
// //                 });
               
// //     }

// // }
// // console.log(b, p);



// // Novi deo koda 


// let a = ['Bocvana','Beograd','Breganlica','','Buva','Bosiljak','Bonsek'];
// let bb = ['Brazil','Beograd','Binackamorava','','Bumbar','Brusnica','Brijac'];


// // Glavna funcija za kompijuter i 


let play = (a,b,ap,bp) => {

randomNumber = Math.floor(Math.random()*2);

if (randomNumber == 0){
   let prviRandomizer = Math.floor(Math.random()*7);
    if (b[prviRandomizer] = ''){
        prviRandomizer = Math.floor(Math.random()*7);
        if (b[prviRandomizer] = ''){
            prviRandomizer = Math.floor(Math.random()*7);
            if (b[prviRandomizer] = ''){
                prviRandomizer = Math.floor(Math.random()*7);
                if (b[prviRandomizer] = ''){
                    prviRandomizer = Math.floor(Math.random()*7);
                  
                }
            }
        }
    }
     b[prviRandomizer] = '';

    console.log(b);
}
else {
    let prviRandomizer = Math.floor(Math.random()*7);
    let drugiRandomizer = Math.floor(Math.random()*7);
    if (b[prviRandomizer] = ''){
         prviRandomizer= Math.floor(Math.random()*7);

    }
    if (b[drugiRandomizer] = ''){
         drugiRandomizer = Math.floor(Math.random()*7);
    }

    b[prviRandomizer] = '';
    b[drugiRandomizer] = '';  
    console.log(b);
}


// Ovo c ce da bude niz iz baze za pojmove u nekoj kategoriji ******
// c.includes(a[i]) == false treba da bude true , trenutno je false zbog testa *****

for (let i=0; i<7; i++){
    //let c = [];
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
            console.log('Nereseno');
        }
        else if (x > y){
            console.log('Korisnik je pobedio');
        }
        else {
            console.log('Kompjuter je pobedio');

        }
    }

    pobednik(saberi(ap),saberi(bp));

// Funkcija izbroji odgobore - Dodata cisto ako zatreba, trenutno se ne koristi

let izbroji = (niz) => {
    let br = 0;
    for (let i=0; i<7; i++){
        if (niz[i] !== ''){
            br++;
        }
    }
    return br;
}
console.log(izbroji(p),izbroji(p3));
            

}   
