const nodemailer = require('nodemailer');

// Create a transporter with SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // Set to true if using TLS
    auth: {
        user: 'akhilachilukala008@gmail.com',
        pass: 'akhilareddy'
    }
});

// Function to send email
const sendEmail = async (to, subject, text) => {
    try {
        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'Your Name <your-email@example.com>', // sender address
            to, // list of receivers
            subject, // Subject line
            text, // Plain text body
            // html: '<b>Hello world?</b>', // You can also use HTML format
        });

        console.log('Message sent: %s', info.messageId);
        return info.messageId;
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
