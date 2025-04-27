export async function POST(request) {
  const clientInfo = await request.json();

  // Extract IP address from headers
  const ip =
    request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown IP';

  // Fetch geo data
  const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
  const geoData = await geoRes.json();
  const locationInfo = `${geoData.city}, ${geoData.region}, ${geoData.country_name}`;
  const isp = geoData.org;

  // Get current server time
  const timestamp = new Date().toISOString();
  const method = request.method;

  // Additional client data
  const clientTimeZone = clientInfo.timeZone || 'Unknown';
  const screen = clientInfo.screen || 'Unknown';
  const referrer = clientInfo.referrer || 'Unknown';
  const cookies = clientInfo.cookies || 'Unknown';
  const currentURL = clientInfo.currentURL || 'Unknown';
  const network = clientInfo.network || 'Unknown';
  const battery = clientInfo.battery || 'Unknown';

  // Compose detailed message
  const message = `
Time: ${timestamp}
Method: ${method}
IP: ${ip}
Location: ${locationInfo}
ISP: ${isp}
UA: ${clientInfo.userAgent}
Platform: ${clientInfo.platform}
Language: ${clientInfo.language}
Timezone: ${clientTimeZone}
Screen: ${screen}
Referrer: ${referrer}
Cookies: ${cookies}
Current URL: ${currentURL}
Network: ${network}
Battery: ${battery}
  `;

  const formData = new URLSearchParams({
    token: process.env.PUSHOVER_APP_TOKEN,
    user: process.env.PUSHOVER_USER_KEY,
    title: 'Ping from changhyun.me',
    message,
    sound: 'bugle'
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