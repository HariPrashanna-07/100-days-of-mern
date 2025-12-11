# Day 2: Array Methods (The React Engine) 🚂

**Date:** December 09, 2025
**Status:** ✅ Completed

## 🧠 Concepts Learned
Today I mastered the "Holy Trinity" of modern JavaScript. These methods are essential for React because they allow us to manipulate data without using messy `for` loops.

- [x] **`.map()`**: Transforms every item in an array (e.g., converting a list of prices to HTML tags).
- [x] **`.filter()`**: Removes items that don't match a condition (e.g., deleting a task).
- [x] **`.reduce()`**: Calculates a single value from a list (e.g., total cart price).

## 💻 Code Snippets

### 1. Map (Transform)
Used to capitalize names.
```javascript
const names = ["alice", "bob"];
const caps = names.map(name => name[0].toUpperCase() + name.slice(1));
// Output: ["Alice", "Bob"]
2. Filter (Remove)
Used to keep only affordable items.

JavaScript

const affordable = products.filter(item => item.price < 100);
3. Reduce (Total)
Used to calculate the total bill.

JavaScript

const total = prices.reduce((acc, curr) => acc + curr, 0);
☠️ Final Challenge: The Chain
I combined all three methods to filter active projects, add tax, and calculate the budget.

JavaScript

const totalBudget = projects
    .filter(project => project.active)      // 1. Keep active
    .map(project => project.cost * 1.1)     // 2. Add Tax
    .reduce((acc, cost) => acc + cost, 0);  // 3. Sum it up
🚧 Challenges Faced

I initially forgot the parentheses () when calling .toUpperCase().

I struggled with the "Shape Shifter" problem: realizing that .map() changed my array of Objects into an array of Numbers, so I couldn't use .price in the reduce step.


🔮 Next Steps
Day 3: Modern Modules (Import/Export) and DOM Basics.


---

### **Action Item:**
1.  Save this file.
2.  Run the push commands one last time to make sure your documentation is online:
    ```powershell
    git add .
    git commit -m "Docs: Added Day 2 README"
    git push origin main
    ```

**You are fully synchronized. Great work today.**