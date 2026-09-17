// components/Contact.js
import React from 'react';

function Contact() {
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
                <form className="rounded-md border border-brandLine bg-white p-6 shadow-soft md:p-8">
                    <input type="text" placeholder="Name" className="field mb-4" />
                    <input type="email" placeholder="Email" className="field mb-4" />
                    <textarea placeholder="Message" rows="5" className="field mb-4"></textarea>
                    <button className="primary-button w-full">
                        Submit
                </button>
            </form>
            </div>
        </section>
    );
}

export default Contact;
