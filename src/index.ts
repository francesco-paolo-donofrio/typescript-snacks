// Snack 1
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function isEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

isEvenOrOdd(2);
isEvenOrOdd(3);

// Snack 2

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(number: number): number {
    if (number < 0) {
        return number;
    } else if (number > 0) {
        return -number
    } else {
        return 0;
    }
}

makeNegative(1);
makeNegative(-5);
makeNegative(0);

// Snack 3

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function makeMoney(salary: number, bonus: boolean) {
    if (bonus === true) {
        return salary * 10 + "$"
    } else {
        return salary + "$";
    }
}

makeMoney(2000, true);
makeMoney(5000, false);

// Snack 4

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function convertName(name: string): string {
    const nameParts = name.split(' ');
    const initials = nameParts[0][0].toUpperCase() + '.' + nameParts[1][0].toUpperCase() + '.';
    return initials;
}

console.log(convertName("john doe"));

// Snack 5

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


function countSheep(num: number): string {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

countSheep(3);
countSheep(1);
countSheep(7);

// Snack 6

// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

function calcType(a: number, b: number, result: number): string {
    if (a + b === result) {
        return "addition";
    } else if (a - b === result) {
        return "subtraction";
    } else if (a * b === result) {
        return "moltiplication";
    } else if (a / b === result) {
        return "division";
    } else {
        return "unknown operation";
    }
}

calcType(2, 3, 5);
calcType(6, 1, 5);
calcType(10, 10, 100);
calcType(100, 5, 20);

// Snack 7

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers: string): string {
    const numArray = numbers.split(" ").map(Number);
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

//   Snack 8

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function returnEven(myArray: number[]): number[] {
    return myArray.filter(num => num % 2 === 0);
}

returnEven([1, 3, 4, 2, 5, 6]);

// Snack 9

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

function divisorNumber(num: number): number {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

divisorNumber(12);
divisorNumber(30);

// Snack 10

// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporwaveSentence(str: string): string {
    const chars = str.replace(/\s+/g, '').toUpperCase().split('');
    return chars.join('  ')
}

const phrase: string = "vamonos a bailar";
vaporwaveSentence(phrase);

// Snack 11

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example

// 65 ---> "A"
// 97 ---> "a"
// 48 ---> "0"


function getChar(c: number): string {
    return String.fromCharCode(c);
}

getChar(30);
getChar(94);
getChar(48);

// Snack 12

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ... z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// ["abc", "abc abc"] should return [6, 24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

function valuesOfStrings(list: string[]): number[] {
    let result: number[] = [];  // Array dove salveremo i risultati

    // Iteriamo su ogni stringa nella lista
    for (let i = 0; i < list.length; i++) {
        let str = list[i];  // La stringa corrente
        let sum = 0;  // Variabile per salvare la somma dei valori delle lettere

        // Iteriamo su ogni carattere della stringa
        for (let j = 0; j < str.length; j++) {
            let char = str[j];  // Il carattere corrente

            // Se il carattere è una lettera (ignora gli spazi)
            if (char !== ' ') {
                let charValue = char.charCodeAt(0) - 96;  // Valore del carattere (a=1, b=2, ecc.)
                sum += charValue;  // Aggiungiamo il valore alla somma
            }
        }

        // Moltiplichiamo la somma per la posizione della stringa (i + 1)
        let finalValue = sum * (i + 1);
        result.push(finalValue);  // Aggiungiamo il risultato nell'array
    }

    return result;  // Ritorniamo l'array dei risultati
}

valuesOfStrings(["abc", "abc abc"]);
valuesOfStrings(["abc", "abc abc", "abc abc abc"]);

// Snack 13

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

function reverseSeq(n: number): number[] {
    let result: number[] = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
}

reverseSeq(5);
reverseSeq(3);
reverseSeq(1);

// Snack 14 

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
};

const myString: string = "This website is for losers LOL!";
removeVowels("This website is for losers LOL!");

