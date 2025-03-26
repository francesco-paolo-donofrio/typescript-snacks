// Snack 1
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.




// function isEvenOrOdd(number: number): string {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };

// isEvenOrOdd(2);
// isEvenOrOdd(3);

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

// function removeVowels(input: string): string {
//     return input.replace(/[aeiouAEIOU]/g, '');
// };

// const myString: string = "This website is for losers LOL!";
// removeVowels("This website is for losers LOL!");

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

// function playingBanjo(name: string): string {
//     if (name.charAt(0).toLowerCase() === "r") {
//         return `${name} plays banjo`;
//     } else {
//         return `${name} does not play banjo`;
//     }
// }

// const name1 = "Francesco";
// const name2 = "roberto";
// const name3 = "Matteo";
// const name4 = "Rapunzel";
// const result1 = playingBanjo(name1);
// const result2 = playingBanjo(name2);
// const result3 = playingBanjo(name3);
// const result4 = playingBanjo(name4);


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

console.log(moltiplicationNumber);

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

console.log(position)

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

create();

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

console.log(Lamp);

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
    return str.split(" ").map(word => (word.length >= 5 ? word.split("").reverse().join("") : word)).join(" ");
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

function sumsOfParts(ls: number[]): number[] {
    let totalSum = ls.reduce((acc, num) => acc + num, 0);
    const result: number[] = [];

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

function findNextSquare(num: number): number {
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

function bumpsInTheRoad(str: string): string {
    let bumps = 0;

    for (const char of str) {
        if (char === "n") {
            bumps++;
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

function sumFirstSeries(num: number): string {
    if (num === 0) {
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

function numberOfPeopleOnBus(busStops: [number, number][]): number {
    return busStops.reduce((peopleOnBus, [on, off]) => {
        return peopleOnBus + on - off;
    }, 0)
}

numberOfPeopleOnBus([[10, 0], [3, 5], [5, 8]]);
numberOfPeopleOnBus([]);

// Snack 66

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function sortingList(strArr: string[]): string {
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


// Snack 69 

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function returnId(arr: number[]): number {
    return arr.sort(function (a, b) { return a - b })[0];
}

returnId([23, 1, 56, 333]);
returnId([22, 55, 23, 66]);

// Snack 70

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function bartenderDrinks(str: string): string {
    const normalizedStr = str.toLowerCase();

    switch (normalizedStr) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}

bartenderDrinks("Jabroni");
bartenderDrinks("PolitiCIAN");

// Snack 71

// Create a function that accepts an array, and returns the first element of the array as a string with all of the other elements in the array concatenated to the end.

function concatenateString(arr: string[]): string {
    if (arr.length === 0) return "";
    return arr[0] + arr.slice(1).join("");
}

concatenateString(["ciao", "bello", "come", "stai"]);
concatenateString(["hola", "amigos", "como", "estas"]);

// Snack 72

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function reverseAeB(str: string): string {
    return str.split("").map((char) => {
        if (char === "a") return "b";
        if (char === "b") return "a";
        return char;
    }).join("");
}

reverseAeB("aab");
reverseAeB("bba");
reverseAeB("aaabbb");

// Snack 73

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

function reverseArray(num: number): number[] {
    if (num === 0) {
        const zero: number[] = [0];
        return zero;
    }
    return num.toString().split("").reverse().map(Number);
}

reverseArray(35231);
reverseArray(987654321);
reverseArray(0);

// Snack 74

// You have to write a function that describe Leo:

// def leo(oscar):
//   pass
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(oscar: number): string {
    if (oscar === 88) {
        return "Leo finally won the oscar! Leo is happy"
    } else if (oscar === 86) {
        return "Not even for Wolf of Wallstreet?"
    } else if (oscar < 88) {
        return "When will you give Leo an Oscar?"
    } else {
        return "Leo got one already"
    }
}

leo(80);
leo(1);
leo(88);

// Snack 75

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 

function joinArray(arr: string[]): string {
    return arr.join(",");
}

joinArray(["h", "o", "l", "a"]);

// Snack 76

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function actionMango(quantity: number, price: number): number {
    const paidMangoes = Math.floor(quantity / 3) * 2 + (quantity % 3);
    return paidMangoes * price;
}

actionMango(3, 2);
actionMango(2, 2);
actionMango(6, 2);

// Snack 77

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function returnWithFilter(list: string[]): string[] {
    const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    const returnedArray: string[] = list.filter(item => !geese.includes(item));

    return returnedArray;
}

returnWithFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

// Snack 78

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function checkSameCase(firstCase: string, secondCase: string): number {
    if (!/^[a-zA-Z]$/.test(firstCase) || !/^[a-zA-Z]$/.test(secondCase)) {
        return -1;
    }
    if (
        (firstCase === firstCase.toUpperCase() && secondCase === secondCase.toUpperCase()) ||
        (firstCase === firstCase.toLowerCase() && secondCase === secondCase.toLowerCase())
    ) {
        return 1;
    }

    return 0;
}

checkSameCase("a", "g");
checkSameCase("b", "G");
checkSameCase("0", "?");


// Snack 79

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function pluralIsServed(num: number): boolean {
    if (num < 0) {
        console.error("A positive number as input is required")
    } else if (num === 1) {
        return false;
    }
    return true;
}

// or
// function pluralIsServed(num: number): boolean {
//     return num !== 1;
// }


pluralIsServed(0);
pluralIsServed(1);
pluralIsServed(99);

// // Snack 80

// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all(sequence: number[], method: (n: number) => boolean): boolean {
    return sequence.every(method);
}

const greaterThan9 = (n: number) => n > 9;
const lessThan9 = (n: number) => n < 9;

all([1, 2, 3, 4, 5], greaterThan9);
all([1, 2, 3, 4, 5], lessThan9);

// Elevazione a potenza di 2 alla terza
console.log(2 ** 3);

// Snack 81

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greetings(name: string): string {
    if (name === "Johnny") {
        return "Hello, my love!";
    }
    return `Hello, ${name}!`;
}

greetings("Johnny");
greetings("Mario");

// Snack 82

// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

const imperialGallon: number = 4.54609188;
const oneMile: number = 1.609344;
function kmPerLiter(mpg: number): number {
    return parseFloat((mpg * oneMile / imperialGallon).toFixed(2))
}

kmPerLiter(20);
kmPerLiter(10);

// Snack 83

// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6


function sixToast(toasts: number): string {
    const maxToast = 6;
    if (toasts > maxToast) {
        return `You have to take ${toasts - maxToast} toast less`
    } else if (toasts < maxToast) {
        return `You have to take ${Math.abs(toasts - maxToast)} more toast`
    } else {
        return `You have 6 toasts inside`
    }
}

sixToast(12);
sixToast(5);
sixToast(6);
sixToast(1);

// Alternative to snack 83

// function sixToast(toasts: number): number {
//     const maxToast = 6;
//     return Math.abs(toasts - maxToast);
// }

// Snack 84

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

function replaceDot(str: string): string {
    return str.split("").map((char) => char === "." ? char.replace(".", "-") : char).join("");
}

replaceDot("Ciao.Sono.Mario")

// Snack 85

// Description:

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

function isDigit(str: string): boolean {
    return !isNaN(parseInt(str));
}

isDigit("1");
isDigit("a");

// Snack 86

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function helloName(name: string): string {
    if (name === "" || name === null) {
        return "Hello, World!";
    }

    return `Hello, ${name}!`;
}

helloName("Mario");
helloName("");

// Snack 87

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

function whiskeyDiscount(normPrice: number, discount: number, holidayCost: number): number {
    const discountPerItem = (normPrice * discount) / 100;
    const bottlesToBuy = holidayCost / discountPerItem;
    return Math.round(bottlesToBuy);
}

whiskeyDiscount(10, 10, 500);
whiskeyDiscount(12, 50, 1000);

//  Snack 88

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

sumTheDifferences([2, 1, 10]);

function sumTheDifferences(arr: number[]): number {
    if (arr.length <= 1) return 0; // Handle empty or single-element arrays

    // Sort the array in descending order
    const sortedArr = arr.sort((a, b) => b - a);

    // Calculate the sum of differences between consecutive pairs
    let sum = 0;
    for (let i = 0; i < sortedArr.length - 1; i++) {
        sum += sortedArr[i] - sortedArr[i + 1];
    }

    return sum;
}

// Example usage
console.log(sumTheDifferences([2, 1, 10])); // Output: 9

// Snack 89

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

function finalGrade(grade: number, completedProjects: number): number {
    if (grade > 90 || completedProjects > 10) return 100;
    else if (grade > 75 && completedProjects > 5) return 90;
    else if (grade > 50 && completedProjects > 2) return 75;
    return 0;
}

finalGrade(100, 12);
finalGrade(99, 0);
finalGrade(85, 5);
finalGrade(55, 0);
finalGrade(20, 2);

// Snack 90

// #Description

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// In the form:

// (Heads, Legs) = (72, 200)

// VALID - (72, 200) =>             (44 , 28) 
//                              (Chickens, Cows)

// INVALID - (72, 201) => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given.

// Happy coding!

function animals(heads: number, legs: number): [number, number] | "No solutions" {
    // Edge case: If either heads or legs is negative, or not divisible as expected
    if (heads < 0 || legs < 0 || legs % 2 !== 0) {
        return "No solutions";
    }

    // Calculate the number of chickens and cows
    const chickens = (4 * heads - legs) / 2;
    const cows = heads - chickens;

    // Check if the solution is valid
    if (chickens < 0 || cows < 0 || !Number.isInteger(chickens) || !Number.isInteger(cows)) {
        return "No solutions";
    }

    return [chickens, cows];
}

// Test cases
console.log(animals(72, 200));
console.log(animals(72, 201));
console.log(animals(0, 0));
console.log(animals(-1, 100));
console.log(animals(100, 400));

// Snack 91

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function realFloor(americanFloor: number): number {
    if (americanFloor === 1) {
        return 0;
    } else if (americanFloor <= 13 && americanFloor > 0) {
        return americanFloor - 1;
    } else if (americanFloor > 13) {
        return americanFloor - 2;
    }
    return americanFloor;
}

realFloor(1);
realFloor(0);
realFloor(5);
realFloor(15);
realFloor(-3);

// Snack 92

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed: boolean, vacation: boolean): boolean {
    if (employed && vacation) return false;
    else if (employed === true && vacation === false) return true;
    else if (employed === false && vacation === true) return false;
    return false;
}

setAlarm(true, false);
setAlarm(false, false);
setAlarm(true, true);
setAlarm(false, true);

// Snack 93

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function xYearsOld(str: string): number {
    return parseInt(str[0], 10);
}

xYearsOld("1 years old");
xYearsOld("5 years old");

// Snack 94

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function betweenInt(first: number, second: number): number[] {
    const result: number[] = [];
    for (let i = first; i <= second; i++) {
        result.push(i)
    }
    return result;
}

betweenInt(1, 4);
betweenInt(3, 15);

// Snack 95

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function blankPages(n: number, m: number): number {
    if (n < 0 || m < 0) return 0;
    return n * m;
}

blankPages(-5, 5);
blankPages(5, 5);

// Snack 96 

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function beastFeast(name: string, dish: string): boolean {
    if (name.length < 2 && dish.length < 2) return false;
    return (
        name[0].toLowerCase() === dish[0].toLowerCase() &&
        name[name.length - 1].toLowerCase() === dish[dish.length - 1].toLowerCase()
    )
}

beastFeast("elefante", "torta");
beastFeast("chickadee", "chocolate cake");

// Snack 97

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function hydratedDream(hour: number): number {
    return Math.floor(hour * 0.5);
}

hydratedDream(3);
hydratedDream(6.7);
hydratedDream(11.8);

// Snack 98

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBinary(str: string): string {
    return str.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

fakeBinary("1234");

// Snack 99

// Description:
// This kata is part of the collection Mary's Puzzle Books.

// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

// NOTES:

// • If both strings are the same, return []

// • Both strings will always be the same length

// • Capitalization and punctuation matter

function spotDiff(str1: string, str2: string): number[] {
    let result: number[] = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            result.push(i);
        }
    }
    return result;
}

spotDiff("abcdefg", "abcqetg");

// Snack 100

// Description:
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

function cubeChecker(volume: number, side: number): boolean {
    return volume > 0 && side > 0 && volume === side ** 3;
}

cubeChecker(27, 3);
cubeChecker(125, 3);

// Snack 101

// Description:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s: string[]): string {
    return s.sort()[0].replace(/./g, "*");
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);

// Snack 102

// Description:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal: string): string {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

mouthSize("alligator");



// Snack 103

// Objective

// Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

// Write a function that takes n and returns it's sXORe.

function sxor(n: number): number {
    return [...Array(n).keys()].reduce((a, b) => a ^ b);
}

sxor(5);

// Snack 104

// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.

function height(n: number): number {
    const firstCatHeight = 2000000;
    const ratio = 0.4;
    let totalHeight = 0;

    for (let i = 0; i < n; i++) {
        totalHeight += firstCatHeight * Math.pow(ratio, i);
    }

    return parseFloat(totalHeight.toFixed(3));
}

console.log(height(26));


// Snack 105

// Description:
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function smallestID(arr: number[]): number {

    const idSet = new Set(arr);


    let smallest = 0;


    while (idSet.has(smallest)) {
        smallest++;
    }

    return smallest;
}

const usedIDs = [3, 5, 1, 0, 2, 5, 3];
smallestID(usedIDs);

// Snack 106

// Objective

// Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

// Write a function that takes n and finds it's scORe.

function score(n: number): number {

    let result = 1;
    while (result <= n) {
        result <<= 1;
    }
    return result - 1;
}

score(5);
score(2);

// Snack 107

// Definition
// A Tidy Number is a number whose digits are in non-decreasing order.

// Task
// Given a number, determine if it is tidy or not.

// Notes
// The number passed will always be positive.
// Return the result as a boolean.
// Examples
// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).

function tidyNumber(num: number): boolean {

    let arrOfNumbers: string[] = num.toString().split("");
    for (let i = 0; i <= arrOfNumbers.length - 1; i++) {
        if (arrOfNumbers[i] > arrOfNumbers[i + 1]) {
            return false;
        };
    }

    return true;
}

console.log(tidyNumber(127));
console.log(tidyNumber(32));
console.log(tidyNumber(1024));
console.log(tidyNumber(13579));
console.log(tidyNumber(2335));

// Snack 108

// Description:

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d

// A few things to note:

//     There should be one space in between the two characters
//     You don't have to modify the case (i.e. no need to change to upper or lower)
//     If one string is longer than the other, there should be a space where the character would be

function transposeTwoStrings(arr: string[]): string {
    const maxLength = Math.max(arr[0].length, arr[1].length);
    let result: string[] = [];

    for (let i = 0; i < maxLength; i++) {
        const leftChar = arr[0][i] || " "; // Se la lettera non esiste, usa spazio
        const rightChar = arr[1][i] || " ";
        result.push(`${leftChar} ${rightChar}`);
    }

    return result.join("\n"); // Unisce le righe con newline
}

// Test
console.log(transposeTwoStrings(["Hello", "World"]));
console.log(transposeTwoStrings(["Hi", "There"]));
console.log(transposeTwoStrings(["Short", "LongerWord"]));
// Push

// Snack 108

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

function twoOldestAges(ages: number[]): number[] {
    return ages.sort((a, b) => a - b).slice(-2);
}

twoOldestAges([1, 5, 87, 45, 8, 8]);
twoOldestAges([1, 3, 10, 0]);

// Snack 109

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function triangularNumber(n: number): number {
    if (n <= 0) return 0;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (i * (i + 1)) / 2;
    }
    return sum;
}

triangularNumber(1);
triangularNumber(2);
triangularNumber(3);
triangularNumber(4);

// Snack 110

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function removeSpaces(input: string): string {
    return input.split(" ").join("");
}

removeSpaces("  sss aa s fllf sl s s la  ");

// Snack 111

// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// You will be given a string representing the garden such as:

// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:

// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

function replaceWithGravel(input: string): string {
    return input
        .split(" ")
        .map(element => element === "gravel" || element === "rock" ? "element" : "gravel")
        .join(" ");
}

replaceWithGravel("gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel");

// Snack 112

// You will be given an array which will include both integers and characters.

// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
// Here is an example of your return

// [3.6, "udiwstagwo"]

function meanAndConcatenate(arr: any[]): [number, string] {
    // Separate integers and characters
    const integers = arr.filter((element) => typeof element === 'number' || !isNaN(Number(element))).map(Number);
    const characters = arr.filter((element) => isNaN(Number(element)) && typeof element === 'string');

    const mean = integers.reduce((sum, num) => sum + num, 0) / integers.length;

    const concatenatedString = characters.join('');

    return [mean, concatenatedString];
}

const lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
const result = meanAndConcatenate(lst);

meanAndConcatenate(lst);
console.log(result);
// Snack 113

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

function itIsString(str: string): boolean {
    return str === str.toUpperCase();
}

itIsString("c");
itIsString("HELLO I AM DONALD");
itIsString("heLLO I AM DONALD");

// Snack 114

// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

function collision(x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number): boolean {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return distance <= (radius1 + radius2);
}

collision(2, 2, 5, 1, 1, 5);
collision(2, 2, 2, 1, 1, 2);

// Snack 115

// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// function calculate(num1 : number, str : string, num2 : number): number | null {
//     let arrayOfAll = (num1 + str + num2).split("");

//     let arrayOfNumber = arrayOfAll.filter((element) => typeof element === 'number' || !isNaN(Number(element))).map(Number);

//     let sum = function sum(num1 : number, num2 : number){
//         return num1 + num2;
//     };
//     let sottraction = function sottraction(num1 : number, num2 : number){
//         return num1 - num2;
//     };
//     let moltiplication = function moltiplication(num1 : number, num2 : number){
//         return num1 * num2;
//     };
//     let division = function division(num1 : number, num2 : number){
//         return num1 / num2;
//     };

//     if (str === "+"){
//         return arrayOfNumber.reduce(sum);
//     } else if (str === "-"){
//         return arrayOfNumber.reduce(sottraction);
//     } else if (str === "*"){
//         return arrayOfNumber.reduce(moltiplication);
//     } else if (str === "/"){
//         return arrayOfNumber.reduce(division);
//     } else {
//         return null;
//     }
// }

function calculate(num1: number, str: string, num2: number): number | null {
    switch (str) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : null;
        default:
            return null;
    }
}

calculate(1, "+", 2);
calculate(4, "-", 2);
calculate(5, ",a", 2);
calculate(2, "*", 2);
calculate(10, "/", 2);

// Snack 116

// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

function getNames(data: { name: string, age: number }[]): string[] {
    const names: string[] = [];
    for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
    }
    return names;
}

getNames([
    { name: 'Bibbo', age: 21 },
    { name: 'Kate', age: 23 }
]);



// Snack 117

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

// function returnFullName(human : {firstName : string, lastName : string}[]): string{
//     const fullName : string[] = [];
//     for (let i = 0; i < human.length; i++){w
//         fullName.push(` "The complete name is ${human[i].firstName} ${human[i].lastName}"`);
//     } 
//     return fullName.join("");
// }

// console.log(returnFullName([
//     {firstName: 'Jorgie', lastName: ""},
//     {firstName: 'Max', lastName: "Vinic"},
//     {firstName: 'Jorgie', lastName: "Asd"}
// ]));

function returnFullNames(humans: { firstName: string; lastName: string }[]): string {
    return humans
        .map(human => `The complete name is ${human.firstName} ${human.lastName}`.trim())
        .join('\n');
}

console.log(
    returnFullNames([
        { firstName: 'Jorgie', lastName: '' },
        { firstName: 'Max', lastName: 'Vinic' },
        { firstName: 'Jorgie', lastName: 'Asd' }
    ])
);

// Snack 118

// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

function containAllRots(strng: string, arr: string[]): boolean {
    if (strng === "") return true;
    const rotations = Array.from({ length: strng.length }, (_, i) =>
        strng.slice(i) + strng.slice(0, i)
    );

    return rotations.every(rot => arr.includes(rot));
}

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
console.log(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]));

