// Task 2: Main file that uses the local reportGenerator module

const { generateReport } = require('./reportGenerator');

// Example data - Student 1 (Pass)
const student1 = {
    name: 'Alice Johnson',
    scores: [15, 18, 12, 14, 16]
};

// Example data - Student 2 (Fail)
const student2 = {
    name: 'Bob Smith',
    scores: [8, 6, 9, 7, 5]
};

// Example data - Student 3 (Borderline Pass)
const student3 = {
    name: 'Charlie Brown',
    scores: [10, 11, 9, 10, 10]
};

// Generate and print reports
console.log(generateReport(student1.name, student1.scores));
console.log(generateReport(student2.name, student2.scores));
console.log(generateReport(student3.name, student3.scores));