// const appElement = document.getElementById("app");
// if (appElement){
//     appElement.innerHTML = `<h1>Typescript-snacks</h1><br><p>The result of removeVowels is: ${removeVowels(myString)}</p>`;
// } else {
//     console.error("Elemento con id 'app' non trovato nel DOM");
// }

// console.log(appElement);

// Snack 15
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function playingBanjo(name: string): string {
    if (name.charAt(0).toLowerCase() === "r") {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

const name1 = "Francesco";
const name2 = "roberto";
const name3 = "Matteo";
const name4 = "Rapunzel";
const result1 = playingBanjo(name1);
const result2 = playingBanjo(name2);
const result3 = playingBanjo(name3);
const result4 = playingBanjo(name4);


// if (appElement){
//     appElement.innerHTML = `<p>${result1}</p> & <p>${result2}</p> & <p>${result3}</p> & <p>${result4}</p>`;
// }


// Snack 16

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function moltiplicationNumber(number: number): number {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

// if (appElement){
//     appElement.innerHTML = `<p>${moltiplicationNumber(8)} & ${moltiplicationNumber(9)}`;
// }

// Snack 17

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr: any[]): number[] {
    return arr.reverse();
}

console.log(fixTheMeerkat([1, 2, 3]));
console.log(fixTheMeerkat(["Meerkat", "Meerkat", "Meerkat"]));

// Snack 18

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(str: string): string {
    let upperCount = 0;
    let lowerCount = 0;

    for (const char of str) {
        if (char === char.toUpperCase()) {
            upperCount++;
        } else {
            lowerCount++;
        }
    }

    if (upperCount > lowerCount) {
        return str.toUpperCase();
    } else if (upperCount < lowerCount) {
        return str.toLowerCase();
    } else {
        return str.toLowerCase();
    }
}

const myString1 = "CiAO A TUTTI io SONO fRA";
const myString2 = "ciao a tiuti IO sono il tuo amico"
const myString3 = "ciaoo CIAO"
solve(myString1);
solve(myString2);
solve(myString3);

//   Snack 19

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function splitWord(input: string): string[] {
    const splittedString = input.split(" ");
    console.log(splittedString);
    return splittedString;
}

splitWord("I love america and cheese burgers");

// Snack 20

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function repeatString(string: string): string {
    let result = "";
    for (const char of string) {
        result += char + char;
    }
    console.log(result);
    return result;
}

repeatString("Ciao Bello");

// Snack 21

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

function position(letter: string): number | string {
    // Verifichiamo se `letter` è una lettera minuscola compresa tra 'a' e 'z'
    if (/[a-z]/.test(letter)) {
        const result = letter.charCodeAt(0) - 96;
        return result;
    } else {
        // Messaggio di errore se non è una lettera minuscola valida
        return "Please insert a valid lowercase letter";
    }
}

// Snack 22

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function ageForDrink(num: number): string | undefined {
    if (num <= 14) {
        return `${num} drink toddy`
    } else if (num < 18) {
        return `${num} drink coke`
    } else if (num < 21) {
        return `${num} drink beer`
    } else if (num >= 21) {
        return `${num} drink whisky`
    }
    return undefined;
}

ageForDrink(13);
ageForDrink(17);
ageForDrink(18);
ageForDrink(20);
ageForDrink(30);




// Snack 23

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year: number): number {
    let count = 0;

    // Itera attraverso i 12 mesi (da 0 a 11 perché i mesi in Date vanno da 0 = gennaio a 11 = dicembre)
    for (let month = 0; month < 12; month++) {
        // Crea una data per il 13° giorno di ogni mese
        const date = new Date(year, month, 13);

        // Verifica se il giorno della settimana è venerdì (5 in JavaScript, dove i giorni vanno da 0 = domenica a 6 = sabato)
        if (date.getDay() === 5) {
            count++;
        }
    }

    return count;
}

unluckyDays(2015);
unluckyDays(1986);

unluckyDays(2024);

// Snack 24

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additiona

function multipleOf(number: number): number {
    let count = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    }
    return count;
}

multipleOf(10); 23
multipleOf(15); 45
multipleOf(20); 78

