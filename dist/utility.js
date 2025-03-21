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
let mySize = SizeNumber.Small;
let MikeSize = SizeNumber.Medium;
let GiorgioSize = SizeNumber.Large;
console.log(mySize, MikeSize, GiorgioSize);
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
let employee = {
    id: 1,
    name: "Josh",
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: "Mirchael",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.3;
    }
    else {
        return parseInt(weight) * 2.3;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let metric = "cm";
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
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.name);
function giorgioVaAlMare() {
    console.log("Giorgio va al mare");
}
;
giorgioVaAlMare();
//# sourceMappingURL=utility.js.map