// Snack 119
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// function stringTemplate(userValue: number): string {
//     let str = "";
//     let fixValue = 10;
//     return str = `This is a string template, you can add a ${userValue} and moltiplicate it with ${fixValue}, and the result will be ${(userValue * fixValue)}`;
// }


// Snack 120
// Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order

// function sortingArray(numArr: number[]): number[] {
//     return numArr.sort(function (a: number, b: number): any { return a - b });
// }

// console.log(sortingArray([22, 77, 11, 1, 0, 100]));



// console.log(stringTemplate(10));

// Snack 121
// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

// type Operation = {
//     a: number;
//     b: number;
//     operation: string;
// };

// function evalObject(value: Operation): number | string {
//     switch (value.operation) {
//         case '+':
//             return value.a + value.b;
//         case '-':
//             return value.a - value.b;
//         case '*':
//             return value.a * value.b;
//         case '/':
//             return value.b !== 0 ? value.a / value.b : 'Error: Division by zero';
//         case '%':
//             return value.a % value.b;
//         case '^':
//             return Math.pow(value.a, value.b);
//         default:
//             return 'Invalid operation';
//     }
// }


// console.log(evalObject({ a: 2, b: 5, operation: "+" }));
// console.log(evalObject({ a: 2, b: 5, operation: "*" }));
// console.log(evalObject({ a: 2, b: 5, operation: "^" }));

