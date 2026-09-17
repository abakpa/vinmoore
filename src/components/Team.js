// src/components/Team.js
import React from 'react';
import research from '../components/images/R&D.jpeg';
import sales from '../components/images/S&M2.jpeg';
import operations from '../components/images/OPERATIONS2.jpeg';
import support from '../components/images/contact2.avif';
import ceo from '../components/images/vinmoore ceo.jpg';

function Team() {
    const departments = [
        {
            name: "Research and Development",
            description: "Focuses on creating innovative solutions and improving existing products.",
            image: research, // Replace with the actual image path
        },
        {
            name: "Sales and Marketing",
            description: "Responsible for promoting products and building customer relationships.",
            image: sales, // Replace with the actual image path
        },
        {
            name: "Operations",
            description: "Ensures smooth day-to-day business activities and logistics management.",
            image: operations, // Replace with the actual image path
        },
        {
            name: "Customer Support",
            description: "Provides assistance and solutions to our valued customers.",
            image: support, // Replace with the actual image path
        },
    ];

    return (
        <main className="bg-[#f7f8fa] pb-20 pt-32">
            <div className="page-shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">Leadership and departments</p>
                    <h1 className="section-title mt-3">Meet the people behind Vinmoore Ventures</h1>
                    <p className="section-copy mt-4">
                        The company is led by experienced professionals focused on reliable supply, customer service, and long-term industry relationships.
                    </p>
                </div>

            <div className="mt-12 overflow-hidden rounded-md border border-brandLine bg-white shadow-lift lg:grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="bg-brandDark p-8 text-white md:p-10">
                    <img src={ceo} alt="Chief, Sir Vincent Uzuegbu" className="h-80 w-full rounded-md object-cover object-[50%_28%] shadow-2xl shadow-black/30 sm:h-96 lg:h-64 lg:object-top" />
                    <p className="mt-6 text-2xl font-extrabold">Chief, Sir Vincent Uzuegbu</p>
                    <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-red-200">Founder/CEO</h2>
                </div>
                <div className="p-8 md:p-10">
                    <p className="section-copy text-base">
                        Chief, Sir Vincent Uzuegbu, the Founder and Chief Executive Officer of Vinmoore Ventures Limited, is a visionary entrepreneur and leader with a profound passion for the chemical industry. With almost three decades of experience, Chief Uzuegbu has played a pivotal role in the importation and distribution of chemical raw materials in Nigeria. Since the inception of Vinmoore Ventures in 1998, he has steered the company with a commitment to innovation, integrity, and customer satisfaction.
                    </p>
                    <p className="section-copy mt-4 text-base">
                        Under his leadership, Vinmoore Ventures has grown into a recognized player in the chemical industry, known for high-quality products and excellent service delivery. His strategic vision continues to guide the company toward stronger partnerships, ethical operations, and dependable support for customers.
                    </p>
                </div>
            </div>

            <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="eyebrow">Departments</p>
                    <h2 className="section-title mt-3">Specialized teams, one service standard</h2>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-md border border-brandLine bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                    >
                        <img
                            src={department.image}
                            alt={department.name}
                            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-extrabold text-brandDark">{department.name}</h3>
                            <p className="mt-2 text-sm leading-6 text-brandMuted">{department.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </main>
    );
}

export default Team;
