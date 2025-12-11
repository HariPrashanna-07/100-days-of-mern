// Day 1: ES6 Foundations

// 1. Let vs Const
// We use const by default, let only when variable updates.
const myName = "Siva";
let age = 25;

// 2. Arrow Functions (Implicit Return)
// Task: Check if a number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true

// 3. Template Literals
// Task: Profile Generator
const fname = "Siva";
const lname = "Kumar";
const city = "Chennai";
const role = "Developer";

console.log(`Hi, I am ${fname} ${lname} from ${city}. I work as a ${role}.`);

// --- BONUS TASKS ---

// Task: Welcome Message
const welcome = (user, time) => `Good ${time}, ${user}!`;

// Task: Tip Calculator
const calculateTotal = (bill, tax) => bill + (bill * tax);

// Task: Initial Extractor
const getInitials = (n1, n2) => `${n1[0]}${n2[0]}`;

console.log(getInitials("Steve", "Jobs")); // SJ