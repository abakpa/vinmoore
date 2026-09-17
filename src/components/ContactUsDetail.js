// components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import contactImage from '../components/images/contact.webp'; // Add the actual image path
import contactImage2 from '../components/images/contact5.jpeg'; // Add the actual image path

function ContactUsDetail() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send form data to the server
        await axios.post('http://localhost:3002/send-email', formData);
        
        // Show success alert without page navigation
        alert('Message sent successfully!');
        
        // Optionally reset the form fields
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      }
    };
    return (
        <section className="bg-white">
            <div
                className="relative flex min-h-[70vh] items-center bg-cover bg-center pt-24 text-white"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(17,19,23,0.92), rgba(17,19,23,0.52)), url(${contactImage2})`
                }}
            >
                <div className="page-shell">
                    <div className="max-w-3xl py-16">
                    <p className="eyebrow text-red-200">Contact</p>
                    <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">Let's discuss your chemical supply needs.</h1>
                    <p className="mt-6 text-lg leading-8 text-white/78">
                        Reach out with inquiries, questions, or feedback, and our team will be happy to assist.
                    </p>
                    </div>
                </div>
            </div>

            <div className="page-shell grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                <div className="overflow-hidden rounded-md shadow-soft">
                    <img
                        src={contactImage}
                        alt="Contact"
                        className="h-full min-h-[420px] w-full object-cover"
                    />
                </div>
                <div className="rounded-md border border-brandLine bg-white p-6 shadow-soft md:p-8">
                    <p className="eyebrow">Get in touch</p>
                    <h2 className="mt-3 text-3xl font-extrabold text-brandDark">Send a message</h2>
                    <form id="contactForm" onSubmit={handleSubmit} className="mt-7 space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-bold text-brandDark">Name</label>
        <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange}  required className="field"/>
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold text-brandDark">Email</label>
        <input type="email" id="email" name="email"  value={formData.email} onChange={handleChange} required className="field"/>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-brandDark">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required className="field"></textarea>
      </div>
      <button type="submit" className="primary-button w-full">Send Message</button>
    </form>
                </div>
              
            </div>
        </section>
    );
}

export default ContactUsDetail;
