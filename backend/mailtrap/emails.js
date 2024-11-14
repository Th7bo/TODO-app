import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "Please verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationToken}", verificationToken),
      category: "Email Verification"
    });

    console.log(`Email sent to ${email}`, response);
  } catch (error) {
    console.log(error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  console.log("recipient");

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      template_uuid: "c687eba9-00bd-4646-8147-20de5bba4004",
      template_variables: {
        name: name
      }
    });

    console.log(`Email sent to ${email}`, response);
  } catch (error) {
    console.log(error);
  }
};
