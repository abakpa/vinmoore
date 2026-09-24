import React from 'react';

function MessageModal({ isOpen, type, title, message, onClose }) {
    if (!isOpen) {
        return null;
    }

    const isSuccess = type === 'success';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brandDark/70 px-4 backdrop-blur">
            <div className="w-full max-w-md overflow-hidden rounded-md border border-brandLine bg-white shadow-2xl shadow-black/30">
                <div className={`h-1.5 ${isSuccess ? 'bg-green-600' : 'bg-brandColor'}`} />
                <div className="p-6 text-center md:p-8">
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl font-black text-white ${isSuccess ? 'bg-green-600' : 'bg-brandColor'}`}>
                        {isSuccess ? '✓' : '!'}
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold text-brandDark">{title}</h2>
                    <p className="mt-3 text-sm leading-6 text-brandMuted">{message}</p>
                    <button type="button" onClick={onClose} className="primary-button mt-7 w-full">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MessageModal;
