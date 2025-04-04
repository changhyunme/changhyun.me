'use client';

import { useState } from 'react';

export default function CodeBlock({ code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative text-xs bg-neutral-900 text-green-400 rounded p-4 overflow-x-auto max-w-full box-border">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-neutral-700 text-white text-sm px-2 py-1 rounded hover:bg-neutral-600"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="w-full whitespace-pre-wrap tab-[2]">
        <code className="w-full block">
          {code}
        </code>
      </pre>
    </div>
  );
}