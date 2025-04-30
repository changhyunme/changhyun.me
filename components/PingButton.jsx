'use client';

const PingButton = ({ name, className }) => {
  const handleClick = async () => {
    const battery = await navigator.getBattery();
    const connection = navigator.connection || navigator.webkitConnection || {};
    
    const clientInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: `${window.screen.width}x${window.screen.height} @${window.devicePixelRatio}x`,
      referrer: document.referrer,
      network: `${connection.effectiveType || 'unknown'}, ${connection.downlink || 'unknown'} Mbps`,
      battery: `Level: ${battery.level * 100}%, Charging: ${battery.charging}`,
    };

    const res = await fetch('/api/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clientInfo),
    });

    if (res.ok) {
      alert('Ping Successful!');
    } else {
      alert('Push failed!');
    }
  };

  return (
    <div className={`border-1 border-zinc-800 px-3 py-2 text-center
                    cursor-pointer hover:border-zinc-700
                    transition-colors duration-300 ${className}`}
         onClick={handleClick}
    >
        {name}
    </div>
  );
};

export default PingButton;