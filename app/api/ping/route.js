export async function POST(request) {
  try {
    const clientInfo = await request.json();

    // Extract IP address from headers
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown IP';

    // Fetch geo data with error handling
    let locationInfo = 'Unknown Location';
    let isp = 'Unknown ISP';

    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
        signal: AbortSignal.timeout(10000) // 10초 타임아웃
      });

      if (geoRes.ok) {
        const geoData = await geoRes.json();
        locationInfo = `${geoData.city || 'Unknown'}, ${geoData.region || 'Unknown'}, ${geoData.country_name || 'Unknown'}`;
        isp = geoData.org || 'Unknown ISP';
      }
    } catch (geoError) {
      console.error('Geo API error:', geoError.message);
      // Fallback: 위치 정보 없이 계속 진행
    }

  // Get current server time
  const timestamp = new Date().toISOString();
  const method = request.method;

  // Additional client data
  const clientTimeZone = clientInfo.timeZone || 'Unknown';
  const screen = clientInfo.screen || 'Unknown';
  const referrer = clientInfo.referrer || 'Unknown';
  const currentURL = clientInfo.currentURL || 'Unknown';
  const network = clientInfo.network || 'Unknown';

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
Current URL: ${currentURL}
Network: ${network}
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
    console.error('Ping route error:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}