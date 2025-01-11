import dotenv from 'dotenv';
import { MailSlurp } from 'mailslurp-client';

dotenv.config();

const mailslurp = new MailSlurp({ apiKey: process.env.EMAIL_MAIL_SLURP });
// 33ca1bb5-c831-4b69-b2da-a79d99c316ca     8
// 7cc46800-8d1d-42a6-b242-e59f7b3db234     6
// 597b9f03-142d-4d82-ab77-c33f4c42b61c     5
async function testEmailWithMailSlurp() {
    try {

        // await mailslurp.createInbox()
        // const customEmailPrefix = "countalucard13";  // Customize email prefix
        // const customEmail = `${customEmailPrefix}@mailslurp.biz`;
        // console.log(customEmail, "custom Email")

        const inboxes = await mailslurp.getAllInboxes()
        
        console.log(inboxes)

        inboxes.find(inbox => {
            return console.log(inbox.emailAddress)
        })
        const existingInbox = inboxes.find(inbox => inbox.emailAddress == "testworkivauser@mailslurp.biz");
        console.log(existingInbox?.emailAddress, "Exiating Inbox")

    //     let inbox;
    //     if (existingInbox) {
    //         console.log(`Inbox already exists: ${existingInbox.emailAddress}`);
    //         inbox = existingInbox;  // Use the existing inbox
    //     } else {
    //         inbox = await mailslurp.inboxController.createInbox({
    //             emailAddress: customEmail, 
    //             // Specify the desired email address
    //             // name: "Johsn Doe",
    //             // description: 'Custom inbox for testing', // Optional description
    //         });
    //         console.log(`Created new inbox: ${inbox.emailAddress}`);
    //     }

    //     // await mailslurp.sendEmail(inbox.id, {
    //     //     to: [inbox.emailAddress],
    //     //     from: inbox.emailAddress,
    //     //     subject: "Test OTP",
    //     //     body: "Hello There, Enter the code below to to sign in. This code will expire in 5 minutes. If you did not send the request, you can ignore this email. 407892 To help security, do not share this code with anyone.",
    //     // });
    //     // console.log("Email sent to:", inbox.emailAddress);


    //   const secondEmails = await mailslurp.getEmails(`${inbox?.id}`, { limit: 2} )
    //   console.log(secondEmails, "Second Email")
    //   await Promise.all(
    //     secondEmails.map(async (email) => {
    //         const fullEmail = await mailslurp.getEmail(email.id);
    //         console.log('Email Body:', fullEmail.body);
    //     })
    // );

    //     const email = await mailslurp.waitForLatestEmail(inbox.id, 30000); // 30 seconds timeout
    //     console.log("Received email subject:", email.subject);
    //     console.log("Email body:", email.body);

    //     // const otpMatch = email.body.match(/\b\d{10}\b/); // Match a 10-digit OTP
    //     // const otp = otpMatch ? otpMatch[0] : null;
    //     // console.log("Extracted OTP:", otp);

    console.log("DEv")

    } catch (error) {
        console.error("Error with MailSlurp:", error);
    }
}

testEmailWithMailSlurp();
