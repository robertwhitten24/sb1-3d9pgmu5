import React from 'react';
import TicketForm from '../components/TicketForm/TicketForm';

const SupportTicket = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit a Support Ticket</h1>
            <p className="text-gray-600">
              Need help? Submit a ticket and our support team will get back to you as soon as possible.
            </p>
          </div>
          <TicketForm />
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;