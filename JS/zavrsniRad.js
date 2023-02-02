// zadatak 1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
const removeFirst = fruits.shift();
const removeLast = fruits.pop();
console.log(`Moje vocke: ${fruits}`);

// zadatak 2
var object = {
    gde: "Vivify Academy",
    sta: "Zavrsni rad",
    Ko: "Menu Ekpia"}
    
    object.kada = "02.02.2023";
    console.log(object);

// zadatak 3

var complexArray = [
    'nizovima',
    {
        key1: 'pristupamo',
        key2: 'ispisati',
        nizUnutarObjekta: ['vezbamo', 'cuvamo']
    },
    {
        key1: 'objektima',
        key2: 'podacima'
    },
    'nacin'
];
   console.log("Zadatak u kojem "+complexArray[1].nizUnutarObjekta[0]+ 
   " kako da "+complexArray[1].key1+ 
   " podacima sacuvanim u " +complexArray[0]+
   " i "+complexArray[2].key1+
   ". Na ovaj "+complexArray[3]+ 
   " omogucavamo da odredjeni string mozemo " +complexArray[1].key2+ 
   " sa razlicitim " +complexArray[2].key2+ 
   ", u zavisnosti koje vrednosti " +complexArray[1].nizUnutarObjekta[1]+
   " u nizu i/ili objektu.")

//zadatak 4

var count3 = 0;
var count5 = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    };
};

//zadatak 5
var sum;
var arrNum = [2, 5, 9, 7]

function sumOfArray(arrNum) {
var sum = 0;
    for (var clan of arrNum) {
            sum += clan;
};
return sum;
};
var result = sumOfArray(arrNum);
console.log(result);


    
   