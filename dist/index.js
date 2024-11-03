"use strict";
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
;
isEvenOrOdd(2);
isEvenOrOdd(3);
function makeNegative(number) {
    if (number < 0) {
        return number;
    }
    else if (number > 0) {
        return -number;
    }
    else {
        return 0;
    }
}
makeNegative(1);
makeNegative(-5);
makeNegative(0);
function makeMoney(salary, bonus) {
    if (bonus === true) {
        return salary * 10 + "$";
    }
    else {
        return salary + "$";
    }
}
makeMoney(2000, true);
makeMoney(5000, false);
function convertName(name) {
    const nameParts = name.split(' ');
    const initials = nameParts[0][0].toUpperCase() + '.' + nameParts[1][0].toUpperCase() + '.';
    return initials;
}
console.log(convertName("john doe"));
function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
countSheep(3);
countSheep(1);
countSheep(7);
function calcType(a, b, result) {
    if (a + b === result) {
        return "addition";
    }
    else if (a - b === result) {
        return "subtraction";
    }
    else if (a * b === result) {
        return "moltiplication";
    }
    else if (a / b === result) {
        return "division";
    }
    else {
        return "unknown operation";
    }
}
calcType(2, 3, 5);
calcType(6, 1, 5);
calcType(10, 10, 100);
calcType(100, 5, 20);
function highAndLow(numbers) {
    const numArray = numbers.split(" ").map(Number);
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    return `${max} ${min}`;
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
function returnEven(myArray) {
    return myArray.filter(num => num % 2 === 0);
}
returnEven([1, 3, 4, 2, 5, 6]);
function divisorNumber(num) {
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
function vaporwaveSentence(str) {
    const chars = str.replace(/\s+/g, '').toUpperCase().split('');
    return chars.join('  ');
}
const phrase = "vamonos a bailar";
vaporwaveSentence(phrase);
function getChar(c) {
    return String.fromCharCode(c);
}
getChar(30);
getChar(94);
getChar(48);
function valuesOfStrings(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        let str = list[i];
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            let char = str[j];
            if (char !== ' ') {
                let charValue = char.charCodeAt(0) - 96;
                sum += charValue;
            }
        }
        let finalValue = sum * (i + 1);
        result.push(finalValue);
    }
    return result;
}
valuesOfStrings(["abc", "abc abc"]);
valuesOfStrings(["abc", "abc abc", "abc abc abc"]);
function reverseSeq(n) {
    let result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
}
reverseSeq(5);
reverseSeq(3);
reverseSeq(1);
function removeVowels(input) {
    return input.replace(/[aeiouAEIOU]/g, '');
}
;
const myString = "This website is for losers LOL!";
removeVowels("This website is for losers LOL!");
function playingBanjo(name) {
    if (name.charAt(0).toLowerCase() === "r") {
        return `${name} plays banjo`;
    }
    else {
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
function moltiplicationNumber(number) {
    if (number % 2 === 0) {
        return number * 8;
    }
    else {
        return number * 9;
    }
}
function fixTheMeerkat(arr) {
    return arr.reverse();
}
console.log(fixTheMeerkat([1, 2, 3]));
console.log(fixTheMeerkat(["Meerkat", "Meerkat", "Meerkat"]));
function solve(str) {
    let upperCount = 0;
    let lowerCount = 0;
    for (const char of str) {
        if (char === char.toUpperCase()) {
            upperCount++;
        }
        else {
            lowerCount++;
        }
    }
    if (upperCount > lowerCount) {
        return str.toUpperCase();
    }
    else if (upperCount < lowerCount) {
        return str.toLowerCase();
    }
    else {
        return str.toLowerCase();
    }
}
const myString1 = "CiAO A TUTTI io SONO fRA";
const myString2 = "ciao a tiuti IO sono il tuo amico";
const myString3 = "ciaoo CIAO";
solve(myString1);
solve(myString2);
solve(myString3);
function splitWord(input) {
    const splittedString = input.split(" ");
    console.log(splittedString);
    return splittedString;
}
splitWord("I love america and cheese burgers");
function repeatString(string) {
    let result = "";
    for (const char of string) {
        result += char + char;
    }
    console.log(result);
    return result;
}
repeatString("Ciao Bello");
function position(letter) {
    if (/[a-z]/.test(letter)) {
        const result = letter.charCodeAt(0) - 96;
        return result;
    }
    else {
        return "Please insert a valid lowercase letter";
    }
}
function ageForDrink(num) {
    if (num <= 14) {
        return `${num} drink toddy`;
    }
    else if (num < 18) {
        return `${num} drink coke`;
    }
    else if (num < 21) {
        return `${num} drink beer`;
    }
    else if (num >= 21) {
        return `${num} drink whisky`;
    }
    return undefined;
}
ageForDrink(13);
ageForDrink(17);
ageForDrink(18);
ageForDrink(20);
ageForDrink(30);
function unluckyDays(year) {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            count++;
        }
    }
    return count;
}
unluckyDays(2015);
unluckyDays(1986);
unluckyDays(2024);
function multipleOf(number) {
    let count = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    }
    return count;
}
multipleOf(10);
23;
multipleOf(15);
45;
multipleOf(20);
78;
function createPhoneNumber(numbers) {
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
function takeBullets(bullets, dragons) {
    return bullets >= dragons * 2;
}
takeBullets(1, 1);
takeBullets(2, 1);
takeBullets(4, 2);
function repeatitionString(n, s) {
    return s.repeat(n);
}
;
repeatitionString(5, "Ciao");
//# sourceMappingURL=index.js.map