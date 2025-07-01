const userAge = 22;
// const userAge = parseInt(prompt("Enter user age:"));
// const userAge = +prompt("Enter user age:");

// debugger;

const isSchoolStudent = userAge >= 5 && userAge <= 18;
const isCollegeStudent = userAge >= 18 && userAge <= 24;

const isStudent = isSchoolStudent || isCollegeStudent;
console.log(isStudent);

// const andResult = 0 && 2; // false
// const orResult = 0 || 2; // true

// const andResult2 = "" && "Hello";
// const andResult2 = "Hey" && "Hello" && "My" && "";
// const orResult2 = "" || "Hello";

// const andResult3 = "Hello" && null;
// const orResult3 = "Hello" || null;

// const andResult4 = "Hello" && -4 + 4;
// const orResult4 = undefined || 4 + 8 * 5;

// const myName = prompt("Enter your name ");
// console.log(!myName);

const andResult5 = "Hello" && console.log("hello1");
const orResult5 = undefined || console.log("hello2");
