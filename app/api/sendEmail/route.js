export async function POST(request) {
    try {
        const { name, email, title, content } = await request.json();

        // 입력값 검증
        if (!name || !email || !content) {
            return new Response(
                JSON.stringify({ success: false, error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const timestamp = new Date().toISOString();

        const message = `
📬 [Contact Form Submission]

👤 Name: ${name}
📧 Email: ${email}
📌 Title: ${title || 'No title'}
📝 Content: ${content}

🕒 Received at: ${timestamp}
        `;

        const formData = new URLSearchParams({
            token: process.env.PUSHOVER_APP_TOKEN,
            user: process.env.PUSHOVER_USER_KEY,
            title: 'New Contact Message',
            message,
            sound: 'bugle',
        });

        const response = await fetch('https://api.pushover.net/1/messages.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
            signal: AbortSignal.timeout(10000) // 10초 타임아웃
        });

        if (response.ok) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            const error = await response.text();
            console.error('Pushover API error:', error);
            return new Response(JSON.stringify({ success: false, error }), { status: 500 });
        }
    } catch (error) {
        console.error('Send email error:', error.message);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to send message' }),
            { status: 500 }
        );
    }
}
