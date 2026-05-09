const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
    from: `"Raksha Pipe" <${process.env.EMAIL_USER}>`,
      replyTo: email,     
      to: process.env.SUPPORT_EMAIL,
      subject: `Raksha Pipe | ${name} Contact`,
      html: `
        <h2>New Message</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log("❌ EMAIL ERROR:", err.message);
    res.json({ success: false });
  }
});

module.exports = router;