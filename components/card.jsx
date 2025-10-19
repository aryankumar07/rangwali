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

// Import Google Fonts for Diwali-inspired typography
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
    <div className="flex gap-4 items-start rounded-xl font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&family=Devanagari+Sangam+MN&display=swap');
        .diwali-title {
          font-family: 'Satisfy', cursive;
        }
        .diwali-text {
          font-family: 'Devanagari Sangam MN', sans-serif;
        }
      `}</style>

      {/* Action Buttons - Left Side */}
      <div className="flex flex-col gap-3">
        <button
          onClick={copyToClipboard}
          title="Copy to clipboard"
          className="p-3 rounded-full shadow-lg transition-all bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 hover:scale-110"
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
          className="p-3 rounded-full shadow-lg transition-all bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
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
      <div ref={cardRef} className="min-w-[380px] w-[380px] rounded-3xl shadow-2xl overflow-hidden border-8 border-double border-amber-500/70 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        <div className="p-0 relative" style={{ backgroundColor: bgColor }}>
          {/* Decorative Header */}
          <div className="relative pt-8 pb-6 bg-gradient-to-b from-orange-500/20 to-transparent">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl animate-pulse">🪔</span>
              <h1 className="diwali-title font-bold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-700">
                Happy Diwali
              </h1>
              <span className="text-4xl animate-pulse">🪔</span>
            </div>

            {/* Decorative border with mandala-like pattern */}
            <div className="flex items-center justify-center gap-3 px-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
              <span className="text-2xl animate-spin-slow">✨</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
            </div>
          </div>

          {/* Recipient Name */}
          <div className="px-8 mb-6">
            <p
              className="diwali-text text-2xl font-semibold text-center tracking-wide"
              style={{ color: recipientColor }}
            >
              Dear {recipientName}
            </p>
          </div>

          {/* Rangoli Design */}
          <div className="px-8 pb-6">
            <div className="rounded-3xl overflow-hidden border-4 border-amber-300/50 shadow-xl bg-white/30">
              <CanvasArea width={320} height={220} />
            </div>
          </div>

          {/* Greeting Message */}
          <div className="px-8 pb-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-inner border-2 border-amber-300/50">
              <p
                className="diwali-text text-base text-center leading-relaxed tracking-wide"
                style={{ color: messageColor }}
              >
                "{message}"
              </p>
            </div>
          </div>

          {/* Sender Signature */}
          <div className="px-8 pb-8">
            <div className="border-t-4 border-dashed border-amber-600/40 pt-6">
              <p className="diwali-text text-base text-amber-900 text-right tracking-wide">
                Warmest Diwali Wishes,
              </p>
              <p
                className="diwali-text text-xl font-semibold text-right mt-2"
                style={{ color: senderColor }}
              >
                {senderName}
              </p>
            </div>
          </div>

          {/* Decorative Footer */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-400/20 to-transparent flex justify-center items-end pb-2">
            <span className="text-2xl animate-pulse">🪔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
