// components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section id="about" className="bg-white py-20">
            <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="eyebrow">About Vinmoore</p>
                    <h2 className="section-title mt-3">Dependable chemical supply built on standards.</h2>
                </div>
                <div>
                    <p className="section-copy">
                        Vinmoore Ventures is dedicated to providing high-quality chemical products for industrial and laboratory use. Our commitment is to deliver exceptional service and reliable products that meet our customers' needs.
                    </p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-3">
                        {[
                            ['Import', 'Trusted sourcing channels'],
                            ['Supply', 'Responsive fulfilment'],
                            ['Support', 'Customer-first service'],
                        ].map(([title, copy]) => (
                            <div key={title} className="rounded-md border border-brandLine bg-[#fafafa] p-4">
                                <p className="text-lg font-extrabold text-brandDark">{title}</p>
                                <p className="mt-1 text-sm leading-6 text-brandMuted">{copy}</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/about" className="primary-button mt-8">
                        More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;
