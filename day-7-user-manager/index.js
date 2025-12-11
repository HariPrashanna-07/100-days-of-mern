// Import our custom module
const userManager = require('./users');

// We use process.argv to get input from the terminal
// If you run: "node index.js add Hari 22"
// process.argv[2] is "add"
// process.argv[3] is "Hari"
// process.argv[4] is "22"

const command = process.argv[2];
if(command==='delete'){
    const name=process.argv[3];
    if (name){
        userManager.delUser(name);
    }else{
        console.log("Error:Please provide  name");
    }
}

else if (command === 'add') {
    const name = process.argv[3];
    const age = process.argv[4];
    
    if(name && age) {
        userManager.addUser(name, age);
    } else {
        console.log('Error: Please provide name and age.');
    }

} else if (command === 'list') {
    userManager.listUsers();

} else {
    console.log('Command not recognized. Use "add" or "list".');
}