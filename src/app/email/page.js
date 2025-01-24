"use server";
import { Resend } from "resend";

const Sendemail = async (to, subject, html) => {
  const resend = new Resend(process.env.RESEND_KEY);

  try {
    await resend.emails.send({
      from: "admin@infinityfundltd.in",
      to: to,
      subject: subject,
      html: html, // Changed 'react' to 'html'
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default Sendemail;
