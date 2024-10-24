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
//# sourceMappingURL=index.js.map