// Snack 25

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers: number[]): string {
    let result = "(";
    for (let i = 0; i < 3; i++) {
        result += numbers[i];
    }
    result += ") ";
    for (let i = 3; i < 6; i++) {
        result += numbers[i];
    }
    result += "-";
    for (let i = 6; i < 10; i++) {
        result += numbers[i];
    }
    return result;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Snack 26

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function takeBullets(bullets: number, dragons: number): boolean {
    return bullets >= dragons * 2;
}

takeBullets(1, 1);
takeBullets(2, 1);
takeBullets(4, 2);

// Snack 27

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatitionString(n: number, s: string): string {
    return s.repeat(n);
};

repeatitionString(5, "Ciao");

// Snack 28

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


const numbArray: number[] = [2, 4, 2, 2];
let moltiplication = numbArray.reduce(moltiplicationInt);
function moltiplicationInt(total: number, value: number): number {
    return total * value;
}

console.log(moltiplication);


// Snack 29

// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

function numberToText(num: number) {
    switch (num) {
        case 0: console.log("zero"); break;
        case 1: console.log("one"); break;
        case 2: console.log("two"); break;
        case 3: console.log("three"); break;
        case 4: console.log("four"); break;
        case 5: console.log("five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seven"); break;
        case 8: console.log("eight"); break;
        case 9: console.log("nine"); break;
    }
    if (num > 9 || num < 0) {
        return console.log("Please, insert a number between 0 and 9")
    }
}

numberToText(7);
numberToText(10);
numberToText(-12);
numberToText(3);

// Snack 30

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function ArrayDoubled(arr: number[]): number[] {
    return arr.map(element => element * 2)
}

ArrayDoubled([1, 2, 3]);
ArrayDoubled([2, 4, 6]);
ArrayDoubled([10, 20, 30]);


// Snack 31

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function divisibleOrNot(num: number, x: number, y: number): boolean {
    if (num % x === 0 && num % y === 0) {
        return true;
    } else {
        return false;
    }
}

divisibleOrNot(12, 2, 6);
divisibleOrNot(3, 1, 3);
divisibleOrNot(100, 5, 3);
divisibleOrNot(12, 7, 5);

// Snack 32

// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.


class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Man extends Human {
    constructor(name: string, age: number) {
        super(name, age);
        this.age = 33;
    }
}

class Woman extends Human {
    constructor(name: string, age: number) {
        super(name, age);
        this.age = 30;
    }
}

function create(): [Man, Woman] {
    const adam = new Man("Adam", 33);
    const eve = new Woman("Eve", 30);
    return [adam, eve];
}

// Snack 33

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function pinControl(code: string): boolean {
    return (code.length === 4 || code.length === 6) && /^\d+$/.test(code);
}

pinControl("2312");
pinControl("93939");
pinControl("a92903");

// Snack 34

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// My way
// function descendingNumbers(num : number[], numString : string): void{
//     if(num){
//         num.sort(function(a, b){return b - a});
//     } else if (numString){
//         let stringToArray = numString.split("");
//         stringToArray.map(Number).sort(function(a, b){return b - a});  
//     } else {
//         console.log("Insert a valid sequence of numbers");
//     }
// }

// descendingNumbers([38, 1, 9, 444, 100], "9021823");
// Correct version

function descendingNumbers(num: number): number {
    return Number(
        num.toString().split("").map(Number).sort((a, b) => b - a).join("")
    );
}

descendingNumbers(123456);
descendingNumbers(283940);

// Snack 35

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filteredList(array: (number | string)[]): number[] {
    return array.filter((item) => typeof item === 'number');
}

let arrayBello = [2, "io", "5", 100, 20];
filteredList(arrayBello);

// Snack 36

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function lowestInt(arrayInt: number[]): number {
    // Con questo sort vado ad ordinare gli elementi dell'array in ordine crescente
    // Poi controlliamo se l'array ha numeri con la virgola o negativi, se così parte il messaggio di errore
    if (arrayInt.some(num => num < 0 || !Number.isInteger(num))) {
        console.log("L'array deve contenere solo numeri positivi.");
        return -1;
    } else {
        arrayInt.sort((a, b) => a - b);
        arrayInt.slice(0, 2);
    }
    return arrayInt[0] + arrayInt[1];
}

lowestInt([100, 90, 80, 1]);
lowestInt([-100, 90, 80, 1]);

// Snack 37

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(arrString: string[]): string {
    let position = arrString.indexOf("Needle".toLowerCase());
    return "found the needle at position" + " " + position;
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])

