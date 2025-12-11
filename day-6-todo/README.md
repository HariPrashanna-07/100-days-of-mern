# Day 6: Lists, Keys, and CRUD (React) 📋

## 🚀 Project Overview
For **Day 6** of the 100 Days of MERN challenge, I mastered handling **Collections of Data** in React.
I built a functional **Shopping Cart** application that demonstrates the core "CRUD" (Create, Read, Delete) operations without a database.

## 🎯 Learning Goals
- **Rendering Lists**: Using `.map()` to transform data arrays into UI components.
- **Unique Keys**: Understanding why React needs `key={index}` or `key={id}` to track items.
- **Immutable Updates**: Adding items using the spread operator `[...old, new]` instead of `.push()`.
- **Deleting Items**: Using `.filter()` to create a new array excluding the deleted item.

## 🛠️ Features Built
1.  **Dynamic List Rendering**: The app automatically renders HTML for every item in the state array.
2.  **Add Item**: Users can type a product name and add it to the cart.
3.  **Delete Item**: Users can remove specific items by clicking a "Remove" button.
4.  **Empty State Handling**: Prevents adding empty strings to the list.

## 📂 Tech Stack
- **React.js** (Vite)
- **JavaScript** (ES6+ Arrays)
- **CSS3** (Basic Styling)

## 💻 Code Snippets

### 1. Rendering the List
```jsx
{cart.map((item, index) => (
  <li key={index}>{item}</li>
))}


2.ADDING AN ITEM :


const addItem = () => {
  setCart([...cart, newItem]); // Spread operator preserves old items
};

3.DELETING AN ITEM

const deleteItem = (indexToDelete) => {
  const newCart = cart.filter((_, index) => index !== indexToDelete);
  setCart(newCart);
};