// console.log(evalObject({ a: 2, b: 5, operation: "+" }));
// console.log(evalObject({ a: 2, b: 5, operation: "*" }));
// console.log(evalObject({ a: 2, b: 5, operation: "^" }));

// // Snack 122

// // Description:
// // Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// // Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// // Example:

// // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function jadeSmithCap(strNuova: string): string {
//     let arrStrNuovo: string[] = strNuova.split("");
//     for (let i = 0; i < arrStrNuovo.length; i++) {
//         if (arrStrNuovo[i] === " ") {
//             arrStrNuovo[i + 1] = arrStrNuovo[i + 1].toUpperCase();
//         }
//     }
//     return arrStrNuovo.join('');
// }

// console.log(jadeSmithCap("How can mirrors be real if our eyes aren't real"));

// // Snack 123

// // Description:
// // In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// // For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// // Good luck!

// // Please also try Simple remove duplicates

// function forInAFor(streing: string): number {
//     // Using a regex we are going to find all the numbers that match
//     let arrOfNumbers: number[] = [...streing.matchAll(/\d+/g)].map(match => parseInt(match[0], 10));

//     // It will give the maximum number found
//     return Math.max(...arrOfNumbers);
// }

// console.log(forInAFor("gh12cdy695m1"));

// // Snack 124

