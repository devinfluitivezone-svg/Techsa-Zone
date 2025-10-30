import nodemailer from "nodemailer";

// Hostinger SMTP Configuration
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.HOSTINGER_EMAIL, // Your email (e.g., info@yourdomain.com)
    pass: process.env.HOSTINGER_EMAIL_PASSWORD, // Your email password
  },
});

export default async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  console.log("Contact form submission:", req.body);
  const { name, email, number, subject, text } = req.body;

  try {
    // Send email using Hostinger
    const mailOptions = {
      from: process.env.HOSTINGER_EMAIL, // Sender address
      to: process.env.HOSTINGER_EMAIL, // Your email where you want to receive messages
      replyTo: email, // So you can reply directly to the sender
      subject: `Contact Form: ${subject}`,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${number}
        Subject: ${subject}
        
        Message:
        ${text}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1177ae;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          <h3 style="color: #202647;">Message:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${text}</p>
        </div>
      `,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", response);
    
    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      error: "Error sending email", 
      details: error.message 
    });
  }
};