// Snack 38

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseString(str: string): string {
    return str.split(" ").map(word => word.split("")).reverse().join(" ")
}

console.log(reverseString("Quello che dice è vero"));

// Snack 39

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers: number[]): number[] {

    const min: number = Math.min(...numbers);
    const max: number = Math.max(...numbers);

    const fixedPipes: number[] = [];
    for (let i = min; i <= max; i++) {
        fixedPipes.push(i);
    }

    return fixedPipes;
}

console.log(pipeFix([1, 3, 5, 6, 7, 8]));
console.log(pipeFix([1, 4, 5, 7, 10]));

// Snack 40

// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:

function maxProduct(numbers: number[], k: number): number {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers.slice(0, k).reduce((a, b) => a * b, 1);
}

console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([8, 10, 9, 7], 3));

// Snack 41

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function returnSum(arr: any[]): number {
    let arrNumbers = arr.map((char) => Number(char));
    return arrNumbers.reduce(myFunction);
    function myFunction(total: number, value: number) {
        return total + value;
    }
}

returnSum([10, "10", 20, "20", "30"]);
returnSum([10, "10", 10, "40"]);

// Snack 42

// Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

// Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

// Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

class Lamp {
    color: string;
    on: boolean;
    constructor(color: string) {
        this.color = color;
        this.on = false;
    }
    toggleSwitch() {
        this.on = !this.on;
    }
    state() {
        if (this.on) {
            return "The lamp is on.";
        } else {
            return "The lamp is off.";
        }
    }
}

// Snack 43

// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.

function expressionsMatter(a: number, b: number, c: number): number {
    return Math.max(
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a + b * c,
        a * b + c
    );
}

expressionsMatter(1, 2, 3);
expressionsMatter(1, 1, 1);
expressionsMatter(9, 1, 1);

// Snack 44

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function humanYearsCatYearsDogYears(humanYears: number): number[] {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9; // 24
        dogYears = 15 + 9; // 24
    } else {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
}

humanYearsCatYearsDogYears(1);
humanYearsCatYearsDogYears(2);
humanYearsCatYearsDogYears(10);
console.log(2 + "2");

// Snack 45

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

type RomanNumeral =
    | "I"
    | "IV"
    | "V"
    | "IX"
    | "X"
    | "XL"
    | "L"
    | "XC"
    | "C"
    | "CD"
    | "D"
    | "CM"
    | "M";

function toRoman(num: number): string {
    if (num < 1 || num > 3999) {
        throw new Error("Input must be a positive integer between 1 and 3999");
    }
    const romanMap: { value: number; numeral: RomanNumeral }[] = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    let result = "";
    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

toRoman(1987);
toRoman(3999);
toRoman(4);

// Snack 46

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

function nthEven(n: number): number {
    return (n - 1) * 2;
}

nthEven(1);
nthEven(3);
nthEven(100);
nthEven(1298734);

// Snack 47

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

function replaceDots(str: string): string {
    if (str === null) {
        throw new Error("str cannot be null");
    } else {
        return str.replace(/\./g, '-');
    }
}

replaceDots("one.two.three");
replaceDots("one.two.three.four");
replaceDots("one.two.three.four.five");

// Snack 48

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function reverseWord(str: string): string {
    return str.split(" ").map(word => (word.length >= 5 ? word.split("").reverse().join() : word)).join(" ");
}

reverseWord("Ciao sono Massimo Decimo");

// Snack 49

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"

function encryptThis(str: string): string {
    return str
        .split(" ")
        .map(word => {
            if (word.length === 0) return "";

            const firstCharCode = word.charCodeAt(0).toString();
            if (word.length === 1) return firstCharCode;

            const secondChar = word.length > 1 ? word[1] : "";
            const lastChar = word.length > 2 ? word[word.length - 1] : "";
            const middle = word.slice(2, -1);

            return `${firstCharCode}${lastChar}${middle}${secondChar}`;
        })
        .join(" ");
}

// Examples:
console.log(encryptThis("Hello"));
console.log(encryptThis("good"));
encryptThis("hello world");

// Snack 50

// Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(num: number): number {
    const absNumber = Math.abs(num);
    const sum = absNumber.toString().split("").map(Number).reduce((acc, digit) => acc + digit, 0); // Il reduce qui somma tutti i numeri nell'array, partendo da un accumulatore iniziale di 0.
    return sum;
}

