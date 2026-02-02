// Task 1: Use a Built-in Module (fs)
// This file demonstrates reading a file using Node.js's built-in fs module

const fs = require('fs');

// Read the content of message.txt synchronously
const fileContent = fs.readFileSync('message.txt', 'utf8');

// Print the file content to the console
console.log('File Content:');
console.log(fileContent);
