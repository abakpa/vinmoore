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

    let responseData = null;

    try {
        responseData = await response.json();
    } catch (error) {
        responseData = null;
    }

    if (!response.ok) {
        const errorMessage = responseData?.message || responseData?.error || 'Message failed to send';

        throw new Error(errorMessage);
    }

    if (responseData?.success === false || responseData?.success === 'false' || responseData?.error) {
        throw new Error(responseData.message || responseData.error || 'Message failed to send');
    }
}
