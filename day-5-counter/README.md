# Day 5: State Management & Event Handling (React)

## 🚀 Project Overview
For **Day 5** of the 100 Days of MERN challenge, I dove deep into **State Management** using the `useState` hook. I moved away from static components and built interactive features that respond to user actions.

This project combines three mini-apps into one interface:
1.  **Counter App** (Click events & number logic)
2.  **Theme Switcher** (Boolean toggles & conditional styling)
3.  **Micro-Post Input** (String manipulation & form handling)

## ⚡ Features
- **Dynamic State**: Real-time UI updates without page reloads.
- **Event Handling**: Capturing `onClick` and `onChange` events.
- **Conditional Rendering**: Changing UI styles (Dark/Light mode) based on state.
- **Input Validation**: Real-time character counting and limit warnings.

## 🛠️ Tech Stack
- **React.js** (Vite)
- **JavaScript (ES6+)**
- **CSS3** (Conditional Classes)

## 📂 Key Concepts Learned

### 1. The `useState` Hook
Understanding that variables in React need to be "State" to trigger re-renders.
```javascript
const [count, setCount] = useState(0);

2. Event Objects (e)
Accessing user input from text fields.
const handleTextChange = (e) => {
    setText(e.target.value); 
};

3. Conditional Styling
Applying different styles dynamically.
<div className={isDark ? "card dark" : "card"}>



Author: Hari Prashanna

Challenge: 100 Days of MERN