// Debugging Typescript application
// Example Fundamental Types
var myConst = 1;
myConst = 66;
console.log(myConst);
var myConst2 = 1;
myConst2 = 2;
console.log(myConst2);
var course = "TypeScript";
course = "2";
console.log(course);
// Example Built-In-Types
var sales = 12345;
var course2 = "TypeScript";
var isPublished = true;
console.log(sales, course2, isPublished);
// Example Any Type
function render(document) {
    console.log(document);
}
render(isPublished);
// Example Arrays
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
numbers.forEach(function (n) { return n.toLocaleString("en-US"); });
// Example Tuples
var user = [1, "jane"];
user[0].toString();
user[1].toUpperCase();
console.log(user[0], user[1]);
// Example Enums
// const small = 1;
// const medium = 2;
// const large = 3;
var SizeNumber;
(function (SizeNumber) {
    SizeNumber[SizeNumber["Small"] = 1] = "Small";
    SizeNumber[SizeNumber["Medium"] = 2] = "Medium";
    SizeNumber[SizeNumber["Large"] = 3] = "Large";
})(SizeNumber || (SizeNumber = {}));
;
var SizeString;
(function (SizeString) {
    SizeString["Small"] = "s";
    SizeString["Medium"] = "m";
    SizeString["Large"] = "l";
})(SizeString || (SizeString = {}));
;
var mySize = SizeNumber.Small;
var MikeSize = SizeNumber.Medium;
var GiorgioSize = SizeNumber.Large;
console.log(mySize, MikeSize, GiorgioSize);
// Example Functions
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTax(200000);
function calculateTaxYear(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTaxYear(100000, 2021);
function calculateTaxMaybeYear(income, taxYear) {
    if (taxYear) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTaxMaybeYear(100000);
calculateTaxMaybeYear(100000, 2021);
// Example Objects
var employee = {
    id: 1,
    name: "Josh",
    retire: function (date) {
        console.log(date);
    }
};
var employee2 = {
    id: 2,
    name: "Mirchael",
    retire: function (date) {
        console.log(date);
    }
};
// Example Unions Types
function kgToLbs(weight) {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.3;
    }
    else {
        return parseInt(weight) * 2.3;
    }
}
kgToLbs(10);
kgToLbs("10kg");
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100;
var metric = "cm";
// Example Nullable Types
function greet(name) {
    if (name) {
        console.log(name.toUpperCase);
    }
    else {
        console.log("Ciao");
    }
}
greet(undefined);
greet(null);
greet("Mirchael");
function getCustomer(id) {
    return id === 0 ? null : { name: "Mirchael", birthday: new Date() };
}
var customer = getCustomer(1);
// We can write it like this
// if (customer !== null && customer !== undefined) {
//     console.log(customer.name);
// }
// We can write it like this with the "Optional Property Chaining Operator
console.log(customer === null || customer === void 0 ? void 0 : customer.name);
// Optional element access operator
// customers?[0];
// Optional call operator
// let log: any = null;
// log?.("a");
function giorgioVaAlMare() {
    console.log("Giorgio va al mare");
}
;
