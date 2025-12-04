import { Injectable } from '@angular/core';
import emailjs,{ EmailJSResponseStatus } from "@emailjs/browser";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class EmailService {
  
    constructor() {}
  
    sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
      return emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      );
    }
}