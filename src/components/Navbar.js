// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const logo = `${process.env.PUBLIC_URL}/newlogo.png`;
    const links = [
        { to: '/', label: 'Home' },
        { to: '/products', label: 'Products' },
        { to: '/about', label: 'About' },
        { to: '/team', label: 'Team' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brandDark/90 text-white shadow-2xl shadow-black/10 backdrop-blur-xl">
            <div className="page-shell flex min-h-[64px] flex-nowrap items-center justify-between gap-2 py-2 md:min-h-[76px] md:gap-4 md:py-3">
                <Link to="/" className="flex shrink-0 items-center gap-2 md:gap-3">
                    <img src={logo} alt="Vinmoore Ventures logo" className="h-9 w-9 rounded-md object-cover shadow-lg shadow-red-950/30 md:h-12 md:w-12" />
                    <div className="hidden leading-tight sm:block">
                        <p className="text-lg font-extrabold tracking-wide">Vinmoore</p>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">Ventures</p>
                    </div>
                </Link>

                <div className="flex min-w-0 flex-nowrap items-center gap-0.5 overflow-x-auto rounded-md border border-white/10 bg-white/5 p-1 sm:gap-1">
                    {links.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="shrink-0 rounded px-2 py-2 text-xs font-semibold text-white/78 transition hover:bg-white hover:text-brandDark sm:px-3 sm:text-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


