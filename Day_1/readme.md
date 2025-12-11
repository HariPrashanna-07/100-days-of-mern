# Day 1: JavaScript ES6 Foundation 🚀

**Date:** December 09, 2025
**Status:** ✅ Completed

## 🧠 Concepts Learned
Today I moved from "Old JavaScript" to Modern ES6 Standards.

- [x] **`let` & `const`**: Stopped using `var`. `const` is for values that don't change, `let` is for reassignable variables.
- [x] **Arrow Functions**: Learned to write cleaner functions using `=>` and implicit returns (one-liners).
- [x] **Template Literals**: Using backticks (`` ` ``) to insert variables into strings easily.

## 💻 Code Snippets

### 1. Arrow Functions
Instead of writing `function`, I now use:
```javascript
// Old
function add(a, b) {
    return a + b;
}

// New (ES6)
const add = (a, b) => a + b;
const name = "Siva";
console.log(`Hello, ${name}!`);
Here is the professional GitHub-style structure for your notes.

This method will make your profile look amazing to recruiters because it shows you can document your code.

📂 Folder Structure
First, create this structure on your laptop:

Plaintext

100-days-of-mern/
├── Day-01/
│   ├── day1.js       <-- Your Code
│   └── README.md     <-- Your Notes
└── Day-02/ ...
📄 1. The Code File (day1.js)
Copy your solutions into this file so you have a record of your work.

JavaScript

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
📝 2. The Notes File (README.md)
Create a file named README.md inside the Day-01 folder and paste this text.

Markdown

# Day 1: JavaScript ES6 Foundation 🚀

**Date:** December 09, 2025
**Status:** ✅ Completed

## 🧠 Concepts Learned
Today I moved from "Old JavaScript" to Modern ES6 Standards.

- [x] **`let` & `const`**: Stopped using `var`. `const` is for values that don't change, `let` is for reassignable variables.
- [x] **Arrow Functions**: Learned to write cleaner functions using `=>` and implicit returns (one-liners).
- [x] **Template Literals**: Using backticks (`` ` ``) to insert variables into strings easily.

## 💻 Code Snippets

### 1. Arrow Functions
Instead of writing `function`, I now use:
```javascript
// Old
function add(a, b) {
    return a + b;
}

// New (ES6)
const add = (a, b) => a + b;
2. Template Literals
No more + for string concatenation!

JavaScript

const name = "Siva";
console.log(`Hello, ${name}!`);
🚧 Challenges Faced
Initially, I struggled with the syntax of Arrow Functions (forgetting the = sign).

I confused single quotes ' with backticks ` for Template Literals, but I fixed it.
Moving on to Array Methods (.map, .filter, .reduce) in Day 2.