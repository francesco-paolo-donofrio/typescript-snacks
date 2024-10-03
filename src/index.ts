// Snack 1
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function isEvenOrOdd (number : number) : string {
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

function makeNegative(number : number) : number {
    if (number < 0) {
        return number;
    } else if (number > 0){
        return -number
    } else {
        return 0;
    }
}

makeNegative(1);
makeNegative(-5);
makeNegative(0);
