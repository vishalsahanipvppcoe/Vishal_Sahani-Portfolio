'use server';

import nodemailer from 'nodemailer';

async function sendEmail(
  fullname: string,
  email: string,
  message: string
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST || 'smtp.gmail.com',
      port: Number(process.env.NODEMAILER_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.NODEMAILER_USER}>`,
      to: 'vishalsahani4747@gmail.com',
      replyTo: email,
      subject: `📩 New Portfolio Message from ${fullname}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>

          <hr />

          <h3>Message</h3>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: "Message sent successfully! I'll get back to you soon. 🚀",
    };
  } catch (error: any) {
    console.error('MAIL ERROR:', error);

    return {
      error:
        'Unable to send email right now. Please try again later.',
    };
  }
}

export async function sendMessageServerAction(
  _previousState: any,
  formData: FormData
) {
  const fullname = String(formData.get('fullname') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (fullname.length < 3) {
    return {
      fullnameError: 'Please enter your full name.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      emailError: 'Please enter a valid email address.',
    };
  }

  if (message.length < 10) {
    return {
      messageError: 'Message must contain at least 10 characters.',
    };
  }

  const response = await sendEmail(
    fullname,
    email,
    message
  );

  if (response.success) {
    return {
      success: response.success,
    };
  }

  return {
    error:
      response.error ||
      'Something went wrong. Please try again later.',
  };
}