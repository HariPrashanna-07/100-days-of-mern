import { validate } from './utils.js';

const inp = document.getElementById("commentInput");
const btn = document.getElementById("postBtn");
const feed = document.getElementById("feed");

btn.addEventListener("click", () => {
    const text = inp.value;

    if (validate(text)) {
        const newItem = document.createElement("li");
        newItem.innerText = text; // Set text to the actual comment
        feed.appendChild(newItem);
        
        inp.value = ""; 
    } else {
        alert("Comment cannot be empty!");
    }
});