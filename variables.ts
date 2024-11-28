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
hen._id = "1567";
export {};
