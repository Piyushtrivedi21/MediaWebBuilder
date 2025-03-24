import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/types';
import { apiRequest } from '@/lib/queryClient';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields to submit the form",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Office",
      details: "123 Innovation Drive\nSan Francisco, CA 94103"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@maidenmedia.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 2PM"
    }
  ];

  const socialMedia = [
    { icon: <Twitter className="w-5 h-5" />, link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#" },
    { icon: <Instagram className="w-5 h-5" />, link: "#" },
    { icon: <Facebook className="w-5 h-5" />, link: "#" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn()}
              className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
            >
              Get In <span className="text-[#2DD4BF]">Touch</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Ready to transform your digital presence? Reach out to us today for a consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn()}
              className="bg-[#121212] p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 font-opensans mb-2">Your Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#2DD4BF] transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 font-opensans mb-2">Email Address</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#2DD4BF] transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 font-opensans mb-2">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#2DD4BF] transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-opensans mb-2">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#2DD4BF] transition-colors duration-300"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.2)}
            >
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn(0.3 + index * 0.1)}
                    className="flex items-start"
                  >
                    <div className="text-[#2DD4BF] mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-montserrat font-medium mb-2">{item.title}</h4>
                      <p className="text-gray-300 font-opensans whitespace-pre-line">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media */}
              <motion.div 
                variants={fadeIn(0.7)}
                className="mt-12"
              >
                <h4 className="text-white font-montserrat font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.link} 
                      className="bg-[#2A2A2A] hover:bg-[#2DD4BF] text-white hover:text-[#121212] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Visit Our Office"
            subtitle="Find us at our San Francisco headquarters"
          />
          
          <div className="relative h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50475.69080291586!2d-122.43760989029236!3d37.7576074939094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625846124403!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about working with Maiden Media"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does it typically take to see results from your marketing efforts?",
                answer: "While results can vary based on your industry, competition, and current digital presence, most clients begin to see measurable improvements within 2-3 months. Long-term strategies like SEO typically take 4-6 months to show significant results."
              },
              {
                question: "Do you offer custom packages or only pre-defined service tiers?",
                answer: "We offer both pre-defined service tiers and fully customized solutions. Our team will work with you to understand your specific needs and goals to create a tailored marketing strategy that aligns with your budget and objectives."
              },
              {
                question: "How do you measure the success of your marketing campaigns?",
                answer: "We establish clear KPIs at the beginning of each campaign based on your business goals. These might include metrics such as website traffic, conversion rates, lead generation, engagement rates, or return on ad spend. We provide regular reports and analytics to track progress."
              },
              {
                question: "Can you work with my existing marketing team?",
                answer: "Absolutely! We can either supplement your in-house team or take full responsibility for specific marketing channels. Many of our clients have in-house marketers, and we collaborate closely with them to ensure all efforts are aligned and complementary."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className="bg-[#121212] p-6 rounded-lg border border-[#2A2A2A]"
              >
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 font-opensans">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
