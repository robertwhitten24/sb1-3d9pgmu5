import emailjs from '@emailjs/browser';
import { TicketFormData } from '../components/TicketForm/types';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendTicketEmail = async (ticketData: TicketFormData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        subject: ticketData.subject,
        priority: ticketData.priority,
        description: ticketData.description,
        name: ticketData.name,
        email: ticketData.email,
      },
      EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};