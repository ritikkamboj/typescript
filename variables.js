"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var gym = {
    name: "ritik",
    rollNo: 6789,
    isAlive: true,
};
console.log(gym);
// Union in TypeScript
var ghar = 123;
ghar = "ritik";
var person = { userId: 123, email: "ritk@gmail.com" };
console.log(person);
person = {
    userName: "ritik123",
    email: "ritk@gmail.com",
};
console.log(person);
// using of union in function
function getDbID(id) {
    // console.log(`the id value is ${id}`);
    if (id === "string")
        id.toUpperCase();
}
// getDbID(2);
getDbID("2");
// union in case of array
var data = [1, 2, 3, 4];
var names = ["a", "b", "c"];
// Que : Observe the below notations for arrayy
//below array type notations can only take either number or either string at a time,
// together string and number not possible
var arr1 = [1, 2, 3, 4];
//but if we want number and string in the array at the same time
var arr2 = [1, "ritik", "10", 2];
//very Strict Union
var seallotment;
seallotment = "Aisle";
seallotment = "middle ";
seallotment = "window";
// Tuple in Typescript Only
// this we can say as more stricter version of array with union , in which order also matters
var user99;
// practical and best example for this is rgb notation
var rgb;
rgb = [123, 200, 234];
var user11 = [1, "pk"];
user99 = [1, "ritkk", true];
var user97 = {
    dbId: 123,
    role: "admin",
    email: "r@r.com",
    userId: 1234,
    githubId: "rkd ",
    startTrail: function () {
        return 10;
    },
    getCoupon: function (name) {
        return 10;
    },
    // googleId: "ritk123",
};
var user98 = {
    dbId: 123,
    email: "r@r.com",
    userId: 1234,
    githubId: "rkd ",
    startTrail: function () {
        return 10;
    },
    getCoupon: function (name) {
        return 10;
    },
    // googleId: "ritk123",
};
// re opening of interface
// suppose we want to add more type fields in our interface , so instead of editing the previous one, we do like this :
// interface pk {
//   githubId: string;
// }
// classes in typescript
var User50 = /** @class */ (function () {
    function User50(name, email) {
        this._courseCount = 1;
        this.city = "ladwa";
        this.name = name;
        this.email = email;
    }
    User50.prototype.getMessage = function () {
        console.log("jai maata di ");
    };
    Object.defineProperty(User50.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User50.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1)
                throw new Error("count should be more than 1");
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User50;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.changeCount = function () {
        this._courseCount = 4;
    };
    return subUser;
}(User50));
// User50.getMessage;
var ritik = new User50("ritik", "r@gmail.com");
// ritik.getMessage();
console.log(ritik);
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        console.log("story created ");
    };
    return Youtube;
}());
var Instagram1 = /** @class */ (function () {
    function Instagram1(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram1;
}());
var TakePhoto2 = /** @class */ (function () {
    function TakePhoto2(filter, burst) {
        this.filter = filter;
        this.burst = burst;
    }
    TakePhoto2.prototype.getReelNumber = function () {
        return 8;
    };
    return TakePhoto2;
}());
var TakePhoto4 = /** @class */ (function (_super) {
    __extends(TakePhoto4, _super);
    function TakePhoto4(filter, burst, cameraMode) {
        var _this = _super.call(this, filter, burst) || this;
        _this.filter = filter;
        _this.burst = burst;
        _this.cameraMode = cameraMode;
        return _this;
    }
    TakePhoto4.prototype.getSepia = function () {
        console.log("sepia");
    };
    return TakePhoto4;
}(TakePhoto2));
var hitesh = new TakePhoto4("jai", "maata", "di");
// const hitesh2 = new TakePhoto2()
hitesh.getReelNumber();
function Identity3(val) {
    return val;
}
Identity3("ritik");
function Identity4(val) {
    return val;
}
var x1 = Identity4({ name: "pepsi", price: 80 });
console.log(x1);
function getProducts(products) {
    var num = 3;
    return products[num];
}
function getProducts1(products) {
    var num = 3;
    return products;
}
// adapting the above methods in
var getProducts2 = function (products) {
    var num = 4;
    return products[num];
};
function anotherfunc(valOne, valTwo) {
    return {};
}
anotherfunc(3, {
    connection: "someDB link",
    name: "ritik",
    password: "some passowrd ",
});
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addtoCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
var examObj = new Sellable();
examObj.addtoCart({ name: "ritik", marks: 45, difficulty: "strong" });
console.log(examObj.cart);
