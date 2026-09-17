// components/Hero.js
import React from 'react';
import homeImage1 from './homeimage/1.jpg';
import homeImage2 from './homeimage/2.jpg';
import homeImage3 from './homeimage/3.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    const slides = [homeImage1, homeImage2, homeImage3];
    const carouselSlides = [...slides, homeImage1];

    return (
        <section 
            id="home" 
            className="relative h-screen min-h-[640px] overflow-hidden bg-brandDark pt-24 text-white"
        >
            <div className="absolute inset-0">
                <div className="hero-carousel-track flex h-full w-[400%]">
                    {carouselSlides.map((slide, index) => (
                        <img
                            key={`${slide}-${index}`}
                            src={slide}
                            alt={`Vinmoore chemical supply slide ${(index % slides.length) + 1}`}
                            className="h-full w-1/4 flex-none object-contain object-center md:object-cover"
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 via-brandDark/72 to-brandDark/25" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brandDark/50 to-transparent" />
            </div>

            <div className="page-shell relative z-10 flex h-full min-h-[calc(640px-6rem)] items-start md:items-center">
                <div className="max-w-3xl pt-8 pb-16 md:py-16">
                    <p className="eyebrow text-red-200">Industrial chemical supply</p>
                    <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
                        Vinmoore Ventures
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                        Reliable chemical raw materials for manufacturers, laboratories, and industrial operations that need dependable sourcing and responsive service.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link to="/products" className="primary-button">
                            Explore Products
                        </Link>
                        <Link to="/contact" className="secondary-button border-white/20 bg-white/10 text-white hover:bg-white hover:text-brandDark">
                            Request Supply
                        </Link>
                    </div>
                    <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                        {['Since 1998', 'Quality focused', 'Industrial scale'].map((item) => (
                            <div key={item} className="border-l-2 border-brandColor bg-white/8 px-4 py-3 backdrop-blur">
                                <p className="text-sm font-bold uppercase tracking-wide text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
