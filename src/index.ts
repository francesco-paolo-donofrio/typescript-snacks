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

// Snack 3

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function makeMoney(salary : number, bonus : boolean) {
    if (bonus === true){
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
    console.log(nameParts);
    const initials = nameParts[0][0].toUpperCase() + '.' + nameParts[1][0].toUpperCase() + '.';
    console.log(initials);
    return initials;
}

console.log(convertName("john doe")); 

