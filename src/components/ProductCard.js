// components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="group overflow-hidden rounded-md border border-brandLine bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="relative h-56 overflow-hidden bg-brandDark">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brandDark/70 to-transparent" />
            </div>
            <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandColor">Chemical</p>
                <h3 className="mt-2 text-xl font-extrabold text-brandDark">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-brandMuted">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductCard;
