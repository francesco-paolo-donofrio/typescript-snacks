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
//# sourceMappingURL=index.js.map