"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = exports.likes = void 0;
exports.catMouse = catMouse;
exports.catDogMouse = catDogMouse;
exports.narcissistic = narcissistic;
exports.interlockable = interlockable;
exports.humanReadable = humanReadable;
exports.findMissingLetter = findMissingLetter;
exports.findEvenIndex = findEvenIndex;
exports.solution = solution;
exports.countLettersAndDigits = countLettersAndDigits;
exports.litres = litres;
exports.getSum = getSum;
exports.toCamelCase = toCamelCase;
exports.stringTransformer = stringTransformer;
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
function moltiplicationNumber(number) {
    if (number % 2 === 0) {
        return number * 8;
    }
    else {
        return number * 9;
    }
}
console.log(moltiplicationNumber);
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
console.log(position);
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
const numbArray = [2, 4, 2, 2];
let moltiplication = numbArray.reduce(moltiplicationInt);
function moltiplicationInt(total, value) {
    return total * value;
}
console.log(moltiplication);
function numberToText(num) {
    switch (num) {
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
    }
    if (num > 9 || num < 0) {
        return console.log("Please, insert a number between 0 and 9");
    }
}
numberToText(7);
numberToText(10);
numberToText(-12);
numberToText(3);
function ArrayDoubled(arr) {
    return arr.map(element => element * 2);
}
ArrayDoubled([1, 2, 3]);
ArrayDoubled([2, 4, 6]);
ArrayDoubled([10, 20, 30]);
function divisibleOrNot(num, x, y) {
    if (num % x === 0 && num % y === 0) {
        return true;
    }
    else {
        return false;
    }
}
divisibleOrNot(12, 2, 6);
divisibleOrNot(3, 1, 3);
divisibleOrNot(100, 5, 3);
divisibleOrNot(12, 7, 5);
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Man extends Human {
    constructor(name, age) {
        super(name, age);
        this.age = 33;
    }
}
class Woman extends Human {
    constructor(name, age) {
        super(name, age);
        this.age = 30;
    }
}
function create() {
    const adam = new Man("Adam", 33);
    const eve = new Woman("Eve", 30);
    return [adam, eve];
}
create();
function pinControl(code) {
    return (code.length === 4 || code.length === 6) && /^\d+$/.test(code);
}
pinControl("2312");
pinControl("93939");
pinControl("a92903");
function descendingNumbers(num) {
    return Number(num.toString().split("").map(Number).sort((a, b) => b - a).join(""));
}
descendingNumbers(123456);
descendingNumbers(283940);
function filteredList(array) {
    return array.filter((item) => typeof item === 'number');
}
let arrayBello = [2, "io", "5", 100, 20];
filteredList(arrayBello);
function lowestInt(arrayInt) {
    if (arrayInt.some(num => num < 0 || !Number.isInteger(num))) {
        console.log("L'array deve contenere solo numeri positivi.");
        return -1;
    }
    else {
        arrayInt.sort((a, b) => a - b);
        arrayInt.slice(0, 2);
    }
    return arrayInt[0] + arrayInt[1];
}
lowestInt([100, 90, 80, 1]);
lowestInt([-100, 90, 80, 1]);
function findNeedle(arrString) {
    let position = arrString.indexOf("Needle".toLowerCase());
    return "found the needle at position" + " " + position;
}
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
function reverseString(str) {
    return str.split(" ").map(word => word.split("")).reverse().join(" ");
}
console.log(reverseString("Quello che dice è vero"));
function pipeFix(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const fixedPipes = [];
    for (let i = min; i <= max; i++) {
        fixedPipes.push(i);
    }
    return fixedPipes;
}
console.log(pipeFix([1, 3, 5, 6, 7, 8]));
console.log(pipeFix([1, 4, 5, 7, 10]));
function maxProduct(numbers, k) {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers.slice(0, k).reduce((a, b) => a * b, 1);
}
console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([8, 10, 9, 7], 3));
function returnSum(arr) {
    let arrNumbers = arr.map((char) => Number(char));
    return arrNumbers.reduce(myFunction);
    function myFunction(total, value) {
        return total + value;
    }
}
returnSum([10, "10", 20, "20", "30"]);
returnSum([10, "10", 10, "40"]);
class Lamp {
    constructor(color) {
        this.color = color;
        this.on = false;
    }
    toggleSwitch() {
        this.on = !this.on;
    }
    state() {
        if (this.on) {
            return "The lamp is on.";
        }
        else {
            return "The lamp is off.";
        }
    }
}
console.log(Lamp);
function expressionsMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c), a + b * c, a * b + c);
}
expressionsMatter(1, 2, 3);
expressionsMatter(1, 1, 1);
expressionsMatter(9, 1, 1);
function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    }
    else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
    else {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }
    return [humanYears, catYears, dogYears];
}
humanYearsCatYearsDogYears(1);
humanYearsCatYearsDogYears(2);
humanYearsCatYearsDogYears(10);
console.log(2 + "2");
function toRoman(num) {
    if (num < 1 || num > 3999) {
        throw new Error("Input must be a positive integer between 1 and 3999");
    }
    const romanMap = [
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
function nthEven(n) {
    return (n - 1) * 2;
}
nthEven(1);
nthEven(3);
nthEven(100);
nthEven(1298734);
function replaceDots(str) {
    if (str === null) {
        throw new Error("str cannot be null");
    }
    else {
        return str.replace(/\./g, '-');
    }
}
replaceDots("one.two.three");
replaceDots("one.two.three.four");
replaceDots("one.two.three.four.five");
function reverseWord(str) {
    return str.split(" ").map(word => (word.length >= 5 ? word.split("").reverse().join("") : word)).join(" ");
}
reverseWord("Ciao sono Massimo Decimo");
function encryptThis(str) {
    return str
        .split(" ")
        .map(word => {
        if (word.length === 0)
            return "";
        const firstCharCode = word.charCodeAt(0).toString();
        if (word.length === 1)
            return firstCharCode;
        const secondChar = word.length > 1 ? word[1] : "";
        const lastChar = word.length > 2 ? word[word.length - 1] : "";
        const middle = word.slice(2, -1);
        return `${firstCharCode}${lastChar}${middle}${secondChar}`;
    })
        .join(" ");
}
console.log(encryptThis("Hello"));
console.log(encryptThis("good"));
encryptThis("hello world");
function sumDigits(num) {
    const absNumber = Math.abs(num);
    const sum = absNumber.toString().split("").map(Number).reduce((acc, digit) => acc + digit, 0);
    return sum;
}
sumDigits(99);
sumDigits(11);
sumDigits(9);
function smallEnough(arrNum, limitNumber) {
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > limitNumber) {
            return false;
        }
    }
    return true;
}
smallEnough([1, 5, 3, 76], 566);
smallEnough([1, 5, 3, 76], 56);
function minCostClimbingStairs(cost) {
    let prev1 = 0;
    let prev2 = 0;
    for (let i = 0; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev1 = prev2;
        prev2 = current;
    }
    return Math.min(prev1, prev2);
}
console.log(minCostClimbingStairs([0, 2, 2, 1]));
console.log(minCostClimbingStairs([0, 2, 3, 2]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([0, 0, 0, 0, 0, 0]));
console.log(minCostClimbingStairs([0, 1, 2, 0, 1, 2]));
function count(num) {
    function factorial(n) {
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
function converter(amount) {
    let valueCNY = 6.75;
    const result = (amount * valueCNY);
    return `${result.toFixed(2)} Chinese Yuan`;
}
converter(5);
function altCapitalization(str) {
    let evenCapitalized = "";
    let oddCapitalized = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCapitalized += str[i].toUpperCase();
            oddCapitalized += str[i].toLowerCase();
        }
        else {
            evenCapitalized += str[i].toLowerCase();
            oddCapitalized += str[i].toUpperCase();
        }
    }
    return [evenCapitalized, oddCapitalized];
}
altCapitalization("abcdefghi");
function findOutlier(arr) {
    const majorityEven = arr.slice(0, 3).filter(num => num % 2 === 0).length >= 2;
    return arr.find(num => (num % 2 === 0) !== majorityEven);
}
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
function dontGiveMeFive(start, end) {
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
function rowWeights(array) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            team1 += array[i];
        }
        else {
            team2 += array[i];
        }
    }
    return [team1, team2];
}
rowWeights([50, 60, 70, 80]);
rowWeights([100, 50]);
function sumsOfParts(ls) {
    let totalSum = ls.reduce((acc, num) => acc + num, 0);
    const result = [];
    for (let i = 0; i < ls.length; i++) {
        result.push(totalSum);
        totalSum -= ls[i];
    }
    result.push(0);
    return result;
}
sumsOfParts([0, 1, 3, 6, 10]);
function findNextSquare(num) {
    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
        const nextSquare = Math.pow(sqrt + 1, 2);
        return nextSquare;
    }
    return -1;
}
findNextSquare(121);
findNextSquare(45);
function cleanString(str) {
    const stack = [];
    for (const char of str) {
        if (char === "#") {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    return stack.join("");
}
cleanString("abc#d##c");
cleanString("abc##d######");
cleanString("#######");
cleanString("");
function bumpsInTheRoad(str) {
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
function validBraces(str) {
    const stack = [];
    const matchingBraces = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (const char of str) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        }
        else {
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
function sumFirstSeries(num) {
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
function numberOfPeopleOnBus(busStops) {
    return busStops.reduce((peopleOnBus, [on, off]) => {
        return peopleOnBus + on - off;
    }, 0);
}
numberOfPeopleOnBus([[10, 0], [3, 5], [5, 8]]);
numberOfPeopleOnBus([]);
function sortingList(strArr) {
    const sortedArray = strArr.sort();
    const firstValue = sortedArray[0];
    return firstValue.split("").join("***");
}
sortingList(["abracadabra", "ciccioMerolla", "patrick", "antonio"]);
const arr = [10, 20, 30];
arr[100] = 50;
console.log(arr.length);
function volumeOfCuboids(firstArr, secondArr) {
    const volumeA = firstArr.reduce((acc, curr) => acc * curr, 1);
    const volumeB = secondArr.reduce((acc, curr) => acc * curr, 1);
    return Math.abs(volumeA - volumeB);
}
volumeOfCuboids([2, 2, 3], [5, 4, 1]);
volumeOfCuboids([5, 4, 1], [2, 2, 3]);
function returnId(arr) {
    return arr.sort(function (a, b) { return a - b; })[0];
}
returnId([23, 1, 56, 333]);
returnId([22, 55, 23, 66]);
function bartenderDrinks(str) {
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
function concatenateString(arr) {
    if (arr.length === 0)
        return "";
    return arr[0] + arr.slice(1).join("");
}
concatenateString(["ciao", "bello", "come", "stai"]);
concatenateString(["hola", "amigos", "como", "estas"]);
function reverseAeB(str) {
    return str.split("").map((char) => {
        if (char === "a")
            return "b";
        if (char === "b")
            return "a";
        return char;
    }).join("");
}
reverseAeB("aab");
reverseAeB("bba");
reverseAeB("aaabbb");
function reverseArray(num) {
    if (num === 0) {
        const zero = [0];
        return zero;
    }
    return num.toString().split("").reverse().map(Number);
}
reverseArray(35231);
reverseArray(987654321);
reverseArray(0);
function leo(oscar) {
    if (oscar === 88) {
        return "Leo finally won the oscar! Leo is happy";
    }
    else if (oscar === 86) {
        return "Not even for Wolf of Wallstreet?";
    }
    else if (oscar < 88) {
        return "When will you give Leo an Oscar?";
    }
    else {
        return "Leo got one already";
    }
}
leo(80);
leo(1);
leo(88);
function joinArray(arr) {
    return arr.join(",");
}
joinArray(["h", "o", "l", "a"]);
function actionMango(quantity, price) {
    const paidMangoes = Math.floor(quantity / 3) * 2 + (quantity % 3);
    return paidMangoes * price;
}
actionMango(3, 2);
actionMango(2, 2);
actionMango(6, 2);
function returnWithFilter(list) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const returnedArray = list.filter(item => !geese.includes(item));
    return returnedArray;
}
returnWithFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
function checkSameCase(firstCase, secondCase) {
    if (!/^[a-zA-Z]$/.test(firstCase) || !/^[a-zA-Z]$/.test(secondCase)) {
        return -1;
    }
    if ((firstCase === firstCase.toUpperCase() && secondCase === secondCase.toUpperCase()) ||
        (firstCase === firstCase.toLowerCase() && secondCase === secondCase.toLowerCase())) {
        return 1;
    }
    return 0;
}
checkSameCase("a", "g");
checkSameCase("b", "G");
checkSameCase("0", "?");
function pluralIsServed(num) {
    if (num < 0) {
        console.error("A positive number as input is required");
    }
    else if (num === 1) {
        return false;
    }
    return true;
}
pluralIsServed(0);
pluralIsServed(1);
pluralIsServed(99);
function all(sequence, method) {
    return sequence.every(method);
}
const greaterThan9 = (n) => n > 9;
const lessThan9 = (n) => n < 9;
all([1, 2, 3, 4, 5], greaterThan9);
all([1, 2, 3, 4, 5], lessThan9);
console.log(2 ** 3);
function greetings(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    }
    return `Hello, ${name}!`;
}
greetings("Johnny");
greetings("Mario");
const imperialGallon = 4.54609188;
const oneMile = 1.609344;
function kmPerLiter(mpg) {
    return parseFloat((mpg * oneMile / imperialGallon).toFixed(2));
}
kmPerLiter(20);
kmPerLiter(10);
function sixToast(toasts) {
    const maxToast = 6;
    if (toasts > maxToast) {
        return `You have to take ${toasts - maxToast} toast less`;
    }
    else if (toasts < maxToast) {
        return `You have to take ${Math.abs(toasts - maxToast)} more toast`;
    }
    else {
        return `You have 6 toasts inside`;
    }
}
sixToast(12);
sixToast(5);
sixToast(6);
sixToast(1);
function replaceDot(str) {
    return str.split("").map((char) => char === "." ? char.replace(".", "-") : char).join("");
}
replaceDot("Ciao.Sono.Mario");
function isDigit(str) {
    return !isNaN(parseInt(str));
}
isDigit("1");
isDigit("a");
function helloName(name) {
    if (name === "" || name === null) {
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}
helloName("Mario");
helloName("");
function whiskeyDiscount(normPrice, discount, holidayCost) {
    const discountPerItem = (normPrice * discount) / 100;
    const bottlesToBuy = holidayCost / discountPerItem;
    return Math.round(bottlesToBuy);
}
whiskeyDiscount(10, 10, 500);
whiskeyDiscount(12, 50, 1000);
sumTheDifferences([2, 1, 10]);
function sumTheDifferences(arr) {
    if (arr.length <= 1)
        return 0;
    const sortedArr = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < sortedArr.length - 1; i++) {
        sum += sortedArr[i] - sortedArr[i + 1];
    }
    return sum;
}
console.log(sumTheDifferences([2, 1, 10]));
function finalGrade(grade, completedProjects) {
    if (grade > 90 || completedProjects > 10)
        return 100;
    else if (grade > 75 && completedProjects > 5)
        return 90;
    else if (grade > 50 && completedProjects > 2)
        return 75;
    return 0;
}
finalGrade(100, 12);
finalGrade(99, 0);
finalGrade(85, 5);
finalGrade(55, 0);
finalGrade(20, 2);
function animals(heads, legs) {
    if (heads < 0 || legs < 0 || legs % 2 !== 0) {
        return "No solutions";
    }
    const chickens = (4 * heads - legs) / 2;
    const cows = heads - chickens;
    if (chickens < 0 || cows < 0 || !Number.isInteger(chickens) || !Number.isInteger(cows)) {
        return "No solutions";
    }
    return [chickens, cows];
}
console.log(animals(72, 200));
console.log(animals(72, 201));
console.log(animals(0, 0));
console.log(animals(-1, 100));
console.log(animals(100, 400));
function realFloor(americanFloor) {
    if (americanFloor === 1) {
        return 0;
    }
    else if (americanFloor <= 13 && americanFloor > 0) {
        return americanFloor - 1;
    }
    else if (americanFloor > 13) {
        return americanFloor - 2;
    }
    return americanFloor;
}
realFloor(1);
realFloor(0);
realFloor(5);
realFloor(15);
realFloor(-3);
function setAlarm(employed, vacation) {
    if (employed && vacation)
        return false;
    else if (employed === true && vacation === false)
        return true;
    else if (employed === false && vacation === true)
        return false;
    return false;
}
setAlarm(true, false);
setAlarm(false, false);
setAlarm(true, true);
setAlarm(false, true);
function xYearsOld(str) {
    return parseInt(str[0], 10);
}
xYearsOld("1 years old");
xYearsOld("5 years old");
function betweenInt(first, second) {
    const result = [];
    for (let i = first; i <= second; i++) {
        result.push(i);
    }
    return result;
}
betweenInt(1, 4);
betweenInt(3, 15);
function blankPages(n, m) {
    if (n < 0 || m < 0)
        return 0;
    return n * m;
}
blankPages(-5, 5);
blankPages(5, 5);
function beastFeast(name, dish) {
    if (name.length < 2 && dish.length < 2)
        return false;
    return (name[0].toLowerCase() === dish[0].toLowerCase() &&
        name[name.length - 1].toLowerCase() === dish[dish.length - 1].toLowerCase());
}
beastFeast("elefante", "torta");
beastFeast("chickadee", "chocolate cake");
function hydratedDream(hour) {
    return Math.floor(hour * 0.5);
}
hydratedDream(3);
hydratedDream(6.7);
hydratedDream(11.8);
function fakeBinary(str) {
    return str.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}
fakeBinary("1234");
function spotDiff(str1, str2) {
    let result = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            result.push(i);
        }
    }
    return result;
}
spotDiff("abcdefg", "abcqetg");
function cubeChecker(volume, side) {
    return volume > 0 && side > 0 && volume === side ** 3;
}
cubeChecker(27, 3);
cubeChecker(125, 3);
function twoSort(s) {
    return s.sort()[0].replace(/./g, "*");
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
mouthSize("alligator");
function sxor(n) {
    return [...Array(n).keys()].reduce((a, b) => a ^ b);
}
sxor(5);
function height(n) {
    const firstCatHeight = 2000000;
    const ratio = 0.4;
    let totalHeight = 0;
    for (let i = 0; i < n; i++) {
        totalHeight += firstCatHeight * Math.pow(ratio, i);
    }
    return parseFloat(totalHeight.toFixed(3));
}
console.log(height(26));
function smallestID(arr) {
    const idSet = new Set(arr);
    let smallest = 0;
    while (idSet.has(smallest)) {
        smallest++;
    }
    return smallest;
}
const usedIDs = [3, 5, 1, 0, 2, 5, 3];
smallestID(usedIDs);
function score(n) {
    let result = 1;
    while (result <= n) {
        result <<= 1;
    }
    return result - 1;
}
score(5);
score(2);
function tidyNumber(num) {
    let arrOfNumbers = num.toString().split("");
    for (let i = 0; i <= arrOfNumbers.length - 1; i++) {
        if (arrOfNumbers[i] > arrOfNumbers[i + 1]) {
            return false;
        }
        ;
    }
    return true;
}
console.log(tidyNumber(127));
console.log(tidyNumber(32));
console.log(tidyNumber(1024));
console.log(tidyNumber(13579));
console.log(tidyNumber(2335));
function transposeTwoStrings(arr) {
    const maxLength = Math.max(arr[0].length, arr[1].length);
    let result = [];
    for (let i = 0; i < maxLength; i++) {
        const leftChar = arr[0][i] || " ";
        const rightChar = arr[1][i] || " ";
        result.push(`${leftChar} ${rightChar}`);
    }
    return result.join("\n");
}
console.log(transposeTwoStrings(["Hello", "World"]));
console.log(transposeTwoStrings(["Hi", "There"]));
console.log(transposeTwoStrings(["Short", "LongerWord"]));
function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
}
twoOldestAges([1, 5, 87, 45, 8, 8]);
twoOldestAges([1, 3, 10, 0]);
function triangularNumber(n) {
    if (n <= 0)
        return 0;
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
function removeSpaces(input) {
    return input.split(" ").join("");
}
removeSpaces("  sss aa s fllf sl s s la  ");
function replaceWithGravel(input) {
    return input
        .split(" ")
        .map(element => element === "gravel" || element === "rock" ? "element" : "gravel")
        .join(" ");
}
replaceWithGravel("gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel");
function meanAndConcatenate(arr) {
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
function itIsString(str) {
    return str === str.toUpperCase();
}
itIsString("c");
itIsString("HELLO I AM DONALD");
itIsString("heLLO I AM DONALD");
function collision(x1, y1, radius1, x2, y2, radius2) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance <= (radius1 + radius2);
}
collision(2, 2, 5, 1, 1, 5);
collision(2, 2, 2, 1, 1, 2);
function calculate(num1, str, num2) {
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
function getNames(data) {
    const names = [];
    for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
    }
    return names;
}
getNames([
    { name: 'Bibbo', age: 21 },
    { name: 'Kate', age: 23 }
]);
function returnFullNames(humans) {
    return humans
        .map(human => `The complete name is ${human.firstName} ${human.lastName}`.trim())
        .join('\n');
}
console.log(returnFullNames([
    { firstName: 'Jorgie', lastName: '' },
    { firstName: 'Max', lastName: 'Vinic' },
    { firstName: 'Jorgie', lastName: 'Asd' }
]));
function containAllRots(strng, arr) {
    if (strng === "")
        return true;
    const rotations = Array.from({ length: strng.length }, (_, i) => strng.slice(i) + strng.slice(0, i));
    return rotations.every(rot => arr.includes(rot));
}
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
console.log(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]));
function squaredString(s1, s2) {
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
function getRidOfZero(number) {
    let streuza = number.toString();
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
    }
    else {
        let i = streuza.length - 1;
        while (streuza[i] === '0') {
            streuza = streuza.slice(0, i);
            i--;
        }
        return parseInt(streuza);
    }
}
console.log(getRidOfZero(2));
function returnCentury(numb) {
    let arrOfNumb = numb.toString().split("");
    while (arrOfNumb[1] === arrOfNumb[1]) {
        return parseInt(arrOfNumb.slice(0, 2).join("")) + 1;
    }
    return 0;
}
console.log(returnCentury(1705));
console.log(returnCentury(0));
console.log(returnCentury(1900));
function fibonacci(number) {
    let firstNumber = 0;
    let secondNumber = 1;
    let result = [firstNumber, secondNumber];
    if (number <= 0)
        return [];
    if (number === 1)
        return [firstNumber];
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
function sumFunction(total, value) {
    return total + value;
}
;
let firstAsciiSum = 0;
let secondAsciiSum = 0;
function comparingASCII(string1, string2) {
    if (string1 === "null" || string1 === "" || /\d/.test(string1)) {
        firstAsciiSum = 0;
    }
    if (string2 === "null" || string2 === "" || /\d/.test(string2)) {
        secondAsciiSum = 0;
    }
    let firstStringArr = string1.split("").map(char => (Number(char.charCodeAt(0))));
    firstAsciiSum = firstStringArr.reduce(sumFunction, 0);
    console.log(firstAsciiSum);
    let secondStringArr = string2.split("").map(char => (Number(char.charCodeAt(0))));
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
function isAnIsogram(str) {
    str = str.toLowerCase();
    const seen = new Set();
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
function calculateGpsDistance(seconds, distance) {
    let drivenDistance = [];
    const constant = 3600;
    let firstResult = [];
    for (let i = 0; i < distance.length - 1; i++) {
        drivenDistance.push(distance[i + 1] - distance[i]);
    }
    function calculateDeltaDistance(constant, drivenDistance) {
        for (let i = 0; i <= drivenDistance.length - 1; i++) {
            firstResult.push(constant * drivenDistance[i] / seconds);
        }
        return firstResult;
    }
    calculateDeltaDistance(constant, drivenDistance);
    let floorResult = firstResult.map(el => el <= 1 ? 0 : Math.floor(el));
    let maxInteger = Math.max(...floorResult);
    console.log(maxInteger);
    return maxInteger;
}
console.log(calculateGpsDistance(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
function multiplesOf3(number) {
    let arrNumbers = [];
    let somma = 0;
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
function catMouse(x) {
    let dotArray = [];
    let stringArray = x.split("");
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
function catDogMouse(x, j) {
    let arrayOfChar = x.split("");
    let mouseInFront = arrayOfChar.indexOf("C") < arrayOfChar.indexOf("m");
    let dotArray2 = [];
    let distance = 0;
    if (!arrayOfChar.includes("D") && !arrayOfChar.includes("C") && !arrayOfChar.includes("m")) {
        return "boring without all three";
    }
    if (mouseInFront) {
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
            let charC = arrayOfChar[i];
            if (arrayOfChar.indexOf("C"))
                if (dotArray2.length > j) {
                    break;
                }
            if (charC === ".") {
                dotArray2.push(charC);
                console.log(dotArray2.length);
            }
            if (charC === "m") {
                return "Caught!";
            }
            if (charC === "D") {
                return "Protected!";
            }
        }
    }
    else {
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
            let charC = arrayOfChar[i];
            if (dotArray2.length > j) {
                break;
            }
            if (charC === "." && dotArray2.length < j) {
                dotArray2.push(charC);
            }
            if (charC === "m") {
                return "Caught!";
            }
            if (charC === "D") {
                return "Protected!";
            }
        }
    }
    return "Escaped!";
}
console.log(catDogMouse(".......m.....D................C...", 20));
console.log(reverseWord("Hey fellow warriors"));
function sortArray(array) {
    let arrayOfOdd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arrayOfOdd.push(array[i]);
        }
    }
    arrayOfOdd.sort(function (b, a) { return a - b; });
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array[i] = arrayOfOdd.pop();
        }
    }
    return array;
}
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
const likes = (a) => {
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
};
exports.likes = likes;
function narcissistic(value) {
    let arrayOfValue = value.toString().split("");
    let valueLength = arrayOfValue.length;
    let arrayOfResult = [];
    for (let i = 0; i < arrayOfValue.length; i++) {
        let number = parseInt(arrayOfValue[i]);
        arrayOfResult.push(Math.pow(number, valueLength));
    }
    console.log(arrayOfResult);
    if (arrayOfResult.reduce(myFunction) === value) {
        console.log(arrayOfResult.reduce(myFunction));
        return true;
    }
    function myFunction(total, value) {
        return total + value;
    }
    return false;
}
console.log(narcissistic(153));
console.log(narcissistic(1652));
function interlockable(a, b) {
    return (a & b) === 0;
}
console.log(interlockable(3, 6));
function order(words) {
    if (words !== "") {
        let arrayOfWords = words.split(" ");
        let arrayOfNumbers = [];
        for (let i = 0; i < arrayOfWords.length; i++) {
            for (let j = 0; j < arrayOfWords[i].length; j++) {
                if (arrayOfWords[i][j] >= "1" && arrayOfWords[i][j] <= "9") {
                    arrayOfNumbers.push(parseInt(arrayOfWords[i][j]));
                }
            }
        }
        let arrayOfResult = [];
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
function humanReadable(seconds) {
    let arrayOfHours = [];
    let arrayOfMinutes = [];
    let arrayOfSeconds = [];
    let minutes = 0;
    let hours = 0;
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
function countBits(n) {
    const binaryRepresentation = n.toString(2);
    console.log(binaryRepresentation);
    let count = 0;
    for (let i = 0; i < binaryRepresentation.length; i++) {
        if (binaryRepresentation[i] === '1') {
            count++;
        }
    }
    return count;
}
console.log(countBits(1234));
function findMissingLetter(array) {
    const lowerCaseAlphabet = [];
    let lowerCaseFirstLetter = 97;
    for (let count = 0; count < 26; count++) {
        let c = String.fromCharCode(lowerCaseFirstLetter + count);
        lowerCaseAlphabet.push(c);
    }
    let firstChar = array[0];
    let firstCharUpperCase = firstChar.toUpperCase();
    let startIndex = lowerCaseAlphabet.indexOf(array[0].toLowerCase());
    let countLetter = 0;
    for (let i = startIndex; i < lowerCaseAlphabet.length; i++) {
        if (array[countLetter].toLowerCase() != lowerCaseAlphabet[i]) {
            if (array[0] === firstCharUpperCase) {
                return lowerCaseAlphabet[i].toUpperCase();
            }
            else {
                return lowerCaseAlphabet[i];
            }
        }
        countLetter++;
    }
    return "";
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
function findEvenIndex(arr) {
    let arrayOfLeft = [];
    let arrayOfRight = [];
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        let sumRight = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
        if (sumLeft === sumRight) {
            return i;
        }
    }
    console.log("This is array of left", arrayOfLeft);
    console.log("This is array of right", arrayOfRight);
    return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
function magnitude(vector) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < -100 || vector[i] > 100) {
            throw new Error(`Il valore del componente ${i} è fuori dal range consentito.`);
        }
    }
    const sumOfSquares = vector.reduce((sum, value) => sum + value * value, 0);
    return Math.sqrt(sumOfSquares);
}
console.log(magnitude([2, 3, 5]));
function countLettersAndDigits(input) {
    let arrayOfGoods = [];
    for (let i = 0; i < input.length; i++) {
        if (/[0-9]/.test(input[i]) || /[a-zA-Z]/.test(input[i])) {
            arrayOfGoods.push(input[i]);
        }
    }
    return arrayOfGoods.length;
}
console.log(countLettersAndDigits("hel2!lo"));
function boredom() {
    const staff = {
        Alice: "accounts",
        Bob: "canteen",
        Charlie: "finance",
        Dave: "trading",
        Eve: "pissing about",
    };
    console.log(staff.values);
    const boredomScores = {
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
function evenLast(numbers) {
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
evenLast([1, 2, 3, 4]);
function litres(time) {
    return Math.floor(time * 0.5);
}
console.log(litres(6.7));
console.log(litres(11.8));
function phone(strng, num) {
    let lines = strng.split("\n");
    let matches = [];
    for (let line of lines) {
        let phoneMatch = line.match(/(\+?\d{1,2}-\d{1,3}-\d{1,3}-\d{1,4})/);
        if (phoneMatch && phoneMatch[0].includes(num)) {
            let nameMatch = line.match(/<([^<>]+)>/);
            let addressMatch = line.replace(/<[^<>]+>/, '').replace(phoneMatch[0], '').trim();
            if (nameMatch) {
                matches.push({
                    phone: phoneMatch[0].replace('+', ''),
                    name: nameMatch[1],
                    address: addressMatch
                });
            }
        }
    }
    if (matches.length > 1) {
        return `Error => Too many people: ${num}`;
    }
    if (matches.length === 0) {
        return `Error => Not found: ${num}`;
    }
    let match = matches[0];
    let addressString = match.address.replace(/[^a-zA-Z0-9\s,.-]/g, '').trim();
    addressString = addressString.replace(/_/g, ' ');
    addressString = addressString.replace(/\s+/g, ' ').trim();
    return `Phone => ${match.phone}, Name => ${match.name}, Address => ${addressString}`;
}
console.log(phone("/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n", "+12-541-754-3010"));
function getSum(a, b) {
    let arrOfIntegers = [];
    if (a === b) {
        return a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arrOfIntegers.push(i);
        }
    }
    if (a > b) {
        for (let i = b; i <= a; i++) {
            arrOfIntegers.push(i);
        }
    }
    let result = arrOfIntegers.reduce((a, b) => a + b);
    console.log(result);
    return result;
}
getSum(1, 4);
function toCamelCase(str) {
    if (!str)
        return str;
    let arrOfString = str.split(/[-_]/);
    for (let i = 1; i < arrOfString.length; i++) {
        arrOfString[i] = arrOfString[i].charAt(0).toUpperCase() + arrOfString[i].slice(1).toLowerCase();
    }
    return arrOfString.join("");
}
console.log(toCamelCase("the-stealth-warrior"));
function finddOutlier(integers) {
    let evenNumber = [];
    let oddNumber = [];
    if (integers.length < 3) {
        return "The array's length must be bigger or equal than 3";
    }
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenNumber.push(integers[i]);
        }
        else {
            oddNumber.push(integers[i]);
        }
    }
    if (evenNumber.length > oddNumber.length) {
        return oddNumber[0];
    }
    else {
        return evenNumber[0];
    }
}
finddOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
function stringTransformer(str) {
    let wordsWithSpaces = str.split(" ");
    let arrOfStringReversed = wordsWithSpaces ? wordsWithSpaces.reverse() : null;
    if (arrOfStringReversed) {
        for (let i = 0; i < arrOfStringReversed.length; i++) {
            arrOfStringReversed[i] = arrOfStringReversed[i]
                .split('')
                .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                .join('');
        }
        console.log(arrOfStringReversed.join(' '));
        return arrOfStringReversed.join(' ');
    }
    return null;
}
stringTransformer("Example Input");
function isIsogram(str) {
    let existentLetters = [];
    let arrOfString = str.toLowerCase().split("");
    if (str === "") {
        return true;
    }
    for (let i = 0; i < arrOfString.length; i++) {
        if (existentLetters.includes(arrOfString[i])) {
            return false;
        }
        else {
            existentLetters.push(arrOfString[i]);
        }
    }
    return true;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
const pigIt = (a) => {
    let arrayOfA = a.split(" ");
    const regex = /[^a-zA-Z0-9\s]/g;
    console.log(arrayOfA);
    let wordsInverted = [];
    for (let i = 0; i < arrayOfA.length; i++) {
        if (!arrayOfA[i].match(regex)) {
            wordsInverted.push(arrayOfA[i].slice(1, arrayOfA[i].length));
            wordsInverted.push(arrayOfA[i][0] + "ay" + " ");
        }
        else {
            wordsInverted.push(arrayOfA[i]);
        }
    }
    console.log(wordsInverted.join(""));
    return wordsInverted.join("").trim();
};
exports.pigIt = pigIt;
(0, exports.pigIt)('Pig latin is cool');
(0, exports.pigIt)('Hello world !');
function scrollingText(text) {
    const result = [];
    const upperText = text.toUpperCase();
    for (let i = 0; i < upperText.length; i++) {
        const rotated = upperText.slice(i) + upperText.slice(0, i);
        result.push(rotated);
    }
    console.log(result);
    return result;
}
scrollingText("CODEWARS");
function isPangram(string) {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const uniqueChars = [...new Set(string.split(""))];
    console.log(uniqueChars);
    if (uniqueChars.length >= alphabet.length) {
        return true;
    }
    return false;
}
console.log(isPangram("abcdefghijklmopqrstuvwxyz"));
function removeSmallest(numbers) {
    function myArrayMin(numbers) {
        return numbers.indexOf(Math.min(...numbers));
    }
    const newArray = [...numbers];
    newArray.splice(myArrayMin(newArray), 1);
    console.log("This is ", myArrayMin(numbers));
    console.log("This is New array", newArray);
    return newArray;
}
console.log(removeSmallest([5, 3, 2, 1, 4]));
//# sourceMappingURL=index.js.map