// // Description:
// // Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// // The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// // 20_year_estimate = one_year_total * 20

// // You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// // stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// // Make sure your solution takes into account all of the nesting within the stairs array.

// // Each weekday in the stairs array is an array.

// // sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// // Your function should return the 20 year estimate of the stairs climbed using the formula above.

// function estimateStairs(stairs: number[][]): number {

//     const oneYearTotal = stairs.reduce((total, day) => {
//         return total + day.reduce((dayTotal, stairsClimbed) => dayTotal + stairsClimbed, 0);
//     }, 0);

//     const twentyYearEstimate = oneYearTotal * 20;

//     return twentyYearEstimate;
// }

// const stairs: number[][] = [
//     [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
// ];

// console.log(estimateStairs(stairs));

// // Snack 125

// // In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// // Years divisible by 4 are leap years,
// // but years divisible by 100 are not leap years,
// // but years divisible by 400 are leap years.
// // Tested years are in range 1600 ≤ year ≤ 4000.

// function leapYear(yearNumber: number): boolean {
//     if (yearNumber % 400 === 0) {
//         return true;
//     }
//     else if (yearNumber % 100 === 0) {
//         return false;
//     }
//     else if (yearNumber % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(leapYear(400));
// console.log(leapYear(100));
// console.log(leapYear(800));
// console.log(leapYear(4));
// console.log(leapYear(12));

// // Snack 126

// // Description:
// // I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// // Monday --> 12

// // Tuesday --> numbers greater than 95

// // Wednesday --> 34

// // Thursday --> 0

// // Friday --> numbers divisible by 2

// // Saturday --> 56

// // Sunday --> 666 or -666

// // Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

// function amIAfraid(dayOfWeek: string, num: number): boolean {
//     if (dayOfWeek === "Monday" && num === 12) {
//         return true;
//     } else if (dayOfWeek === "Tuesday" && num > 95) {
//         return true;
//     } else if (dayOfWeek === "Wednesday" && num === 34) {
//         return true;
//     } else if (dayOfWeek === "Thursday" && num === 0) {
//         return true;
//     } else if (dayOfWeek === "Friday" && num % 2 === 0) {
//         return true;
//     } else if (dayOfWeek === "Saturday" && num === 56) {
//         return true;
//     } else if (dayOfWeek === "Sunday" && num === 666 || num === -666) {
//         return true;
//     }
//     return false;
// }
// console.log(amIAfraid("Monday", 12));
// console.log(amIAfraid("Tuesday", 96));
// console.log(amIAfraid("Wednesday", 34));
// console.log(amIAfraid("Thursday", 0));
// console.log(amIAfraid("Friday", 4));
// console.log(amIAfraid("Saturday", 56));
// console.log(amIAfraid("Sunday", -666));

