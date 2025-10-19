'use client';
import { useAtom } from 'jotai';
import { useRef, useState } from 'react';
import {
  colorAtom,
  recipientNameAtom,
  senderNameAtom,
  messageAtom,
  recipientColorAtom,
  senderColorAtom,
  messageColorAtom
} from '../store';
import { CanvasArea } from "./canvas-area";

const Card = () => {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [bgColor] = useAtom(colorAtom);
  const [recipientName] = useAtom(recipientNameAtom);
  const [senderName] = useAtom(senderNameAtom);
  const [message] = useAtom(messageAtom);
  const [recipientColor] = useAtom(recipientColorAtom);
  const [senderColor] = useAtom(senderColorAtom);
  const [messageColor] = useAtom(messageColorAtom);

  const downloadCard = async () => {
    if (!cardRef.current) return;

    setDownloading(true);

    try {
      // Dynamically import dom-to-image
      const domtoimage = await import('dom-to-image');

      const blob = await domtoimage.toBlob(cardRef.current, {
        quality: 1,
        width: cardRef.current.offsetWidth * 2,
        height: cardRef.current.offsetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
          width: cardRef.current.offsetWidth + 'px',
          height: cardRef.current.offsetHeight + 'px'
        }
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `diwali-card-${Date.now()}.png`;
      link.click();
      URL.revokeObjectURL(url);
      setDownloading(false);
    } catch (error) {
      console.error('Error downloading card:', error);
      setDownloading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!cardRef.current) return;

    try {
      // Dynamically import dom-to-image
      const domtoimage = await import('dom-to-image');

      const blob = await domtoimage.toBlob(cardRef.current, {
        quality: 1,
        width: cardRef.current.offsetWidth * 2,
        height: cardRef.current.offsetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
          width: cardRef.current.offsetWidth + 'px',
          height: cardRef.current.offsetHeight + 'px'
        }
      });

      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard. Please try the download button instead.');
      }
    } catch (error) {
      console.error('Error copying card:', error);
    }
  };

  return (
    <div className="flex gap-4 items-start rounded-xl">
      {/* Action Buttons - Left Side */}
      <div className="flex flex-col gap-3">
        <button
          onClick={copyToClipboard}
          title="Copy to clipboard"
          className="p-3 rounded-xl shadow-lg transition-all bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 hover:scale-110"
        >
          {copied ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        <button
          onClick={downloadCard}
          disabled={downloading}
          title="Download card"
          className="p-3 rounded-xl shadow-lg transition-all bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
        >
          {downloading ? (
            <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          )}
        </button>
      </div>

      {/* Card */}
      <div ref={cardRef} className="min-w-[380px] w-[380px] rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400/50 bg-transparent">
        <div
          className="p-0 relative"
          style={{ backgroundColor: bgColor }}
        >
          {/* Decorative Header */}
          <div className="relative pt-6 pb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl animate-pulse">🪔</span>
              <h1 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Happy Diwali
              </h1>
              <span className="text-3xl animate-pulse">🪔</span>
            </div>

            {/* Decorative border */}
            <div className="flex items-center justify-center gap-2 px-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
              <span className="text-xl">✨</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            </div>
          </div>

          {/* Recipient Name */}
          <div className="px-6 mb-4">
            <p
              className="text-xl font-semibold text-center"
              style={{ color: recipientColor }}
            >
              {recipientName}
            </p>
          </div>

          {/* Rangoli Design */}
          <div className="px-6 pb-4">
            <div className="rounded-2xl overflow-hidden border-4 border-white/50 shadow-lg">
              <CanvasArea width={320} height={220} />
            </div>
          </div>

          {/* Greeting Message */}
          <div className="px-6 pb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-inner border border-amber-200">
              <p
                className="text-sm text-center leading-relaxed italic"
                style={{ color: messageColor }}
              >
                "{message}"
              </p>
            </div>
          </div>

          {/* Sender Signature */}
          <div className="px-6 pb-6">
            <div className="border-t-2 border-dotted border-amber-600/30 pt-4">
              <p className="text-sm text-gray-600 text-right italic">
                Warm wishes,
              </p>
              <p
                className="text-lg font-bold text-right mt-1"
                style={{ color: senderColor }}
              >
                {senderName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
