// FIRST EXAMPLE
// Data type assignment example
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const numberOne = "1"; // Type inference allows TS to detect that this is a string
let numberTwo: number; // We can also explicitly declare the type of a variable
numberTwo = 2;

// TS forces us to cast data types
const result = addTwoNumbers(Number(numberOne), numberTwo);
console.log(result);

// SECOND EXAMPLE
// TS will complain even if we make manual error handling, since it can't
// perform type checking at runtime
function addTwoNumbers2(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

const numberOne2 = 1;
const numberTwo2 = "2";

const result2 = addTwoNumbers2(numberOne2, numberTwo2);
console.log(result2);

// THIRD EXAMPLE
// We can also use destructuring to define the type of the parameters
function addTwoNumbers3({ a, b }: { a: number; b: number }): number {
  return a + b;
}

const params = {
  a: 1,
  b: 2,
};

const result3 = addTwoNumbers3(params);

// FOURTH EXAMPLE
function addTwoNumbers4(numbers: number[]): number {
  return numbers[0] + numbers[1];
}

const params2 = [1, 2];

const result4 = addTwoNumbers4(params2);
