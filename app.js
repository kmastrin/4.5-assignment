const firstName = "Hyunjin"; // concatenated string variable
const lastName = "Hwang";
const age = 23;

const concatenatedString = "My favorite kpop idol is " + firstName + " " + lastName + " and he is " + age + " years old.";

console.log(concatenatedString);

const grade = 75; // "if" conditional statement

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

const dayOfWeek = 3; // switch statement
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`Today is ${dayName}.`);

const text = "Stray Kids everywhere all around the world"; // string method/To Uppercase
const upper = text.toUpperCase();

console.log(upper);

const value = 143; // number method
const isFiniteValue = isFinite(value);
console.log(isFiniteValue);