// // Snack 127

// // Description:
// // We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

// // For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

// // Examples:
// // doubleton(120) === 121
// // doubleton(1234) === 1311
// // doubleton(10) === 12

// function doubletonNumber(num: number): number | string {

//     if (num < 0 || num > 1000000) {
//         return "Only numbers included between 0 and 1.000.000 are allowed";
//     }

//     function isDoubleton(number: number): boolean {
//         const digits = new Set(String(number).split(''));
//         return digits.size === 2;
//     }
//     for (let i = num + 1; i <= 1000000; i++) {
//         if (isDoubleton(i)) {
//             return i;
//         }
//     }

//     return "No doubleton number found within the range.";
// }

// console.log(doubletonNumber(120));
// console.log(doubletonNumber(10));
// console.log(doubletonNumber(1234));

// // Esercizio AbbeyCode Anagrams

// let arrayOfWords: string[] = [];
// arrayOfWords[0] = "Salting";
// console.log(arrayOfWords[0]);

// // Snack 128

// // Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// // (In C# Integer means all integer Types like Int16,Int32,.....)

// // Examples
// // power_of_4(1024) => true
// // power_of_4(55)   => false
// // power_of_4("Four") => false

// function isPowerOfFour(num: number): boolean {
//     if (num <= 0 || num % 1 !== 0) {
//         return false;
//     }

//     while (num % 4 === 0) {
//         num /= 4;
//     }
//     return num === 1;
// }

// console.log(isPowerOfFour(1024));
// console.log(isPowerOfFour(55));

// // Snack 129

// // Help Suzuki rake his garden!

// // The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// // You will be given a string representing the garden such as:

// // garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// // Rake out any items that are not a rock or gravel and replace them with gravel such that:

// // garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// // Returns a string with all items except a rock or gravel replaced with gravel:

// // garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

// function replaceString(str: string): string {

//     return str.split(" ").map(el => el === "gravel" || el === "rock" ? el : "gravel").join(" ")

// }

// // Trying another method
// // let arrayOfString : string[] = str.split(" ");

// // for (let i = 0; i < arrayOfString.length; i++){
// //     if (arrayOfString[i] !== "gravel" && arrayOfString[i] !== "rock"){
// //         arrayOfString[i] = "gravel";
// //     }
// // }
// // return arrayOfString.join(" ")}

// console.log(replaceString("slug spider rock gravel gravel gravel gravel gravel gravel gravel"));

// // Snack 130

// // This kata is part of the collection Mary's Puzzle Books.

// // Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// // String 1: "abcdefg"
// // String 2: "abcqetg"
// // Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// // It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

// // NOTES:

// // • If both strings are the same, return []

// // • Both strings will always be the same length

// // • Capitalization and punctuation matter

// function spot_diff(stringa1: string, stringa2: string): string | void {
//     for (let i = 0; i < stringa1.length; i++) {
//         if (stringa1[i] !== stringa2[i]) {
//             result.push(i);
//         }
//     }
//     // if (stringa1.length !== stringa2.length){
//     //     return "The length of both strings must be the same";
//     // } else {
//     //     let iterator = stringa1.match(stringa2);
//     //     console.log(iterator);
//     // }

// }


// console.log(spotDiff("abcdefg", "abcqetg"));
// console.log(spotDiff("abcdefg", "abcdefq"));
// console.log(spotDiff("abcdefg", "abcdefg"));

// // Snack 131

// // Description:
// // Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// // The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// // So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// // For instance:

// // "a   **&  cZ"  =>  "10100000000000000000000001"
// // "aaaaaaa79345675"  =>  "10000000000000000000000000"
// // "&%#*"  =>  "00000000000000000000000000"


// function returnString(str: string): string {
//     let result = Array(26).fill('0');

//     let normalizedStr = str.toLowerCase();

//     for (let char of normalizedStr) {
//         if (/[a-z]/.test(char)) {
//             let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
//             result[index] = '1';
//         }
//     }

//     return result.join('');
// }

// console.log(returnString("a   **&  cZ"));
// console.log(returnString("aaaaaaa79345675"));
// console.log(returnString("&%#*"));


// // Snack 132 

// A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings.

// For example:

// s1 = "abcd\nefgh\nijkl\nmnop"

// s2 = "qrst\nuvwx\nyz12\n3456"

// Let us build a new string strng of size (n + 1) x n in the following way:

// The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
// The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
// and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
// So we have:

// strng --> "a3456\nefyz1\nijkuv\nmnopq"

// or printed:
// abcd    qrst  -->  a3456
// efgh    uvwx       efyz1
// ijkl    yz12       ijkuv
// mnop    3456       mnopq

function squaredString(s1: string, s2: string): string {
    let result = "";
    let s1Lines = s1.split("\n");
    let s2Lines = s2.split("\n");

    for (let i = 0; i < s1Lines.length; i++) {
        let line = s1Lines[i];
        for (let j = 0; j < line.length; j++) {
            let char = line[j];
            result += char;
        }
        if (i < s2Lines.length) {
            result += s2Lines[s2Lines.length - 1][i];
        }
        result += "\n";
    }
    return result;
}

console.log(squaredString("abcd\nefgh\nijkl\nmnop", "qrst\nuvwx\nyz12\n3456"));

// Snack 133

// Description:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

function getRidOfZero(number: number): number {

    let streuza: string = number.toString();

    if (streuza === "0") {
        return 0;
    }

    if (streuza[0] === '-') {
        streuza = streuza.slice(0, streuza.length - 1);
        let i = streuza.length - 1;
        while (streuza[i] === '0') {
            streuza = streuza.slice(0, i);
            i--;
        }
        return -parseInt(streuza);
    } else {
        let i = streuza.length - 1;
        while (streuza[i] === '0') {
            streuza = streuza.slice(0, i);
            i--;
        }
        return parseInt(streuza);
    }
}

console.log(getRidOfZero(2));


// // Snack 134

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

function returnCentury(numb: number): number {
    let arrOfNumb: string[] = numb.toString().split("");
    while (arrOfNumb[1] === arrOfNumb[1]) {
        return parseInt(arrOfNumb.slice(0, 2).join("")) + 1;

    }
    return 0;
}

console.log(returnCentury(1705));
console.log(returnCentury(0));
console.log(returnCentury(1900));

// Snack 135

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

// function evaporator(content: number, evap_per_day: number, threshold: number): number {
//     let initialContent = content; // Store the initial content to calculate the threshold
//     let currentContent = content; // This will decrease as the gas evaporates
//     let durationDays = 0;

