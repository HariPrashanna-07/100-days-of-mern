//Task 1: Fix the Names (.map)

//Input: ["alice", "bob", "charlie"]

//Goal: Capitalize the first letter of each name.

//Expected Output: ["Alice", "Bob", "Charlie"]

//Hint: You can combine string methods: name[0].toUpperCase() + name.slice(1).


const names=["alice", "bob", "charlie"]
const caps=names.map(item=>`${item[0].toUpperCase()}${item.slice(1)}`)
console.log(caps)


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 200 }
];
//Goal: Return an array of products that cost less than 100
const filtered=products.filter(things=>things.price<100)
console.log(filtered)
const ans=products.reduce((ans,curr)=>ans+curr.price,0);
console.log(ans)



//☠️ The Challenge: "The Black Friday Checkout"

//The Scenario: You have a shopping cart.

//Filter: Some items are outOfStock. Remove them.

//Map: It's Black Friday! Apply a 10% discount to the remaining items (multiply price by 0.9).

//Reduce: Calculate the final total bill
const cart = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 20, inStock: false },
    { name: "Keyboard", price: 50, inStock: true },
    { name: "Monitor", price: 200, inStock: true }
];
const fans=((cart.filter(items=>items.inStock)).map(item=>item.price*0.9)).reduce((fans,curr)=>curr+fans,0);

//Challenge: "The Project Budget"

const projects = [
    { id: 1, title: "Website", cost: 5000, active: true },
    { id: 2, title: "App", cost: 10000, active: true },
    { id: 3, title: "Audit", cost: 2000, active: false },
    { id: 4, title: "Marketing", cost: 3000, active: true }
];
//The Rules:

//Filter: Keep only the active projects.

//Map: The company adds a 10% tax to each project's cost (multiply cost by 1.1).

//Reduce: Calculate the Total Budget required for all active projects.

//Target Output: 19800
const sol=projects
        .filter(item=>item.active)
        .map(item=>item.cost*1.1)
        .reduce((sol,curr)=>curr+sol,0)
console.log(sol)