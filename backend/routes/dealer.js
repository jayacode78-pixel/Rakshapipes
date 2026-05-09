const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const {
    fullName,
    companyName,
    phone,
    email,
    city,
    state,
    message,
  } = req.body;

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
      from: `"Raksha Pipes Dealer" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.SUPPORT_EMAIL,

      subject: `New Dealer Inquiry | ${fullName}`,

      html: `
        <h2>New Dealer Application</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>

        <p><strong>Company Name:</strong> ${companyName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>City:</strong> ${city}</p>

        <p><strong>State:</strong> ${state}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log("❌ DEALER EMAIL ERROR:", err.message);

    res.json({ success: false });
  }
});

module.exports = router;