// Debugging Typescript application

// Example Fundamental Types

let myConst: number = 1;
myConst = 66;

console.log(myConst);

let myConst2: number = 1;
myConst2 = 2;

console.log(myConst2); 

let course: string = "TypeScript";
course = "2";

console.log(course);

// Example Built-In-Types

let sales = 12345;
let course2 = "TypeScript";
let isPublished = true;

console.log(sales, course2, isPublished);

// Example Any Type

function render(document: any) {
    console.log(document);
}

render(isPublished);

// Example Arrays

let numbers = [1, 2, 3];
let numbers2: number[] = [1, 2, 3];
numbers.forEach(n => n.toLocaleString("en-US"));

// Example Tuples

let user: [number, string] = [1, "jane"];
user[0].toString();
user[1].toUpperCase()

console.log(user[0], user[1]);

// Example Enums

// const small = 1;
// const medium = 2;
// const large = 3;

enum SizeNumber { Small = 1, Medium, Large };
enum SizeString { Small = "s", Medium = "m", Large = "l" };

let mySize: SizeNumber = SizeNumber.Small;
let MikeSize: SizeNumber = SizeNumber.Medium;
let GiorgioSize: SizeNumber = SizeNumber.Large;

console.log(mySize, MikeSize, GiorgioSize);

// Example Functions

function calculateTax(income: number):number {
    if (income < 50_000) {
        return income * 1.2;
    } else {
         return income * 1.3;
    }
}

calculateTax(200_000);

function calculateTaxYear(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTaxYear(100_000, 2021);

function calculateTaxMaybeYear(income: number, taxYear?: number): number {
    if (taxYear) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTaxMaybeYear(100_000);
calculateTaxMaybeYear(100_000, 2021);

