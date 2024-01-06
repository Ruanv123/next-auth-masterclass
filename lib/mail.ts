import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const sendTwoFactorTokenEMail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two factor authentication",
    html: `<p>Your 2fa code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>
      Click <a href="${resetLink}">here</a> to reset your password.
    </p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>
      Click <a href="${confirmLink}">here</a> to confirm email.
    </p>`,
  });
};