sumDigits(99);
sumDigits(11);
sumDigits(9);

// Snack 51

// Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(arrNum: number[], limitNumber: number): boolean {
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > limitNumber) {
            return false;
        }
    }
    return true;
}

smallEnough([1, 5, 3, 76], 566);
smallEnough([1, 5, 3, 76], 56);

// Snack 52

// Task
// A staircase is given with a non-negative cost per each step. Once you pay the cost, you can either climb one or two steps. Create a solution to find the minimum sum of costs to reach the top. You can start at either of the first two steps.

// Examples
// Stairs: [0, 2, 2, 1]
// Step 0: Start on first step
// Step 1: Pay 0 and climb two steps to reach the third step
// Step 2: Pay 2 and climb two steps to reach the top
// Total spent: 2

// Stairs: [0, 2, 3, 2]
// Step 0: Start on first step
// Step 1: Pay 0 and climb two steps to reach the third step
// Step 2: Pay 3 and climb two steps to reach the top
// Total spent: 3

// Stairs: [10, 15, 20]
// Step 0: Start on the second step
// Step 1: Pay 15 and climb two steps to reach the top
// Total spent: 15

// Stairs [0, 0, 0, 0, 0, 0]
// Take any path, because every step is free!

// Stairs [0, 1, 2, 0, 1, 2]
// Step 0: Start on the second step
// Step 1: Pay 1 and climb two steps to reach the fourth step
// Step 2: Pay 0 and climb one step to reach the fifth step
// Step 3: Pay 1 and climb two steps to reach the top
// Total spent: 2
// Notes
// 2 <= number of steps <= 1000

function minCostClimbingStairs(cost: number[]): number {
    let prev1 = 0;
    let prev2 = 0;
    for (let i = 0; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev1 = prev2;
        prev2 = current;
    }
    return Math.min(prev1, prev2);
}

// Test cases
console.log(minCostClimbingStairs([0, 2, 2, 1])); // Output: 2
console.log(minCostClimbingStairs([0, 2, 3, 2])); // Output: 3
console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
console.log(minCostClimbingStairs([0, 0, 0, 0, 0, 0])); // Output: 0
console.log(minCostClimbingStairs([0, 1, 2, 0, 1, 2])); // Output: 2

// Snack 53

// In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).

// For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.

// More examples in the test cases.

// Brute force is not possible. A little research will go a long way, as this is a well known series.

// Good luck!

function count(num: number): number {
    function factorial(n: number) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    const fact = factorial(num);
    return fact.toString().length;
}

count(3);
count(4);
count(6);

// Snack 54

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

function converter(amount: number): string {
    let valueCNY: number = 6.75;

    const result = (amount * valueCNY);
    return `${result.toFixed(2)} Chinese Yuan`;

}

converter(5);

// Snack 55

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function altCapitalization(str: string): string[] {
    let evenCapitalized = "";
    let oddCapitalized = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCapitalized += str[i].toUpperCase();
            oddCapitalized += str[i].toLowerCase();
        } else {
            evenCapitalized += str[i].toLowerCase();
            oddCapitalized += str[i].toUpperCase();
        }
    }

    return [evenCapitalized, oddCapitalized]
}

