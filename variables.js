"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello world ";
var value = 26;
var flag = true;
console.log(greetings, value, flag);
var position;
function getValue() {
    return "6LPA";
}
position = getValue();
function addTwo(num) {
    //   num.toUpperCase();
    return num + 2;
}
var newValue = addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
var x = getUpper("5");
console.log("jai", x);
function signUp(name, email, isPaid) { }
signUp("ritik", "ritik@gmail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("h", "h@h.com");
// using type defining in case of arrow function
var hope = function (s) {
    return 5;
};
// type defining in case of map method
var tu = ["Brahma", "vishnu", "mahesh"];
tu.map(function (item) { return "the hero is ".concat(item); });
function gohang(dr) {
    console.log("jai shree ram ");
}
function gohang2(dr) {
    throw new Error("error hai ");
}
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "ritik", isActive: true });
function createUser2() {
    return {};
}
function createUser3(_a) {
    var string = _a.name, boolean = _a.isActive;
    return {
        name: "ritik",
        isActive: true,
    };
}
function createUser5(user) {
    return { name: "ritik", email: "H@h.com", isActive: true };
}
createUser5({ name: "ritik", email: "h2h@gmail.com", isActive: true });
var hen = {
    _id: "1234",
    name: "ritik",
    email: "h@gmail.com",
    isActive: true,
};
hen.name = "Aashish";
console.log(hen);
