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