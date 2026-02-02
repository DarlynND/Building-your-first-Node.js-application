// Task 3: Use a Third-Party Module (nodemailer) to Send an Email

const nodemailer = require('nodemailer');

// Create a transporter object using Gmail SMTP
// NOTE: You need to replace these with your actual Gmail credentials
// For Gmail, you must use an "App Password" (not your regular password)
// To generate an App Password: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Replace with your Gmail address
        pass: 'your-app-password'       // Replace with your Gmail App Password
    }
});

// Define email options
const mailOptions = {
    from: 'your-email@gmail.com',      // Sender address (your email)
    to: 'recipient@example.com',        // Recipient address
    subject: 'Test Email from Node.js Application',
    text: 'Hello! This is a test email sent from my first Node.js application using nodemailer.',
    html: '<h1>Hello!</h1><p>This is a test email sent from my first <strong>Node.js application</strong> using nodemailer.</p>'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('❌ Error sending email:');
        console.log(error);
    } else {
        console.log('✅ Email sent successfully!');
        console.log('Response:', info.response);
        console.log('Message ID:', info.messageId);
    }
});

// Alternative example using promises (async/await)
async function sendEmailAsync() {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully (async)!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.log('❌ Error sending email (async):');
        console.log(error);
    }
}

// Uncomment the line below to use the async version instead
// sendEmailAsync();
