// components/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import productData from './productData';

function Products() {
    return (
        <section className="min-h-screen bg-[#f7f8fa] pb-20 pt-32">
            <div className="page-shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">Product catalogue</p>
                    <h1 className="section-title mt-3">Quality chemicals for demanding operations</h1>
                    <p className="section-copy mt-4">
                        Browse core industrial and laboratory chemicals supplied with the consistency and care professional teams expect.
                    </p>
                </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {productData.map((product) => (
                    <div key={product.id} className="group overflow-hidden rounded-md border border-brandLine bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                        <div className="h-48 overflow-hidden bg-brandDark">
                            <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandColor">Available supply</p>
                            <h2 className="mt-2 text-xl font-extrabold text-brandDark">{product.name}</h2>
                            <p className="mt-2 min-h-[48px] text-sm leading-6 text-brandMuted">{product.description}</p>
                            <Link to={`/products/${product.id}`} className="primary-button mt-5 w-full">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default Products;
