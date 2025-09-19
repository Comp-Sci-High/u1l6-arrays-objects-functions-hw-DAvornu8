// TASK 1: Arrays - Create, Read, Update, Delete (CRUD)

// A. Create an array called `fruits` that contains: "apple", "banana", "cherry".
let fruits = ["apple", "banana", "cherry"];

// B. Read (log) the second fruit in the array.
console.log(fruits[1]); // "banana"

// C. Update the third fruit to "orange".
fruits[2] = "orange";

// D. Add a new fruit, "grape", to the end of the array.
fruits.push("grape");

// E. Delete the last fruit in the array.
fruits.pop();

// F. Log the updated array.
console.log(fruits); // ["apple", "banana", "orange"]



// TASK 2: Objects - Create, Read, Update, Delete (CRUD)

// A. Create an object called `student` with the keys: name, age, and grade.
let student = {
  name: "Desiree",
  age: 17,
  grade: "B"
};

// B. Read (log) the student's age.
console.log(student.age);

// C. Update the student's grade to "A+".
student.grade = "A+";

// D. Add a new property `isGraduated` and set it to `true`.
student.isGraduated = true;

// E. Delete the `age` property from the object.
delete student.age;

// F. Log the updated student object.
console.log(student);



// TASK 3: Functions - Create and Call Functions

// A. Write a function called `calculateTotal` that takes two inputs: price and quantity.
//    The function should return the total price by multiplying price by quantity.
function calculateTotal(price, quantity) {
  return price * quantity;
}

// B. Call the `calculateTotal` function 3 times and console log the outputs
console.log(calculateTotal(20, 5));  // 100
console.log(calculateTotal(12, 8));  // 96
console.log(calculateTotal(9, 42));  // 378
