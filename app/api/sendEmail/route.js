export async function POST(request) {
    const { name, email, title, content } = await request.json();

    const timestamp = new Date().toISOString();

    const message = `
📬 [Contact Form Submission]

👤 Name: ${name}
📧 Email: ${email}
📌 Title: ${title}
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
    });

    if (response.ok) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
        const error = await response.text();
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
}
