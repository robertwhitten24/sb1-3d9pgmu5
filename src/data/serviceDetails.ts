import { serviceCategories } from './serviceCategories';

export const serviceDetails = serviceCategories.map(service => ({
  ...service,
  features: [
    // Customize these features for each service
    'Professional diagnosis and repair',
    'Expert technicians',
    'Quick turnaround time',
    'Quality guaranteed',
    'Competitive pricing'
  ],
  pricing: 'Starting from £50/hour. Contact us for a detailed quote.'
}));