//     // Continue until the content drops below the threshold percentage of the initial content
//     while (currentContent > initialContent * (threshold / 100)) {
//         currentContent -= currentContent * (evap_per_day / 100); // Reduce content by the given daily evaporation rate
//         durationDays++; // Increment the day counter
//     }

//     return durationDays;
// }

// Esercizio:
// Scrivi una funzione in TypeScript che calcoli la sequenza di Fibonacci fino al n-esimo termine. La funzione dovrà restituire l'array con i primi n numeri della sequenza.

// Requisiti:
// La funzione prenderà un parametro n (un numero intero) che rappresenta il numero di termini della sequenza da calcolare.
// La funzione dovrà restituire un array contenente i primi n numeri della sequenza di Fibonacci.
// Se n è minore o uguale a 0, la funzione dovrà restituire un array vuoto.
// Esempio:
// Input: n = 5

// Output: [0, 1, 1, 2, 3]

// Suggerimenti:
// I primi due numeri della sequenza di Fibonacci sono 0 e 1.
// Ogni numero successivo si ottiene sommando i due numeri precedenti.
// Buona fortuna! Fammi sapere se hai bisogno di aiuto o vuoi condividere la tua soluzione!

function fibonacci(number: number): number[] {
    let firstNumber: number = 0;
    let secondNumber: number = 1;
    let result: number[] = [firstNumber, secondNumber];

    if (number <= 0) return [];
    if (number === 1) return [firstNumber];

    for (let i = 2; i < number; i++) {
        const nextNumber = firstNumber + secondNumber;
        result.push(nextNumber);
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }

    return result;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));

// Snack 136 

// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal
function sumFunction(total: number, value: number) {
    return total + value;
};
let firstAsciiSum: number = 0;
let secondAsciiSum: number = 0;
function comparingASCII(string1: string, string2: string): string {
    if (string1 === "null" || string1 === "" || /\d/.test(string1)) {
        firstAsciiSum = 0;
    }
    if (string2 === "null" || string2 === "" || /\d/.test(string2)) {
        secondAsciiSum = 0;
    }
    let firstStringArr: number[] = string1.split("").map(char => (Number(char.charCodeAt(0))));
    firstAsciiSum = firstStringArr.reduce(sumFunction, 0);
    console.log(firstAsciiSum);
    let secondStringArr: number[] = string2.split("").map(char => (Number(char.charCodeAt(0))));
    secondAsciiSum = secondStringArr.reduce(sumFunction, 0);
    console.log(secondAsciiSum);
    if (firstAsciiSum === secondAsciiSum) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(comparingASCII("AD", "BC"));
console.log(comparingASCII("AD", "DD"));
console.log(comparingASCII("gf", "FG"));
console.log(comparingASCII("zz1", ""));
console.log(comparingASCII("ZzZz", "ffPFF"));

// Snack 137

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isAnIsogram(str: string): boolean {
    str = str.toLowerCase();
    const seen = new Set(); //Con il set riusciamo a verificare la presenza di doppioni quasi instantaneamente

    for (const char of str) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}

console.log(isAnIsogram("Dermatoglyphics"));
console.log(isAnIsogram("aba"));
console.log(isAnIsogram("moOse"));
console.log(isAnIsogram(""));

// Snack 138

// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// With the above data your function gps(s, x) should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.

// Happy coding!

function calculateGpsDistance(seconds: number, distance: number[]): number {
    let drivenDistance: number[] = [];
    const constant: number = 3600;
    let firstResult: number[] = [];

    for (let i = 0; i < distance.length - 1; i++) {
        drivenDistance.push(distance[i + 1] - distance[i]);
    }


    function calculateDeltaDistance(constant: number, drivenDistance: number[]): number[] {
        for (let i = 0; i <= drivenDistance.length - 1; i++) {
            firstResult.push(constant * drivenDistance[i] / seconds);
        }
        return firstResult;
    }
    calculateDeltaDistance(constant, drivenDistance);

    let floorResult: number[] = firstResult.map(el => el <= 1 ? 0 : Math.floor(el));
    let maxInteger: number = Math.max(...floorResult);

    console.log(maxInteger);
    return maxInteger;
}

console.log(calculateGpsDistance(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));

// Snack 139

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiplesOf3(number: number): void | number {
    let arrNumbers: number[] = [];
    let somma: number = 0;

    if (number < 0) {
        return 0;
    }

    for (let i = number - 1; i > 0; i--) {

        if (i % 5 === 0) {
            arrNumbers.push(i);
            continue;
        }
        if (i % 3 === 0) {
            arrNumbers.push(i);
        }
    }

    somma = arrNumbers.reduce((acc, num) => acc + num, 0);
    return somma;
}

console.log(multiplesOf3(172));

// Snack 140

// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

export function catMouse(x: string): string {

    let dotArray: string[] = [];
    let stringArray: string[] = x.split("");

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === ".") {
            dotArray.push(stringArray[i]);
        }
    }

    if (dotArray.length <= 3) {
        return "Caught";
    }

    return "Escaped";
}

// console.log(catMouse("C.....m"));
// console.log(catMouse("C...m"));
// console.log(catMouse("C.m"));

// Snack 141

// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and cannot jump over the dog.

// So:

// if j = 5:

// ..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse

// .....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough

// if j = 10:

// ...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog

// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

// Finally, if not all three animals are present, return 'boring without all three'

export function catDogMouse(x: string, j: number): string {

    let arrayOfChar: string[] = x.split("");
    let mouseInFront: boolean = arrayOfChar.indexOf("C") < arrayOfChar.indexOf("m");
    let dotArray2: string[] = [];
    let distance: number = 0;



    if (!arrayOfChar.includes("D") && !arrayOfChar.includes("C") && !arrayOfChar.includes("m")) {
        return "boring without all three";
    }
    if (mouseInFront) {

        //Check misurazione distanza C e m
        for (let i = arrayOfChar.indexOf("C"); i < arrayOfChar.length; i++) {
            if (arrayOfChar[i] === "m") {
                break;
            }
            distance++;
        }

        if (distance > j) {
            console.log("Salto troppo corto");
            return "Escaped!";
        }


        for (let i = arrayOfChar.indexOf("C"); i < arrayOfChar.length; i++) {
            let charC: string = arrayOfChar[i];

            if (arrayOfChar.indexOf("C"))

                if (dotArray2.length > j) {
                    break;
                }

            if (charC === ".") {
                dotArray2.push(charC);
                console.log(dotArray2.length)
            }


            if (charC === "m") {
                return "Caught!"
            }

            if (charC === "D") {
                return "Protected!"
            }
        }
    } else {

        //Check misurazione distanza C e m
        for (let i = arrayOfChar.indexOf("C"); i >= 0; i--) {
            if (arrayOfChar[i] === "m") {
                break;
            }
            distance++;
        }

        if (distance > j) {
            console.log("Salto troppo corto");
            return "Escaped!";
        }

        for (let i = arrayOfChar.indexOf("C"); i >= 0; i--) {
            let charC: string = arrayOfChar[i];

            if (dotArray2.length > j) {
                break;
            }

            if (charC === "." && dotArray2.length < j) {
                dotArray2.push(charC);
            }

            if (charC === "m") {
                return "Caught!"
            }

            if (charC === "D") {
                return "Protected!"
            }
        }
    }


    return "Escaped!"
}

