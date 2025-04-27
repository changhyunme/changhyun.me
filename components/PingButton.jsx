'use client';

const PingButton = ({ name, className }) => {
  const handleClick = async () => {
    const clientInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
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