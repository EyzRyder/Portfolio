import nodemailer from "nodemailer";
import environment from "./environmentConfig";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: environment.email.from,
    pass: environment.email.pass,
  },
});

export const mailOptions = {
  from: environment.email.from,
  to: environment.email.to,
};
