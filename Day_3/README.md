# Day 3: Modules & The DOM 🏗️

**Date:** December 10, 2025
**Status:** ✅ Completed

## 🧠 Concepts Learned
Today I moved from simple scripts to **Software Architecture**. I learned how to structure an application by splitting code into multiple files and making them talk to each other.

- [x] **ES6 Modules**: Used `import` and `export` to share code between files.
- [x] **The DOM**: Learned how to Select, Change, and Listen to HTML elements.
- [x] **Event Listeners**: Created an interactive UI that reacts to user clicks.

## 💻 Code Snippets

### 1. Exporting Logic (utils.js)
```javascript
// Named Export
export const add = (a, b) => a + b;

// Default Export
const format = (res) => `Result: ${res}`;
export default format;
 

 2. Importing & Using (app.js)


    import format, { add } from './utils.js';

    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        // Using the imported logic
        console.log(add(10, 20));
    });
🚧 Challenges Faced
I initially fell into the "Timing Trap": I tried to read the input values before the user clicked the button, which resulted in NaN. I fixed it by moving the .value logic inside the addEventListener block.

I had to learn that <script type="module"> is required in HTML to make imports work.

🔮 Next Steps
Day 4: REACT JS. The real game begins.