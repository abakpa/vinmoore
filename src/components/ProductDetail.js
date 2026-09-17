// components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productData from './productData';

function ProductDetail() {
    const { id } = useParams();
    const product = productData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p className="mt-32 text-center text-brandMuted">Product not found.</p>;
    }

    return (
        <section className="min-h-screen bg-[#f7f8fa] py-32">
            <div className="page-shell">
                <div className="overflow-hidden rounded-md border border-brandLine bg-white shadow-lift lg:grid lg:grid-cols-2">
                    <div className="min-h-[360px] bg-brandDark">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-8 md:p-12">
                        <p className="eyebrow">Product details</p>
                        <h1 className="mt-3 text-4xl font-black text-brandDark">{product.name}</h1>
                        <p className="mt-5 text-lg leading-8 text-brandMuted">{product.description}</p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {['Industrial use', 'Reliable sourcing', 'Quality checked', 'Customer support'].map((item) => (
                                <div key={item} className="rounded-md border border-brandLine bg-[#fafafa] px-4 py-3 text-sm font-bold text-brandInk">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <a href="/contact" className="primary-button mt-8">
                            Request This Product
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
