/*Esercizio 1*/
/*
let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)

function somma(x, y){
    var result = 0
    if (x == y) {
        result = (x + y) * 3
    } else {
        result = x + y
    }
    return result;
}
console.log(somma(x, y));
*/
/*Esercizio 2*/
/*
let x = Math.floor(Math.random()*50)
let y = Math.floor(Math.random()*50)
function control(x, y) {
    if (x == 50 || y == 50 || x + y == 50){
        console.log("true");
    } else {
        console.log("false");
    }
}
control(x,y)
*/
/*Esercizio 3*/
/*
let str = "Questo è una stringa di prova".split('')
function rimuovi(){
    let index = 7
    str.splice(index, 1)
    str = str.join('')
    return str
}

console.log(rimuovi());
*/
/*Esercizio 4*/
/*
function max(a,b,c) {
    let max = Math.max(a,b,c) 
    return max
}
console.log(max(2,33,1));
*/
/*Esercizio 5*/
/*
let x = 50
let y = 80

function compresi(x , y) {
    let res
    if (40<x && x<60 || 70<x && x<100 && 40<y && y<60 || 70<y && y<100){
        res = "true"
    } else {
        res = "false"
    }
    return res;
}
console.log(compresi(x,y));
*/
/*Esercizio 6*/

/*Esercizio 7*/
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Write a name of city: ", function(answer) {
    let position = answer.toLowerCase()
    if (position.includes("los")){
        console.log(answer);
    } else {
        let res = "false"
        console.log((res));
    }
    rl.close()
})
*/
/*Esercizio 8*/
/*
const arr = ["5", "50", "30"]

function somma(sum) {
    sum = arr.reduce((previous, next) => {
    return previous*1 + next*1;
    })
    return sum
}
console.log(somma(arr));
*/
/*Esercizio 9*/
/*
const arr = ["4", "3"]
function check(arr) {
    if (arr.includes("1") || arr.includes("3")){
        return true;
    } else{
        return false;
    }
}
console.log(check(arr));
*/

/*Esercizio 10*/
/*
const arr = ["1", "5"]
function check(arr) {
    if (!arr.includes("1") || !arr.includes("3")){
        return true;
    } else{
        return false;
    }
}
console.log(check(arr));
*/

/*Esercizio 11*/
/*
const strings = ["Questa è una prima stringa, e provo a scrivere cose a caso", "Questa è la seconda stringa", "Questa è la terza stringa, o è la seconda?"]

function countLetters(strings) {
    const max = strings.sort((a, b) => a.length - b.length)
    return max.splice(-1)
}
console.log(countLetters(strings));
*/

/*Esercizio 12*/
/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Write an angle in number: ", function(answer) {
    if (answer < 90) {
        let angolo = "acuto"
        console.log(angolo);
    } else if (90 < answer && answer < 180){
        let angolo = "ottuso"
        console.log(angolo);
    } else if (answer == 90) {
        let angolo = "retto"
        console.log(angolo);
    } else if (anser == 180) {
        let angolo = "piatto"
        console.log(angolo);
        }
        rl.close()
    })
*/
/*Esercizio 13*/
/*
const arr = ["5", "40", "1", "0", "55", "150", "-2"]
function index(arr) {
    let max = Math.max(...arr)
    let index = arr.indexOf(max.toString())
    return index
}
console.log(index(arr));
*/

/*Esercizio 14*/
/*
const arr = ["5", "40", "1", "0", "170", "150", "-2"]
const arrPari = []
function maxPari(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            arrPari[j] = arr[i]
            j++
        }
    }
    let maxP = Math.max(...arrPari)
    return maxP
}

console.log(maxPari(arr));
*/

/*Esercizio 15*/

/*
let x = 14
let y = 1

function positiveNegative(x, y) {
    if (x > 0 && y < 0 || x < 0 && y > 0){
        return true
    } else {
        return false
    }
}
console.log(positiveNegative(x, y));
*/

/*Esercizio 16*/

/*
const str = "questa è una stringa di prova"

function firstThreeUpper(str) {
    if (str.length <= 3) {
        return str.toUpperCase();
      }
      front_part = (str.substring(0, 3)).toUpperCase();
      back_part = str.substring(3, str.length);  
      return front_part + back_part;
    }
console.log(firstThreeUpper(str));
*/

/*Esercizio 17*/

/*
let x = 10
let y = 20

function sum(x, y) {
    if ( (x + y) < 80 && (x + y) > 50) {
        return 65
    } else {
        return 80
    }
}
console.log(sum(x, y));
*/

/*Esercizio 18*/

/*
let x = 21

function divisibile(x) {
    if (x % 3 == 0 && x % 5 == 0) {
        return "DiegoRiccardo"
    } else if (x % 3 == 0 && x % 7 == 0) {
        return "DiegoStefano"
    } else if (x % 5 == 0 && x % 7 == 0) {
        return "RiccardoStefano"
    } else if (x % 3 == 0){
        return "Diego"
    } else if (x % 5 == 0) {
        return "Riccardo"
    } else if (x % 7 == 0) {
        return "Stefano"
    } else {
        return x
    }
}
console.log(divisibile(x));
*/

/*Esercizio 19*/

/*
const str = "fabbrica italiana automobili torino"
const words = str.split(" ");

let capitalized = words.map((word) => { 
    return word[0].toUpperCase()
}).join("");

console.log(capitalized);
*/

/*ESERCIZI EXTRA*/

