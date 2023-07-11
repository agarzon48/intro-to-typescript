// NUMBER
// no difference between integer and float

const age: number = 24;

// STRING

const username: string = "John";

// BOOLEAN
// no truthy or falsy values

const isMarried: boolean = false;

// OBJECT
// we can merely define the type of the object itself...

const person: object = {
  name: "John",
  age: 24,
  isMarried: false,
};

// ...but TS will complain if we don't define the type of the object's properties
console.log(person.age);

// So this is more explicit
const person2: {
  name: string;
  age: number;
  isMarried: boolean;
} = {
  name: "John",
  age: 24,
  isMarried: false,
};

console.log(person2.age);

// ARRAY
let stringsArray: string[] = ["a", "b", "c"];

// this helps us with autocomplete:
for (const string of stringsArray) {
  string.toUpperCase();
}
