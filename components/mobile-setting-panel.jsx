'use client';
import React from 'react';
import { useAtom } from 'jotai';
import {
  colorAtom,
  brushAtom,
  bgAtom,
  petalsAtom,
  layersAtom,
  rotationAtom,
  schemeAtom,
  patternAtom,
  canvasWidthAtom,
  canvasHeightAtom,
  recipientNameAtom,
  senderNameAtom,
  messageAtom,
  recipientColorAtom,
  senderColorAtom,
  messageColorAtom,
} from '../store';

const colorSchemes = ['vibrant', 'traditional', 'pastel', 'monochrome'];
const patterns = ['lotus', 'geometric', 'mandala', 'star', 'peacock', 'lamp', 'flower', 'swastik', 'fiboonaci', 'rose', 'metron'];

const MobileSettings = ({ open, onClose }) => {
  const [color, setColor] = useAtom(colorAtom);
  const [brush, setBrush] = useAtom(brushAtom);
  const [bgMode, setBgMode] = useAtom(bgAtom);

  const [petals, setPetals] = useAtom(petalsAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const [rotation, setRotation] = useAtom(rotationAtom);
  const [scheme, setScheme] = useAtom(schemeAtom);
  const [pattern, setPattern] = useAtom(patternAtom);
  const [width, setWidth] = useAtom(canvasWidthAtom);
  const [height, setHeight] = useAtom(canvasHeightAtom);

  const [recipientName, setRecipientName] = useAtom(recipientNameAtom);
  const [senderName, setSenderName] = useAtom(senderNameAtom);
  const [message, setMessage] = useAtom(messageAtom);
  const [recipientColor, setRecipientColor] = useAtom(recipientColorAtom);
  const [senderColor, setSenderColor] = useAtom(senderColorAtom);
  const [messageColor, setMessageColor] = useAtom(messageColorAtom);

  if (!open) return null;

  function resetDefaults() {
    setColor('#b8860b');
    setBrush(6);
    setBgMode('paper');
    setPetals(12);
    setLayers(5);
    setRotation(0);
    setScheme('vibrant');
    setPattern('lotus');
    setWidth(320);
    setHeight(220);
    setRecipientName('Dear Friend');
    setSenderName('From Your Name');
    setMessage('May the festival of lights brighten your life with joy, prosperity, and happiness!');
    setRecipientColor('#1f2937');
    setSenderColor('#1f2937');
    setMessageColor('#374151');
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="relative w-full max-h-[80%] overflow-auto rounded-t-2xl p-4 shadow-2xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(18,18,20,0.98) 0%, rgba(8,6,10,0.98) 100%)',
          color: 'white',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <strong className="text-lg">Settings</strong>
          <div className="flex items-center gap-2">
            <button
              onClick={resetDefaults}
              className="text-xs px-3 py-1.5 rounded-lg bg-purple-600/30 text-purple-200 border border-purple-500/50 hover:bg-purple-600/50 hover:text-white transition-all"
            >
              Reset
            </button>
            <button onClick={onClose} className="text-sm px-2 py-1 rounded bg-white/6">
              Close
            </button>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          {/* Card Background Color */}
          <div>
            <label className="block font-medium mb-1">Card Background Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 p-0 rounded-lg border border-white/10 cursor-pointer bg-transparent"
            />
          </div>

          {/* Card Text Content */}
          <div className="space-y-2">
            <h3 className="font-semibold">Card Content</h3>

            <div>
              <label className="block mb-1">Recipient Name</label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Dear Friend"
                className="w-full text-sm p-2 rounded-lg border border-white/10 bg-black/20 placeholder-white/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Recipient Color</label>
              <input
                type="color"
                value={recipientColor}
                onChange={(e) => setRecipientColor(e.target.value)}
                className="w-full h-10 p-0 rounded-lg border border-white/10 cursor-pointer bg-transparent"
              />
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Diwali wishes..."
                className="w-full text-sm p-2.5 rounded-lg border border-white/10 bg-black/20 placeholder-white/40 resize-none focus:outline-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block mb-1">Message Color</label>
              <input
                type="color"
                value={messageColor}
                onChange={(e) => setMessageColor(e.target.value)}
                className="w-full h-10 p-0 rounded-lg border border-white/10 cursor-pointer bg-transparent"
              />
            </div>

            <div>
              <label className="block mb-1">Sender Name</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="From Your Name"
                className="w-full text-sm p-2 rounded-lg border border-white/10 bg-black/20 placeholder-white/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Sender Color</label>
              <input
                type="color"
                value={senderColor}
                onChange={(e) => setSenderColor(e.target.value)}
                className="w-full h-10 p-0 rounded-lg border border-white/10 cursor-pointer bg-transparent"
              />
            </div>
          </div>

          <hr className="border-white/6" />

          <hr className="border-white/6" />

          {/* Rangoli Design */}
          <div className="space-y-2">
            <h3 className="font-semibold">Rangoli Design</h3>

            <div>
              <label className="block mb-1">Color Scheme</label>
              <select
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}
                className="w-full text-sm p-2 rounded border bg-black/10"
              >
                {colorSchemes.map((s) => (
                  <option key={s} value={s}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Pattern</label>
              <select
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="w-full text-sm p-2 rounded border bg-black/10"
              >
                {patterns.map((p) => (
                  <option key={p} value={p}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1">Petals: {petals}</label>
                <input
                  type="range"
                  min="3"
                  max="64"
                  value={petals}
                  onChange={(e) => setPetals(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block mb-1">Layers: {layers}</label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={layers}
                  onChange={(e) => setLayers(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Rotation: {rotation}°</label>
              <input
                type="range"
                min="-360"
                max="360"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-white/6 text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSettings;