console.log(catDogMouse(".......m.....D................C...", 20));

console.log(reverseWord("Hey fellow warriors"));

// Snack 142

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array: number[]): number[] {
    let arrayOfOdd: any = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arrayOfOdd.push(array[i]);
        }
    }

    arrayOfOdd.sort(function (b: number, a: number) { return a - b });

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array[i] = arrayOfOdd.pop();
        }
    }
    return array;
}

console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// Snack 143

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.




export const likes = (a: string[]): string => {
    if (a.length === 0) {
        return "no one likes this";
    }

    if (a.length === 1) {
        return `${a[0]} likes this`;
    }

    if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    }

    if (a.length >= 4) {
        return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }

    return `${a[0]} and ${a[1]} like this`;
}

//   Snack 144

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

export function narcissistic(value: number): boolean {

    let arrayOfValue: string[] = value.toString().split("");
    let valueLength: number = arrayOfValue.length;
    let arrayOfResult: number[] = [];

    for (let i = 0; i < arrayOfValue.length; i++) {
        let number: number = parseInt(arrayOfValue[i]);
        arrayOfResult.push(Math.pow(number, valueLength));
    }
    console.log(arrayOfResult);
    if (arrayOfResult.reduce(myFunction) === value) {
        console.log(arrayOfResult.reduce(myFunction));
        return true;
    }
    function myFunction(total: number, value: number) {
        return total + value;
    }

    return false;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));

// Snack 145

// Task
// Write a function that checks if two non-negative integers make an "interlocking binary pair".

// Interlock ?
// numbers can be interlocked if their binary representations have no 1's in the same place
// comparisons are made by bit position, starting from right to left (see the examples below)
// when representations are of different lengths, the unmatched left-most bits are ignored
// Examples
// a = 9, b = 4

// Stacking representations shows how they can interlock.

//  9    1001
//  4     100
// Here, no 1's share any position, so the function returns true.


// a = 3, b = 6

// These representations do not interlock.

//  3      11
//  6     110
// Finding they both have a 1 in the same position, the function returns false.

// Input
// Two non-negative integers.

// Output
// Boolean true or false whether or not these integers are interlockable.

// export function interlockable(a: number, b: number): boolean {
//     function dec2bin(dec: number) {
//         return (dec >>> 0).toString(2);
//     }

//     let arrayOfA: string[] = [];
//     let arrayOfB: string[] = [];

//     let aToBinary: string[] = dec2bin(a).split("");
//     let bToBinary: string[] = dec2bin(b).split("");

//     for (let i = 0; i < aToBinary.length; i++) {
//         arrayOfA.push(aToBinary[i]);
//     }
//     console.log(arrayOfA);
//     for (let i = 0; i < bToBinary.length; i++) {
//         arrayOfB.push(bToBinary[i]);
//     }
//     console.log(arrayOfB);

//     for (let i = arrayOfA.length; i >= 0; i--) {
//         console.log(arrayOfB[i]);
//         if (arrayOfA[i] !== arrayOfB[i]){
//             return true; 
//         }
//       }

//     return false;
// }

export function interlockable(a: number, b: number): boolean {
    return (a & b) === 0;
}

console.log(interlockable(3, 6));

// Snack 146

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words: string): string {
    if (words !== "") {
        let arrayOfWords: string[] = words.split(" ");
        let arrayOfNumbers: number[] = [];

        for (let i = 0; i < arrayOfWords.length; i++) {
            for (let j = 0; j < arrayOfWords[i].length; j++) {
                if (arrayOfWords[i][j] >= "1" && arrayOfWords[i][j] <= "9") {
                    arrayOfNumbers.push(parseInt(arrayOfWords[i][j]));
                }
            }
        }


        let arrayOfResult: string[] = [];
        for (let i = 1; i <= 9; i++) {
            for (let j = 0; j < arrayOfNumbers.length; j++) {

                if (arrayOfNumbers[j] === i) {
                    arrayOfResult.push(arrayOfWords[j]);
                }
            }
        }
        return arrayOfResult.join(" ");
    }


    return "";
}

console.log(order("is2 Thi1s T4est 3a"));

// Snack 146

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99.
// MM = minutes, padded to 2 digits, range: 00 - 59.
// SS = seconds, padded to 2 digits, range: 00 - 59.
// The maximum time never exceeds 359999 (99:59:59).

// You can find some examples in the test fixtures.

export function humanReadable(seconds: number): string {
    let arrayOfHours: string[] = [];
    let arrayOfMinutes: string[] = [];
    let arrayOfSeconds: string[] = [];
    let minutes: number = 0;
    let hours: number = 0;


    while (seconds >= 60) {
        seconds -= 60;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    arrayOfHours[0] = hours.toString().padStart(2, '0');
    arrayOfMinutes[0] = minutes.toString().padStart(2, '0');
    arrayOfSeconds[0] = seconds.toString().padStart(2, '0');

    console.log("This is arrayOfSeconds", arrayOfSeconds);
    console.log("This is arrayOfMinutes", arrayOfMinutes);
    console.log("This is arrayOfHours", arrayOfHours);

    return arrayOfHours.concat(arrayOfMinutes, arrayOfSeconds).join(":");
}

console.log(humanReadable(3600));

// Snack 147

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n: number): number {
    // Converte il numero in binario come stringa
    const binaryRepresentation = n.toString(2);
    console.log(binaryRepresentation);

    // Conta il numero di '1' nella rappresentazione binaria
    let count = 0;
    for (let i = 0; i < binaryRepresentation.length; i++) {
        if (binaryRepresentation[i] === '1') {
            count++;
        }
    }

    return count;
}

