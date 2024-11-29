let greetings: string = "hello world ";

let value: number = 26;

let flag: boolean = true;

console.log(greetings, value, flag);

let position: string;

function getValue() {
  return "6LPA";
}

position = getValue();

function addTwo(num: number): number {
  //   num.toUpperCase();
  return num + 2;
}
let newValue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
const x = getUpper("5");
console.log("jai", x);

function signUp(name: string, email: string, isPaid: boolean) {}

signUp("ritik", "ritik@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

loginUser("h", "h@h.com");

// using type defining in case of arrow function

const hope = (s: string): number => {
  return 5;
};

// type defining in case of map method

const tu = ["Brahma", "vishnu", "mahesh"];

tu.map((item: string): string => `the hero is ${item}`);
function gohang(dr: string): void {
  console.log("jai shree ram ");
}

function gohang2(dr: string): never {
  throw new Error("error hai ");
}

function createUser({ name: string, isActive: boolean }) {}

createUser({ name: "ritik", isActive: true });

function createUser2(): {} {
  return {};
}

function createUser3({ name: string, isActive: boolean }): {
  name: string;
  isActive: boolean;
} {
  return {
    name: "ritik",
    isActive: true,
  };
}

// type Alias --> more like creating more customs types

type myName = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser5(user: myName): myName {
  return { name: "ritik", email: "H@h.com", isActive: true };
}

createUser5({ name: "ritik", email: "h2h@gmail.com", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number;
};

let hen: User = {
  _id: "1234",
  name: "ritik",
  email: "h@gmail.com",
  isActive: true,
};

hen.name = "Aashish";
console.log(hen);

// but if we try to change the readonly property
// hen._id = "1567";

// we can combine two or more types ( very Intresting)

type first = {
  name: string;
};

type second = {
  rollNo: number;
};
// Now if we want to create a third type instead of creating new , we can combine the old ones

type combine = first & second & { isAlive: boolean };

let gym: combine = {
  name: "ritik",
  rollNo: 6789,
  isAlive: true,
};

console.log(gym);

// Union in TypeScript

let ghar: number | string = 123;

ghar = "ritik";

//  Que. when we have to handle a case when an employe can become a normal to admin

type User1 = {
  userId: number;
  email: string;
};

type admin = {
  userName: string;
  email: string;
};

let person: User1 | admin = { userId: 123, email: "ritk@gmail.com" };

console.log(person);

person = {
  userName: "ritik123",
  email: "ritk@gmail.com",
};

console.log(person);

// using of union in function

function getDbID(id: number | string) {
  // console.log(`the id value is ${id}`);
  if (id === "string") id.toUpperCase();
}

// getDbID(2);
getDbID("2");

// union in case of array

const data: number[] = [1, 2, 3, 4];

const names: string[] = ["a", "b", "c"];

// Que : Observe the below notations for arrayy

//below array type notations can only take either number or either string at a time,
// together string and number not possible
const arr1: string[] | number[] = [1, 2, 3, 4];

//but if we want number and string in the array at the same time

const arr2: (string | number)[] = [1, "ritik", "10", 2];

//very Strict Union

let seallotment: "Aisle" | "middle " | "window";

seallotment = "Aisle";
seallotment = "middle ";
seallotment = "window";

// Tuple in Typescript Only
// this we can say as more stricter version of array with union , in which order also matters

let user99: [number, string, boolean];
// practical and best example for this is rgb notation

let rgb: [number, number, number];

rgb = [123, 200, 234];

// more concise way of defining tuple

type UserA = [number, string];

let user11: UserA = [1, "pk"];

user99 = [1, "ritkk", true];

// Interfaces in TypeScript

interface pk {
  readonly dbId: number;
  email: string;

  userId: number;
  googleId?: string;
  // startTrail: () => number; // this one is also way of defining
  startTrail(): number;

  getCoupon(coupanName: string): number;
}

let user98: pk = {
  dbId: 123,
  email: "r@r.com",
  userId: 1234,
  startTrail: () => {
    return 10;
  },
  getCoupon(name: "rik100") {
    return 10;
  },
  // googleId: "ritk123",
};

export {};
