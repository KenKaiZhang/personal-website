import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(req: Request) {
  const body = await req.json();
  const mailOption = {
    from: body.email,
    to: email,
    subject: `${body.name} reaching out from my site via ${body.email}`,
    text: body.message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pass,
    },
  });

  await transporter.sendMail(mailOption, (err: any) => {
    if (err) {
      return new Response("Failed to send message.", { status: 405 });
    } else {
      return new Response("Message sent successfully.", { status: 200 });
    }
  });
}
