const express = require("express")
const cors = require("cors")
const sgMail = require("@sendgrid/mail");
import dotenv from "dotenv";
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const app = express()
const port = process.env.PORT || 2020
app.use(cors({
    origin: "https://valkontek.netlify.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}))
app.use(express.json())
// const transporter = nodeMailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "kartikcarthik@gmail.com",
//         pass: "kazm nqsw mfzy adwr"
//     }

// })

app.post("/contact", async (req, res) => {
    const { fullName, email, phone, company, serviceInterest, message } = req.body
    const mailoption = {
        from: process.env.FROM_EMAIL,
        to: process.env.SENDER_EMAIL,
        replyTo: email,
        headers: {
            "Reply-To": email
        },
        // envelope: {
        //     from: email,
        //     to: "kartikcarthik@gmail.com"
        // },
        subject: `Inquiry from :${serviceInterest || 'General Inquiry'}`,
        html: `
        <h2>New Contact Message</h2>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Company: ${company}</p>
        <p>Service Interest: ${serviceInterest}</p>
        <p>Message: ${message}</p>`
    }
    // transporter.sendMail(mailoption, (err, info) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(500).send({ success: false, message: "Failed to send mail" })
    //     }
    //     console.log("message sent:%s", info.messageId)
    //     res.status(200).send({ success: true, message: "Mail sent successfully" })
    // })
    try {
        await sgMail.send(mailoption);
        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
    }
})




app.listen(port, () => {
    console.log("server started at port", port)
})