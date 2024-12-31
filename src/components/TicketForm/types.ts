export type TicketPriority = 'low' | 'medium' | 'high';

export interface TicketFormData {
  subject: string;
  priority: TicketPriority;
  description: string;
  name: string;
  email: string;
}