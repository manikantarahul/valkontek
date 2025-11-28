const express = require("express")
const cors = require("cors")
const nodeMailer = require("nodemailer")
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "kartikcarthik@gmail.com",
        pass: "kazm nqsw mfzy adwr"
    }

})
const app = express()
const port = 2020
app.use(cors())
app.use(express.json())


app.post("/contact", (req, res) => {
    const { fullName, email, phone, company, serviceInterest, message } = req.body
    const mailoption = {
        from: `"${fullName} (Inquiry)"`,
        to: "kartikcarthik@gmail.com",
        replyTo: email,
        header: {
            "Reply-To": email
        },
        envelope: {
            from: email,
            to: "kartikcarthik@gmail.com"
        },
        subject: `"Inquiry from ":${serviceInterest || 'General Inquiry'}`,
        html: `
        <h2>New Contact Message</h2>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Company: ${company}</p>
        <p>Service Interest: ${serviceInterest}</p>
        <p>Message: ${message}</p>`
    }
    transporter.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log(err)
            return res.status(500).send({ success: false, message: "Failed to send mail" })
        }
        console.log("message sent:%s", info.messageId)
        res.status(200).send({ success: true, message: "Mail sent successfully" })
    })
})




app.listen(port, () => {
    console.log("server started at port", port)
})