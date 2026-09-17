// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const logo = `${process.env.PUBLIC_URL}/newlogo.png`;
    const links = [
        { to: '/', label: 'Home' },
        { to: '/products', label: 'Products' },
        { to: '/about', label: 'About' },
        { to: '/team', label: 'Team' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <footer className="bg-brandDark text-white">
            <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Vinmoore Ventures logo" className="h-14 w-14 rounded-md object-cover" />
                    <div>
                        <p className="text-xl font-extrabold">Vinmoore Ventures</p>
                        <p className="mt-1 max-w-md text-sm leading-6 text-white/60">Quality chemical sourcing, reliable supply, and responsive service for industry and laboratory needs.</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 md:justify-end">
                    {links.map((item) => (
                        <Link key={item.to} to={item.to} className="text-sm font-semibold text-white/70 transition hover:text-white">
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
                <p>© 2026 Vinmoore Ventures. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
