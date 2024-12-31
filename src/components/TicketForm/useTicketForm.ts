import { useState, ChangeEvent, FormEvent } from 'react';
import { TicketFormData, TicketPriority } from './types';
import { sendTicketEmail } from '../../utils/email';

const initialFormData: TicketFormData = {
  subject: '',
  priority: 'low' as TicketPriority,
  description: '',
  name: '',
  email: ''
};

export const useTicketForm = () => {
  const [formData, setFormData] = useState<TicketFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendTicketEmail(formData);
      setFormData(initialFormData);
      alert('Ticket submitted successfully! We will get back to you soon.');
    } catch (err) {
      setError('Failed to submit ticket. Please try again later.');
      console.error('Error submitting ticket:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error
  };
};