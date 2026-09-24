const CONTACT_API_URL = 'http://localhost:3002';

export async function sendContactMessage(formData) {
    const response = await fetch(`${CONTACT_API_URL}/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        let errorMessage = 'Message failed to send';

        try {
            const errorData = await response.json();
            errorMessage = errorData.details || errorData.error || errorMessage;
        } catch (error) {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage);
    }
}