altCapitalization("abcdefghi");

// Snack 56

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(arr: number[]): number {

    const majorityEven = arr.slice(0, 3).filter(num => num % 2 === 0).length >= 2;

    return arr.find(num => (num % 2 === 0) !== majorityEven)!;
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);

// Snack 57

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

function dontGiveMeFive(start: number, end: number): number {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes("5")) {
            count++;
        }
    }
    return count;
}

dontGiveMeFive(1, 9);
dontGiveMeFive(1, 33);

// Snack 58

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

function rowWeights(array: number[]): number[] {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            team1 += array[i];
        } else {
            team2 += array[i];
        }
    }
    return [team1, team2];
}

rowWeights([50, 60, 70, 80]);
rowWeights([100, 50]);

// Snack 59

// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function sumsOfParts(ls : number[]) : number[]{
    let totalSum = ls.reduce((acc, num) => acc + num, 0);
    const result : number[] = [];

    for (let i = 0; i < ls.length; i++) {
        result.push(totalSum);
        totalSum -= ls[i];
    }

    result.push(0);

    return result;
}

sumsOfParts([0, 1, 3, 6, 10]);

// Snack 60

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(num : number): number {
    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
        const nextSquare = Math.pow(sqrt + 1, 2);
        return nextSquare;
    }
    return -1;
}

findNextSquare(121);
findNextSquare(45);

// Snack 61

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(str: string): string {
    const stack: string[] = [];
    
    for (const char of str) {
        if (char === "#") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join("");
}

cleanString("abc#d##c");
cleanString("abc##d######");
cleanString("#######");
cleanString("");

// Snack 62

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bumpsInTheRoad(str : string): string {
    let bumps = 0;

    for (const char of str){
        if (char === "n"){
            bumps ++;
        }
    }
    
    return bumps <= 15 ? "Whohoo!" : "Car Dead";
}

bumpsInTheRoad("________nnn___nn________________________");
bumpsInTheRoad("_nnnnnnnnnnnnnnnnnn___nn__nnnnnnnnnnnnnn");

// Snack 63

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(str: string): boolean {
    const stack: string[] = [];
    const matchingBraces: { [key: string]: string } = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const char of str) {
        if (["(", "[", "{"].includes(char)) {
            
            stack.push(char);
        } else {
            
            if (stack.pop() !== matchingBraces[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

validBraces("(){}[]");
validBraces("([{}])");
validBraces("(}");

// Snack 64

// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function sumFirstSeries(num : number): string {
    if (num === 0){
        return "0.00";
    }

    let total = 0.0;
    let denominator = 1;

    for (let i = 0; i < num; i++) {
        total += 1 / denominator;
        denominator += 3;
    }

    return total.toFixed(2);
}

sumFirstSeries(5);
sumFirstSeries(1);
sumFirstSeries(0);

// Snack 65

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop

function numberOfPeopleOnBus(busStops : [number, number][]): number {
    return busStops.reduce((peopleOnBus, [on, off]) =>{
        return peopleOnBus + on - off;
    }, 0)
}

numberOfPeopleOnBus([[10, 0], [3, 5], [5, 8]]);
numberOfPeopleOnBus([]);

// Snack 66

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function sortingList(strArr : string[]): string {
    const sortedArray = strArr.sort();
    const firstValue = sortedArray[0];
    return firstValue.split("").join("***");
}

sortingList(["abracadabra", "ciccioMerolla", "patrick", "antonio"]);

// Snack 67

// Instructions from Linkedin

const arr = [10, 20, 30]; 
arr[100] = 50; 
console.log(arr.length); 

// Snack 68

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function volumeOfCuboids(firstArr: number[], secondArr: number[]): number {
    const volumeA = firstArr.reduce((acc, curr) => acc * curr, 1);
    const volumeB = secondArr.reduce((acc, curr) => acc * curr, 1);
    return Math.abs(volumeA - volumeB); 
}

volumeOfCuboids([2, 2, 3], [5, 4, 1]);
volumeOfCuboids([5, 4, 1], [2, 2, 3]);


