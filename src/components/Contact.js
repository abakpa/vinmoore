// components/Contact.js
import React, { useState } from 'react';
import { sendContactMessage } from '../api/contact';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            await sendContactMessage(formData);
            setFormData({ name: '', email: '', message: '' });
            setStatus('Message sent successfully.');
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Message failed to send. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white py-20">
            <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                    <p className="eyebrow">Contact us</p>
                    <h2 className="section-title mt-3">Tell us what your operation needs.</h2>
                    <p className="section-copy mt-5">Get in touch for product availability, sourcing requirements, or general enquiries.</p>
                    <div className="mt-8 rounded-md border border-brandLine bg-[#fafafa] p-5">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Response focus</p>
                        <p className="mt-2 text-brandMuted">Product enquiries, supply requests, and partnership discussions.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="rounded-md border border-brandLine bg-white p-6 shadow-soft md:p-8">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="field mb-4" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="field mb-4" />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" required className="field mb-4"></textarea>
                    <button type="submit" disabled={isSubmitting} className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70">
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                    {status && <p className="mt-4 text-sm font-semibold text-brandMuted">{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;
