// Task 2: Create and Use a Local Module to Format a Report
// This module generates a formatted student report

/**
 * Generates a formatted report for a student
 * @param {string} name - The student's name
 * @param {Array<number>} scores - Array of numerical scores
 * @returns {string} - Formatted report string
 */
function generateReport(name, scores) {
    // Calculate the average score
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
    
    // Determine pass/fail status (pass if average >= 10)
    const status = average >= 10 ? 'PASS' : 'FAIL';
    
    // Format and return the report
    const report = `
========================================
         STUDENT REPORT
========================================
Name:           ${name}
Scores:         ${scores.join(', ')}
Average Score:  ${average.toFixed(2)}
Status:         ${status}
========================================
    `;
    
    return report;
}

// Export the function to be used in other files
module.exports = { generateReport };
