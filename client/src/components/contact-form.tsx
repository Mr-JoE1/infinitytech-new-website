import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { formatPhoneNumber } from '@/lib/utils';
import { Mail, Building2, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Please select a service' }),
  message: z.string().min(10, { message: 'Please enter a message (minimum 10 characters)' }),
  privacy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: true, // This will avoid the validation error
    },
    mode: 'onBlur',
  });
  
  // For phone number formatting as user types
  const phone = watch('phone');
  
  React.useEffect(() => {
    if (phone && touchedFields.phone) {
      setValue('phone', formatPhoneNumber(phone));
    }
  }, [phone, setValue, touchedFields.phone]);
  
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      setSubmissionState('loading');
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setSubmissionState('success');
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for contacting us. Our team will get back to you shortly.',
        variant: 'default',
      });
      reset();
      setTimeout(() => setSubmissionState('idle'), 3000);
    },
    onError: (error) => {
      setSubmissionState('error');
      toast({
        title: 'Error sending message',
        description: error instanceof Error ? error.message : 'Please try again later',
        variant: 'destructive',
      });
    },
  });
  
  // Use the mutation directly with the form handler
  const submitForm = (data: ContactFormValues) => {
    mutation.mutate(data);
  };
  
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 relative overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 -ml-16 -mb-16 rounded-full"></div>
      
      {/* Success state overlay */}
      {submissionState === 'success' && (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Thank you for reaching out. Our team will get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setSubmissionState('idle')}
            className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      )}
      
      <form 
        id="contact-form" 
        className={`relative z-0 ${submissionState === 'success' ? 'opacity-0' : 'opacity-100'}`}
        onSubmit={handleSubmit(submitForm)}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className={cn(
                  "w-full px-4 py-3 pl-11 border rounded-lg transition-all duration-200 bg-gray-50 focus:bg-white",
                  errors.name 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                    : "border-gray-300 focus:border-primary focus:ring-primary/20"
                )}
                {...register('name')}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
            )}
          </div>
          
          <div className="relative">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Company
            </label>
            <div className="relative">
              <input
                type="text"
                id="company"
                placeholder="Your Company Ltd."
                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-primary transition-all duration-200"
                {...register('company')}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Building2 className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className={cn(
                  "w-full px-4 py-3 pl-11 border rounded-lg transition-all duration-200 bg-gray-50 focus:bg-white",
                  errors.email 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                    : "border-gray-300 focus:border-primary focus:ring-primary/20"
                )}
                {...register('email')}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
            )}
          </div>
          
          <div className="relative">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-primary transition-all duration-200"
                {...register('phone')}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service of Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            className={cn(
              "w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none appearance-none",
              errors.service 
                ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                : "border-gray-300 focus:border-primary focus:ring-primary/20"
            )}
            {...register('service')}
          >
            <option value="" disabled>Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                {service.title}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
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
            className={cn(
              "w-full px-4 py-3 border rounded-lg resize-y bg-gray-50 focus:bg-white transition-all duration-200",
              errors.message 
                ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                : "border-gray-300 focus:border-primary focus:ring-primary/20"
            )}
            {...register('message')}
          ></textarea>
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
          )}
        </div>
        
        <div className="mb-8">
          <label className="flex items-start">
            <input
              type="checkbox"
              className={cn(
                "mt-1 mr-3 w-4 h-4 rounded border-2 text-primary focus:ring-primary/20",
                errors.privacy ? "border-red-500" : "border-gray-300"
              )}
              {...register('privacy')}
            />
            <span className="text-gray-700 text-sm">
              I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to Infinity Technologies processing my data for the purpose of contacting me. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.privacy && (
            <div className="text-red-500 text-sm mt-1 ml-7">{errors.privacy.message}</div>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          disabled={isSubmitting || submissionState === 'loading'}
        >
          {isSubmitting || submissionState === 'loading' ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
