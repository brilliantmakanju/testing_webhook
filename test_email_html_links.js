import dotenv from 'dotenv';
import { EmailFeatureSupportResultDetectedFeaturesEnum, MailSlurp, NewFakeEmailAddressResultFromJSON, SenderFromJSON } from 'mailslurp-client';

dotenv.config();

const mailslurp = new MailSlurp({ apiKey: process.env.EMAIL_MAIL_SLURP });

async function testEmailWithMailSlurp() {
    try {
        const inbox = await mailslurp.createInbox();

        await mailslurp.sendEmail(inbox.id, {
            to: [inbox.emailAddress],
            from: inbox.emailAddress,
            subject: "Test OTP",
            body: `
                <html>
                <body>
                    <h1>Welcome!</h1>
                    <p>Please click the link below to verify your account:</p>
                    <a href="https://example.com/verify?code=12345" style="background-color:#4CAF50;color:white;padding:10px;text-decoration:none;">Verify Now</a>
                </body>
                </html>
            `,
            isHTML: true,
        });
        console.log("Email sent to:", inbox.emailAddress);

        const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
        console.log("Email body:", email.body);

        const htmlContent = email.body;
        const linkMatches = htmlContent.match(/<a[^>]+href="([^"]+)"/g);
        const urls = linkMatches ? linkMatches.map(link => link.match(/href="([^"]+)"/)[1]) : [];
        console.log("Extracted URLs:", urls[0]);
    } catch (error) {
        console.error("Error with MailSsslurp:", error);

/// Fixed SOmething big2122
asasaadasddddddddaffklksdfklkllw90ef3099i0aiskdof
        
dasads
asdads
    }asdasssssssssadssaaaaa

    a
    dotenva
    sd

    a
    d
    asasaadasddddddddaffklksdfklkllw90ef3099i0aiskdofa
    d

    as
    d

    a
    d

    a
    fas
    falses
    NewFakeEmailAddressResultFromJSONdsf
    sda
    f
    s
    f
    SVGFEDiffuseLightingElementdf
    d
    fds
    af
    SafeArraysa
    FileSystemFileEntryasdf
    sad
    fdsf
    saf
    s
    f
    sdf
    ds
    fsd
    f
    SenderFromJSONs
    EmailFeatureSupportResultDetectedFeaturesEnumsadf
    sd
    fds
    fdsa
    fdsaf
    sd
    dasads
    ddadsasd

    d
    a
    sd

    ad


    s

    aasdadadsa
    aasdadadsa
    a
    d

    asdadsa
    ds

    a
    ds
    s


    asa
    s
    a
    a
    s
    a

    a
    dsa
    a
    s

}

testEmailWithMailSlurp();









