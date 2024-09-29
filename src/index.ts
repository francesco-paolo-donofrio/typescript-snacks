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
numbers.forEach(n => n.toLocaleString());


