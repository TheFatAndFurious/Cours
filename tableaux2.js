/*
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function f1(tab){
    console.log(tab[tab.length-1]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function f2(tab){
    return tab[tab.length-1];
}
*/
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
/*
let tab3=[200,9,7,100,66,47];

function f1(tab) {
    let min=tab[0];
    for (let i =0; i < tab.length; i++) {
        if (tab[i]<min) {
           min=tab[i];
           //return min;
           //console.log(min);
        }
        else{
    }
    }
    return min
}
console.log(f1(tab3));





// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

let tab4 = [10,20,30,40,50,60,70];

function f2(tab4){
    let max=tab4[0];
    for(let i=0; i<tab4.length; i++){
        if (tab4[i]>max){
            max=tab4[i];
        }
        else{

        }        
    }
    return max
}
console.log(f2(tab4));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.


let tab5=[1,2,3,1,2,3,1,4,3,3,];
let x=0
function f3(tab5){
    
        for(let i=0; i<tab5.length; i++){
            if (tab5[i]==3){
            x++;
            }                    
        }
return x
}

console.log(f3(tab5));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
*/

let tab10=[1,5,3,5,8,1,10,52];

function f10(tab10){

let y=6
    for(let i=0; i<tab10.length; i++){
        if (tab10[i]==y){
            return true;
        }                             
    }
    return false
}   

console.log(f10(tab10));
/*



// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

??

// Créer un tableau qui contient [1,2,3,...,7777].

let tab8 = []

for(let i=0; i<7777; i++){
    tab8.push(i);
}

console.log(tab8);

// Créer un tableau qui contient [10,20,30,...,77770].

for(let i=10; i<77780; i+=10){
    tab8.push(i);
}

console.log(tab8);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

for(let i=5; i<38890; i+5);
    tab8.push(i);

    console.log(tab8);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let tab9 = [1,2,3,55,60];
let x=50

function f15(tab9){
    for(let i=0; i<tab9.length; i++){
        if (x > tab9[i]){
            tab9.pop();
        }
    }    
}

console.log(tab9);



// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
*/
