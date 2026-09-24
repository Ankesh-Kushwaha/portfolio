import emailjs from "emailjs-com";
export const sendEmail = async (name, email, message) => {
  try {
    const templateParams = {
      from_name: name,
      reply_to: email,
      message,
      date: new Date().toLocaleString(),
    };

    const res = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true, data: res };
  } catch (error) {
    return { success: false, error };
  }
};
