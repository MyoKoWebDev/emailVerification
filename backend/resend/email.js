import { resend } from "./config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verify Your Email Address Now",
      html: `Verify your email address with this token : <strong>${verificationToken}</strong>`,
    });
  } catch (error) {
    console.log("error sending verification email", error);
    throw new Error("Error sending verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome form our website",
      html: `your email is ${email} and name is ${name}`,
    });
  } catch (error) {
    console.log("error sending verification email", error);
    throw new Error("Error sending verification email");
  }
};

export const sendPasswordResetEmail = async (email, resetToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Reset your password",
      html: `click <a href='${resetToken}'>here</a> to reset your password`,
    });
  } catch (error) {
    console.log("error reset pssword email", error);
    throw new Error("Error reset pssword email");
  }
};

export const sendResetScuccesEmail = async (email) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Password reset was successful",
      html: `Your password was reset successfully`,
    });
  } catch (error) {
    console.log("error sendResetScuccesEmail email", error);
    throw new Error("Error sendResetScuccesEmail email");
  }
};
