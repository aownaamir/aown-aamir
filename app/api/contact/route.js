import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.message) {
    return new Response(JSON.stringify({ message: "Uncomplete" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Aown's contact form submission",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `
        <div>
          <div style="display:flex; gap: 15px"><h3>Name:</h3> <p> ${body.name}</p></div>
          <div style="display:flex; gap: 15px"><h3>Email:</h3> <p> ${body.email}</p></div>
          <div style="display:flex; gap: 15px"><h3>Message:</h3> <p> ${body.message}</p></div>
          <div style="display:flex; gap: 15px"><h3>Rating:</h3> <p> ${body.rating}</p></div>
          </div>`,
    });
    return new Response(JSON.stringify({ success: true }), {});
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err.message }), {});
  }
}
