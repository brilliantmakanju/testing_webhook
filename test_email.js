import dotenv from 'dotenv';
import { MailSlurp } from 'mailslurp-client';

dotenv.config();

const mailslurp = new MailSlurp({ apiKey: process.env.EMAIL_MAIL_SLURP });

async function testEmailWithMailSlurp() {
    try {
        const inbox = await mailslurp.createInbox();
        console.log(`Inbox created: ${inbox.emailAddress}`);

        console.log("Inbox Id",inbox.id)

        await mailslurp.sendEmail(inbox.id, {
            to: [inbox.emailAddress, "whitelord721@gmail.com"],
            from: inbox.emailAddress,
            subject: "Test OTP",
            body: "Hello There, Enter the code below to to sign in. This code will expire in 5 minutes. If you did not send the request, you can ignore this email. 407892 To help security, do not share this code with anyone.",
        });
        console.log("Email sent to:", inbox.emailAddress);
        const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
        console.log("Received email subject:", email.subject);
        console.log("Email body:", email.body);

        const otpMatch = email.body.match(/\b\d{6}\b/); // Match a 6-digit number
        const otp = otpMatch ? otpMatch[0] : null;
        console.log("Extracted OTP:", otp);
    } catch (error) {
        console.error("Error with MailSlurp:", error);
    }
}

testEmailWithMailSlurp();
