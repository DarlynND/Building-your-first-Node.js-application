# Building Your First Node.js Application

This project demonstrates the use of built-in, local, and third-party modules in Node.js through three hands-on tasks.

## Project Structure

```
.
├── message.txt           # Text file for Task 1
├── readFile.js          # Task 1: Built-in fs module
├── reportGenerator.js   # Task 2: Local module
├── main.js              # Task 2: Main file using local module
├── emailSender.js       # Task 3: Third-party nodemailer module
├── package.json         # Project dependencies
└── README.md            # This file
```

## Prerequisites

- Node.js installed (v12 or higher recommended)
- npm (comes with Node.js)
- A Gmail account (for Task 3)

## Setup Instructions

### 1. Install Dependencies

First, install the required npm packages:

```bash
npm install
```

This will install `nodemailer` for Task 3.

## Task 1: Use a Built-in Module (fs)

**Objective:** Read a file using Node.js's built-in `fs` module.

### Files:
- `message.txt` - Contains the text to be read
- `readFile.js` - Reads and displays the file content

### Run Task 1:

```bash
node readFile.js
```

**Expected Output:**
```
File Content:
Hello from the file system module!
```

## Task 2: Create and Use a Local Module

**Objective:** Build a local module that generates formatted student reports.

### Files:
- `reportGenerator.js` - Local module with `generateReport()` function
- `main.js` - Main file that uses the local module

### Features:
- Calculates average score from an array of numbers
- Determines PASS/FAIL status (pass if average ≥ 10)
- Returns a formatted report

### Run Task 2:

```bash
node main.js
```

**Expected Output:**
```
========================================
         STUDENT REPORT
========================================
Name:           Alice Johnson
Scores:         15, 18, 12, 14, 16
Average Score:  15.00
Status:         PASS
========================================

[Additional student reports...]
```

## Task 3: Use a Third-Party Module (nodemailer)

**Objective:** Send an email using the `nodemailer` package.

### Files:
- `emailSender.js` - Configures and sends email via Gmail

### Setup Gmail App Password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification (if not already enabled)
4. Go to App Passwords: https://myaccount.google.com/apppasswords
5. Generate a new app password for "Mail"
6. Copy the 16-character password

### Configure emailSender.js:

Open `emailSender.js` and replace the following placeholders:

```javascript
user: 'your-email@gmail.com',    // Your Gmail address
pass: 'your-app-password'         // Your 16-character app password
```

Also update the recipient email:

```javascript
to: 'recipient@example.com',      // Recipient's email address
```

### Run Task 3:

```bash
node emailSender.js
```

**Expected Output (Success):**
```
✅ Email sent successfully!
Response: 250 2.0.0 OK...
Message ID: <...@gmail.com>
```

**Expected Output (Error):**
```
❌ Error sending email:
[Error details...]
```

## Alternative Commands

You can also use the npm scripts defined in `package.json`:

```bash
npm run task1    # Run Task 1
npm run task2    # Run Task 2
npm run task3    # Run Task 3
```

## Troubleshooting

### Task 1:
- Ensure `message.txt` is in the same directory as `readFile.js`
- If you get a file not found error, check the file path

### Task 2:
- No special setup required
- Module exports/imports should work out of the box

### Task 3:
- **"Invalid login"**: Double-check your email and app password
- **"Less secure app access"**: Use an App Password, not your regular password
- **"Connection refused"**: Check your internet connection
- **SMTP errors**: Ensure Gmail's SMTP settings are correct (they're preconfigured in the code)

## Learning Outcomes

After completing these tasks, you will understand:

1. **Built-in Modules**: How to use Node.js's core modules like `fs`
2. **Local Modules**: How to create and export your own modules
3. **Third-Party Modules**: How to install and use npm packages
4. **File I/O**: Reading files synchronously with `fs.readFileSync()`
5. **Module System**: Using `require()` and `module.exports`
6. **Email Sending**: Configuring SMTP and sending emails programmatically

## Next Steps

- Explore asynchronous file reading with `fs.readFile()`
- Add error handling to all tasks
- Create more complex local modules
- Try other nodemailer features (attachments, HTML emails, etc.)
- Explore other popular npm packages

## Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [W3Schools Node.js Email Tutorial](https://www.w3schools.com/nodejs/nodejs_email.asp)
