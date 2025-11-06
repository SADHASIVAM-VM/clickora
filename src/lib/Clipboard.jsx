import React, { useState } from 'react';

function MyParagraphComponent() {
  const [copyStatus, setCopyStatus] = useState('');
  const paragraphText = "This is the paragraph text that will be copied to the clipboard. It can be any string you want.";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(paragraphText);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyStatus('Failed to copy.');
    }
  };

  return (
    <div>
      <p>{paragraphText}</p>
      <button onClick={copyToClipboard}>Copy Paragraph</button>
      {copyStatus && <p>{copyStatus}</p>}
    </div>
  );
}

export default MyParagraphComponent;