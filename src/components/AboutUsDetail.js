// components/AboutUsDetail.js
import React from 'react';
import aboutImage from '../components/images/about1.jpeg';
import missionImage from '../components/images/mission 2.jpeg';
import visionImage from '../components/images/vison.jpeg';
import valueImage from '../components/images/value 2.jpeg';
import jebsenLogo from '../components/images/jebsen.svg';
import cosmoLogo from '../components/images/cosmo vinmoore.png';
import reuseLogo from '../components/images/reuse vinmoore.png';
import tianjinLogo from '../components/images/Tianjin vinmoore.jpeg';

function AboutUsDetail() {
    const partners = [
        { name: 'Jebsen', logo: jebsenLogo },
        { name: 'Cosmo', logo: cosmoLogo },
        { name: 'Reuse', logo: reuseLogo },
        { name: 'Tianjin', logo: tianjinLogo },
    ];

    return (
        <section className="bg-white">
            <div
                className="relative flex min-h-[78vh] items-center bg-cover bg-center pt-24 text-white"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(17,19,23,0.92), rgba(17,19,23,0.56)), url(${aboutImage})`
                }}
            >
                <div className="page-shell">
                    <div className="max-w-3xl py-16">
                        <p className="eyebrow text-red-200">About us</p>
                        <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">A trusted supply partner since 1998.</h1>
                        <p className="mt-6 text-lg leading-8 text-white/78">
                        Welcome to Vinmoore Ventures. We are a leading supplier and importer of high-quality chemicals for various industries,
                        incorporated as a private limited liability company on November 20th, 1998.
                        With years of experience and a commitment to quality, we strive to meet the needs of our customers and contribute to
                        the advancement of science and industry.
                        </p>
                    </div>
                </div>
            </div>

            <div className="page-shell space-y-12 py-20">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <img src={missionImage} alt="Mission" className="h-80 w-full rounded-md object-cover shadow-soft" />
                    <div>
                        <p className="eyebrow">Our mission</p>
                        <h2 className="section-title mt-3">Reliable service backed by qualified people and modern facilities.</h2>
                        <p className="section-copy mt-5">
                            To provide qualitative and reliable services to the satisfaction of our customers and create value for all stakeholders by deploying effective management systems and modern facilities managed by qualified personnel.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <p className="eyebrow">Our vision</p>
                        <h2 className="section-title mt-3">Setting a higher standard for chemical supply.</h2>
                        <p className="section-copy mt-5">
                            Our vision is to be the most trusted chemical supplier, empowering industries to innovate and excel. We aspire to set new standards for reliability and quality in the chemical supply industry.
                        </p>
                    </div>
                    <img src={visionImage} alt="Vision" className="h-80 w-full rounded-md object-cover shadow-soft" />
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <img src={valueImage} alt="Core Values" className="h-80 w-full rounded-md object-cover shadow-soft" />
                    <div>
                        <p className="eyebrow">Core values</p>
                        <h2 className="section-title mt-3">The principles behind every supply relationship.</h2>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                ['Integrity', 'Honesty, transparency, and respect.'],
                                ['Loyalty', 'Lasting relationships built on trust.'],
                                ['Customer Focus', 'Clients at the center of every decision.'],
                                ['Standards', 'High expectations for products and service.'],
                                ['Innovation', 'New ideas and continual improvement.'],
                            ].map(([title, copy]) => (
                                <div key={title} className="rounded-md border border-brandLine bg-[#fafafa] p-4">
                                    <p className="font-extrabold text-brandDark">{title}</p>
                                    <p className="mt-1 text-sm leading-6 text-brandMuted">{copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f7f8fa] py-20">
                <div className="page-shell text-center">
                <p className="eyebrow">Clients and partners</p>
                <h2 className="section-title mt-3">Trusted across industries</h2>
                <p className="section-copy mx-auto mt-4 max-w-2xl">
                    We are proud to collaborate with top companies and organizations across various industries. Our clients and partners
                    trust us to provide high-quality chemicals that meet their specific needs.
                </p>
                <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex h-28 items-center justify-center rounded-md border border-brandLine bg-white p-5 shadow-soft">
                            <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-20 object-contain" />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsDetail;
