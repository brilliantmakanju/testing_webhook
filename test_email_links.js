import dotenv from 'dotenv';
import { MailSlurp } from 'mailslurp-client';

// Load .env variables
dotenv.config();

// Initialize MailSlurp with API key
const mailslurp = new MailSlurp({ apiKey: process.env.EMAIL_MAIL_SLURP });

async function testEmailWithMailSlurp() {
    try {
        // Step 1: Create a new MailSlurp inbox
        const inbox = await mailslurp.createInbox();
        console.log(`Inbox created: ${inbox.emailAddress}`);

        console.log("Inbox Id",inbox.id)

        // Step 2: Send an email to this MailSlurp inbox
        await mailslurp.sendEmail(inbox.id, {
            to: [inbox.emailAddress, "whitelord721@gmail.com"],
            from: inbox.emailAddress,
            subject: "Test OTP",
            body: "Hello, click this link to verify your account: ://example.com/verify?code=12345",
        });
        console.log("Email sent to:", inbox.emailAddress);

        // Step 3: Wait for the email to arrive in the MailSlurp inbox
        const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
        console.log("Received email subject:", email.subject);
        console.log("Email body:", email.body);

        // Step 4: Extract the first URL from the email body
        const urlMatch = email.body.match(/https?:\/\/[^\s]+/);
        const url = urlMatch ? urlMatch[0] : null;
        console.log("Extracted URL:", url);
    } catch (error) {
        console.error("Error with MailSlurp:", error);
    }
}

// Run the test function
testEmailWithMailSlurp();
