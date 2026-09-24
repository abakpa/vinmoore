// components/Contact.js
import React, { useRef, useState } from 'react';
import { sendContactMessage } from '../api/contact';
import MessageModal from './MessageModal';

function Contact() {
    const phoneNumbers = ['08033085045', '08059544825', '09045420912'];
    const address = '415, Apapa Oshodi Expressway, by Iyana Tire Junction, Beside YTK Filling Station Ilasamaja P.O.Box 3725, Mushin Lagos';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [modal, setModal] = useState({ isOpen: false, type: 'success', title: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submitLockRef = useRef(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitLockRef.current) {
            return;
        }

        submitLockRef.current = true;
        setIsSubmitting(true);

        try {
            await sendContactMessage(formData);
            setFormData({ name: '', email: '', message: '' });
            setModal({
                isOpen: true,
                type: 'success',
                title: 'Message Sent',
                message: 'Thank you for reaching out. Our team will review your request and get back to you shortly.',
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setModal({
                isOpen: true,
                type: 'error',
                title: 'Message Failed',
                message: error.message || 'Your message could not be sent right now. Please try again later.',
            });
        } finally {
            submitLockRef.current = false;
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white py-20">
            <MessageModal
                isOpen={modal.isOpen}
                type={modal.type}
                title={modal.title}
                message={modal.message}
                onClose={() => setModal((prevModal) => ({ ...prevModal, isOpen: false }))}
            />
            <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                    <p className="eyebrow">Contact us</p>
                    <h2 className="section-title mt-3">Tell us what your operation needs.</h2>
                    <p className="section-copy mt-5">Get in touch for product availability, sourcing requirements, or general enquiries.</p>
                    <div className="mt-8 rounded-md border border-brandLine bg-[#fafafa] p-5">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Response focus</p>
                        <p className="mt-2 text-brandMuted">Product enquiries, supply requests, and partnership discussions.</p>
                    </div>
                    <div className="mt-5 grid gap-3">
                        <div className="rounded-md border border-brandLine bg-white p-5 shadow-soft">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Phone</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {phoneNumbers.map((phoneNumber) => (
                                    <a key={phoneNumber} href={`tel:${phoneNumber}`} className="rounded bg-[#fafafa] px-3 py-2 text-sm font-bold text-brandDark transition hover:text-brandColor">
                                        {phoneNumber}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-md border border-brandLine bg-white p-5 shadow-soft">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Address</p>
                            <p className="mt-3 text-sm leading-6 text-brandMuted">{address}</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="rounded-md border border-brandLine bg-white p-6 shadow-soft md:p-8">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="field mb-4" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="field mb-4" />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" required className="field mb-4"></textarea>
                    <button type="submit" disabled={isSubmitting} className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70">
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