console.log(countBits(1234));

//   Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
export function findMissingLetter(array: string[]): string {
    const lowerCaseAlphabet: string[] = [];
    // const upperCaseAlphabet: string[] = [];

    let lowerCaseFirstLetter: number = 97;
    // let upperCaseFirstLetter: number = 65;

    for (let count = 0; count < 26; count++) {
        let c: string = String.fromCharCode(lowerCaseFirstLetter + count);
        lowerCaseAlphabet.push(c);
    }

    // alfabeto in uppercase

    // for (let count = 0; count < 26; count++) {
    //     let c: string = String.fromCharCode(upperCaseFirstLetter + count);
    //     upperCaseAlphabet.push(c);
    // }

    let firstChar : string = array[0];
    let firstCharUpperCase : string = firstChar.toUpperCase();
    let startIndex : number = lowerCaseAlphabet.indexOf(array[0].toLowerCase());
    let countLetter : number = 0;

    for (let i = startIndex; i < lowerCaseAlphabet.length; i++){
        if (array[countLetter].toLowerCase() != lowerCaseAlphabet[i]){
            if (array[0] === firstCharUpperCase){
                return lowerCaseAlphabet[i].toUpperCase();
            } else {
                return lowerCaseAlphabet[i];
            }
        } 
        countLetter++;
    }

    // if (firstChar === firstCharUpperCase){
    //     let arrayOfUpperCharachters: string[] = [];
    //     for (let i = 0; i <= upperCaseAlphabet.length; i++) {
    //         arrayOfUpperCharachters.push(upperCaseAlphabet[i]);
    //         if (!array.includes(arrayOfUpperCharachters[i])) {
    //             return arrayOfUpperCharachters[i];
    //         }
    //     }
    // } else {
    //     let arrayOfLowerCharachters: string[] = [];
    //     for (let i = 0; i <= lowerCaseAlphabet.length; i++) {
    //         arrayOfLowerCharachters.push(lowerCaseAlphabet[i]);
    //         if (!array.includes(arrayOfLowerCharachters[i])) {
    //             return arrayOfLowerCharachters[i];
    //         }
    //     }
    // }
    return "";
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

// Snack 149

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note
// If you are given an array with multiple answers, return the lowest correct index.

export function findEvenIndex(arr: number[]): number
{
  let arrayOfLeft : number[] = [];
  let arrayOfRight : number[] = [];

  for (let i = 0; i < arr.length; i++){
      
    let sumLeft : number = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
      let sumRight : number = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);


      if (sumLeft === sumRight){
          return i;
      }
    }

  console.log("This is array of left", arrayOfLeft);
  console.log("This is array of right" , arrayOfRight);
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));

// Snack 150

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

export function solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
  }

  console.log(solution("abc", "bc"));
  console.log(solution("abc", "d"));
  
// Snack 151

// Return the magnitude of a vector, given as an array of its component values.

// The vector (2, 3, 5) would be represented as an array containing three values at indices 0, 1 and 2 respectively.
// The array will always contain at least 2 and at most 100 elements (2 ≤ vector.Length ≤ 100), each of which will be within the range [-100, 100].
// An array containing four elements represents a vector in 4D space.

function magnitude(vector: number[]): number {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < -100 || vector[i] > 100) {
            throw new Error(`Il valore del componente ${i} è fuori dal range consentito.`);
        }
    }

    const sumOfSquares = vector.reduce((sum, value) => sum + value * value, 0);

    return Math.sqrt(sumOfSquares);
}

console.log(magnitude([2, 3, 5]))

// Snack 152 

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

export function countLettersAndDigits(input: string): number {
    let arrayOfGoods : string[] = [];
    for (let i = 0; i < input.length; i++){
        // Usiamo il test per utilizzare le regex altrimenti non funziona
        if (/[0-9]/.test(input[i]) || /[a-zA-Z]/.test(input[i])){
            arrayOfGoods.push(input[i]);
        } 
    }
    return arrayOfGoods.length;
  }
console.log(countLettersAndDigits("hel2!lo"));

// Snack 153

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(){
    const staff : Record<string, string> = {
        Alice: "accounts",
        Bob: "canteen",
        Charlie: "finance",
        Dave: "trading",
        Eve: "pissing about",
      };
      console.log(staff.values);
    
    const boredomScores: Record<string, number> = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
      };
    
      console.log("This is boredom keys", boredomScores.accounts);
    }

    boredom();
      
//       function getSentiment(staff: Record<string, string>): string {
      
//         const totalBoredomScore = Object.values(staff).reduce((total, department) => {
//           return total + (boredomScores[department] || 0); 
//         }, 0);
      
//         if (totalBoredomScore <= 80) {
//           return "mi uccideranno ora";
//         } else if (totalBoredomScore < 100) {
//           return "ce la posso fare";
//         } else {
//           return "festa!!";
//         }
//       }
//       getSentiment(staff)
//   }

// Snack 153

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers: number[]): number {
    
    let arrayOfEven = numbers.filter(num => num % 2 === 0);
    if (arrayOfEven.length === 0) {
        return 0;
      }
    let sumOfEven = arrayOfEven.reduce((a, b) => a + b, 0); 
    if (numbers.length === 0) {
        return 0;
      }
    let lastIndex = numbers[numbers.length - 1];
    return sumOfEven * lastIndex;
  }

  evenLast([1,2,3,4]);

//   Snack 154

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

export function litres(time: number): number {
    return Math.floor(time * 0.5);
  }

   console.log(litres(6.7));
   console.log(litres(11.8));

//    Snack 155

// John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

// Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

// Examples of John's phone book lines:

// "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

// " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

// Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

// Examples:
// s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
// It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

// or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"

// Notes
// Codewars stdout doesn't print part of a string when between < and >

// You can see other examples in the test cases.

// JavaScript random tests completed by @matt c.

function phone (strng: string):string {
    let arrOfString : string[] = strng.split("");
    let newCleanedArr : string[] = [];
    // let cleanStrng : string = "";
    // let cleanNum : string = "";
    for (let i = 0; i < arrOfString.length; i++){
        if (/^[a-zA-Z0-9\s\\]$/.test(arrOfString[i])){
            newCleanedArr.push(arrOfString[i]);
        };
    }
    console.log(newCleanedArr);
    return '...'
  }

  console.log(phone("/+1-541-754-3010 156 Alphand_St. \///<J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"));
