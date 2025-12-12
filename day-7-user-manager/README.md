Goal: Understand how Node.js interacts with the computer's file system to store data without a database.

Key Concepts Learned:
Node.js Runtime: Running JavaScript outside the browser.

File System (fs) Module: Reading and writing files synchronously.

Serialization: Converting Objects to Strings (JSON.stringify) and vice versa (JSON.parse).

CRUD Logic: Implementing logic to Create, Read, and Delete users from a local data.json file.

Code Highlight (User Manager):

// user.js (Logic to delete a user)
const delUser = (name) => {
    const users = loadUsers();
    const keptUsers = users.filter((user) => user.name !== name);

    if (users.length > keptUsers.length) {
        saveUsers(keptUsers);
        console.log("✅ User deleted successfully.");
    } else {
        console.log("❌ User not found.");
    }
};