import React from 'react';
// import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import FeaturedProducts from './FeaturedProducts';
import Contact from './Contact';
// import Footer from './Footer';

const Home = () =>{
    return (
        <div className="bg-[#f7f8fa]">
            <Hero />
            <About />
            <FeaturedProducts />
            <Contact />
        </div>
    );
}

export default Home;
