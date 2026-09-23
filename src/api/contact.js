const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

export async function sendContactMessage(formData) {
    const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error('Message failed to send');
    }
}
