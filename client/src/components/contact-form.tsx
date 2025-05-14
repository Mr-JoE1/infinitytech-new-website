import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Please select a service' }),
  message: z.string().min(10, { message: 'Please enter a message (minimum 10 characters)' }),
  privacy: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy' }),
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: false,
    },
  });
  
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for contacting us. We will get back to you shortly.',
        variant: 'default',
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: 'Error sending message',
        description: error instanceof Error ? error.message : 'Please try again later',
        variant: 'destructive',
      });
    },
  });
  
  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };
  
  return (
    <form 
      id="contact-form" 
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
            {...register('name')}
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
          )}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            placeholder="Your Company Ltd."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            {...register('company')}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="john.doe@example.com"
            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
            {...register('email')}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 123-4567"
            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200`}
            {...register('phone')}
          />
          {errors.phone && (
            <div className="text-red-500 text-sm mt-1">{errors.phone.message}</div>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
          Service of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white`}
          {...register('service')}
        >
          <option value="" disabled>Select a service</option>
          <option value="cloud">Cloud Architecture</option>
          <option value="security">Cybersecurity Solutions</option>
          <option value="software">Custom Software Development</option>
          <option value="edge">Edge Computing</option>
          <option value="data">Data Analytics & AI</option>
          <option value="consulting">IT Consulting</option>
        </select>
        {errors.service && (
          <div className="text-red-500 text-sm mt-1">{errors.service.message}</div>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your project or inquiry..."
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-y`}
          {...register('message')}
        ></textarea>
        {errors.message && (
          <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
        )}
      </div>
      
      <div className="mb-6">
        <label className="flex items-start">
          <input
            type="checkbox"
            className={`mt-1 mr-3 ${errors.privacy ? 'border-red-500' : ''}`}
            {...register('privacy')}
          />
          <span className="text-gray-700 text-sm">
            I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to Infinity Technologies processing my data for the purpose of contacting me. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacy && (
          <div className="text-red-500 text-sm mt-1">{errors.privacy.message}</div>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
