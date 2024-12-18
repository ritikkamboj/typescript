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

interface pk {
  githubId: string;
}
interface Admin extends pk {
  role: "admin" | "TA" | "learner";
}

let user97: Admin = {
  dbId: 123,
  role: "admin",
  email: "r@r.com",
  userId: 1234,
  githubId: "rkd ",
  startTrail: () => {
    return 10;
  },
  getCoupon(name: "rik100") {
    return 10;
  },
  // googleId: "ritk123",
};

let user98: pk = {
  dbId: 123,
  email: "r@r.com",
  userId: 1234,
  githubId: "rkd ",
  startTrail: () => {
    return 10;
  },
  getCoupon(name: "rik100") {
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

class User50 {
  protected _courseCount = 1;
  name: string;
  email: string;
  private readonly city: string = "ladwa";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  private getMessage() {
    console.log("jai maata di ");
  }
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("count should be more than 1");

    this._courseCount = courseNum;
  }
}
class subUser extends User50 {
  isFamily: boolean = true;

  changeCount() {
    this._courseCount = 4;
  }
}

// User50.getMessage;

const ritik = new User50("ritik", "r@gmail.com");
// ritik.getMessage();
console.log(ritik);
// ritik.city;

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;

  constructor(cameraMode: string, filter: string, burst: number) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
}

class Youtube implements TakePhoto, Story {
  cameraMode: string;
  filter: string;
  burst: number;
  short: string;

  constructor(
    cameraMode: string,
    filter: string,
    burst: number,
    short: string
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
    this.short = short;
  }

  createStory(): void {
    console.log("story created ");
  }
}

interface TakePhoto1 {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram1 implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

abstract class TakePhoto2 {
  constructor(public filter: string, public burst: string) {}

  abstract getSepia(): void;

  getReelNumber(): number {
    return 8;
  }
}

class TakePhoto4 extends TakePhoto2 {
  constructor(
    public filter: string,
    public burst: string,
    public cameraMode: string
  ) {
    super(filter, burst);
  }

  getSepia(): void {
    console.log("sepia");
  }
}

const hitesh = new TakePhoto4("jai", "maata", "di");
// const hitesh2 = new TakePhoto2()

hitesh.getReelNumber();

function Identity3<Type>(val: Type): Type {
  return val;
}

Identity3<string>("ritik");

function Identity4<T>(val: T): T {
  return val;
}

interface Bottle {
  name: string;
  price: number;
}

let x1 = Identity4<Bottle>({ name: "pepsi", price: 80 });
console.log(x1);

function getProducts<T>(products: T[]): T {
  const num = 3;
  return products[num];
}

function getProducts1<T>(products: T[]): T[] {
  const num = 3;
  return products;
}

// adapting the above methods in

const getProducts2 = <T>(products: T[]): T => {
  const num = 4;
  return products[num];
};

//generic classes

interface DB {
  connection: string;
  name: string;
  password: string;
}

function anotherfunc<T, U extends DB>(valOne: T, valTwo: U): object {
  return {};
}

anotherfunc(3, {
  connection: "someDB link",
  name: "ritik",
  password: "some passowrd ",
});

//now we can see the exact use of generic classes

interface quiz {
  name: string;
  type: string;
}

interface exam {
  name: string;
  marks: number;
  difficulty: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addtoCart(product: T) {
    this.cart.push(product);
  }
}

const examObj = new Sellable<exam>();
examObj.addtoCart({ name: "ritik", marks: 45, difficulty: "strong" });
console.log(examObj.cart);

function printAll(strs: string | string[]) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type Predicates

type fish = {
  swim: () => void;
};

type bird = {
  fly: () => void;
};

function isFish(pet: fish | bird): pet is fish {
  return (pet as fish).swim !== undefined;
}

function getFood(pet: fish | bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food ";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

export {};
