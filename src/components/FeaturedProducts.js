// components/FeaturedProducts.js
import React from 'react';
import ProductCard from './ProductCard';
import productData from './productData';
import { Link } from 'react-router-dom';

function FeaturedProducts() {
    const products = productData.slice(0, 3);

    return (
        <section id="products" className="bg-[#f7f8fa] py-20">
            <div className="page-shell">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow">Product range</p>
                        <h2 className="section-title mt-3">Featured chemicals</h2>
                    </div>
                    <Link to="/products" className="secondary-button">
                        View All Products
                    </Link>
                </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
