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
    if (name.charAt(0).toLowerCase() === "r"){
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

function moltiplicationNumber(number : number) : number{
    if (number % 2 === 0){
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
    } else if (upperCount < lowerCount){
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

function splitWord(input : string): string[]{
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

function repeatString(string : string): string{
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

function ageForDrink(num : number): string|undefined{
    if (num <= 14){
        return `${num} drink toddy`
    } else if (num < 18){
        return `${num} drink coke`
    } else if (num < 21){
        return `${num} drink beer`
    } else if(num >= 21){
         return `${num} drink whisky`
    }
    return undefined;
}

ageForDrink(13);
ageForDrink(17);
ageForDrink(18);
ageForDrink(20);
ageForDrink(30);

