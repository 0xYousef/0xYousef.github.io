declare module '@emailjs/browser' {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface EmailJS {
    send(
      serviceId: string,
      templateId: string,
      templateParams: any,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  }

  const emailjs: EmailJS;
  export default emailjs;
  export { EmailJSResponseStatus };
}

