// components/ContactUs.js
import React, { useRef, useState } from 'react';
import { sendContactMessage } from '../api/contact';
import MessageModal from './MessageModal';
import contactImage from '../components/images/contact.webp'; // Add the actual image path
import contactImage2 from '../components/images/contact5.jpeg'; // Add the actual image path

function ContactUsDetail() {
    const phoneNumbers = ['08033085045', '08059544825', '09045420912'];
    const address = '415, Apapa Oshodi Expressway, by Iyana Tire Junction, Beside YTK Filling Station Ilasamaja P.O.Box 3725, Mushin Lagos';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modal, setModal] = useState({ isOpen: false, type: 'success', title: '', message: '' });
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
        <section className="bg-white">
            <MessageModal
                isOpen={modal.isOpen}
                type={modal.type}
                title={modal.title}
                message={modal.message}
                onClose={() => setModal((prevModal) => ({ ...prevModal, isOpen: false }))}
            />
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
                        className="h-80 w-full object-cover lg:h-[420px]"
                    />
                    <div className="border border-t-0 border-brandLine bg-white p-6 md:p-8">
                        <p className="eyebrow">Contact details</p>
                        <div className="mt-5 grid gap-4">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Phone</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {phoneNumbers.map((phoneNumber) => (
                                        <a key={phoneNumber} href={`tel:${phoneNumber}`} className="rounded bg-[#fafafa] px-3 py-2 text-sm font-bold text-brandDark transition hover:text-brandColor">
                                            {phoneNumber}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brandColor">Address</h3>
                                <p className="mt-3 text-sm leading-6 text-brandMuted">{address}</p>
                            </div>
                        </div>
                    </div>
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
      <button type="submit" disabled={isSubmitting} className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
                </div>
              
            </div>
        </section>
    );
}

export default ContactUsDetail;
