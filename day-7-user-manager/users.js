const fs = require('fs');

// The file where we store data
const FILE_PATH = 'data.json';

// Helper function: Load existing users
const loadUsers =()=>{
    try{
    const databuffer=fs.readFileSync(FILE_PATH);
    const dataJSON=databuffer.toString();
    return JSON.parse(dataJSON);
}catch (e)
{
    return [];

}};
// Helper function: Save users back to file
const saveUsers=(users)=>{
    dataJSON=JSON.stringify(users);
    fs.writeFileSync(FILE_PATH,dataJSON)
};
const delUser=(name)=>{
    const users=loadUsers();
    const present=users.find((user)=>user.name===name);
    if (present){
    const remain=users.filter((user)=>user.name!==name);
    saveUsers(remain)
    console.log("deleted successfully");



    }else{
        console.log("User not Available");
    }
}

// FEATURE 1: Add a User
const addUser=(name,age)=>{
    const users=loadUsers();
    const dups=users.find((user)=>user.name===name);
    if (dups){
        console.log("Already Present");

    }else{
        users.push({
            name:name,age:age
            
        });
        
    console.log("Added Successfully");

    }saveUsers(users);
}

// FEATURE 2: List all Users
const listUsers = () => {
    const users = loadUsers();
    console.log('--- Your Users ---');
    users.forEach((user) => {
        console.log(`Name: ${user.name} | Age: ${user.age}`);
    });
};

module.exports = {
    addUser: addUser,
    listUsers: listUsers,
    delUser:delUser
}