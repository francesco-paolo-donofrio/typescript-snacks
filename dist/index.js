"use strict";
let myConst = 1;
myConst = 66;
console.log(myConst);
let myConst2 = 1;
myConst2 = 2;
console.log(myConst2);
let course = "TypeScript";
course = "2";
console.log(course);
let sales = 12345;
let course2 = "TypeScript";
let isPublished = true;
console.log(sales, course2, isPublished);
function render(document) {
    console.log(document);
}
render(isPublished);
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
numbers.forEach(n => n.toLocaleString("en-US"));
let user = [1, "jane"];
user[0].toString();
user[1].toUpperCase();
console.log(user[0], user[1]);
//# sourceMappingURL=index.js.map