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
    console.log(nameParts);
    const initials = nameParts[0][0].toUpperCase() + '.' + nameParts[1][0].toUpperCase();
    console.log(initials);
    return initials;
}
console.log(convertName("john doe"));
//# sourceMappingURL=index.js.map