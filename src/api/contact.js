const CONTACT_EMAIL = 'support@vinmoore.com';

export async function sendContactMessage(formData) {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Vinmoore website message from ${formData.name}`,
            _template: 'table',
            _captcha: 'false',
        }),
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
