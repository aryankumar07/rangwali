'use client';
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

const SettingsPanel = ({ className = "" }) => {
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
    <div
      className={
        'hidden lg:block fixed right-4 top-6 z-50 w-72 max-h-[90vh] overflow-y-auto p-5 rounded-2xl shadow-2xl backdrop-blur-xl border border-purple-500/30 ' +
        className
      }
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <strong className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Settings
        </strong>
        <button
          onClick={resetDefaults}
          className="text-xs px-3 py-1.5 rounded-lg bg-purple-600/30 text-purple-200 border border-purple-500/50 hover:bg-purple-600/50 hover:text-white transition-all"
        >
          Reset
        </button>
      </div>

      <div className="mt-3 text-xs space-y-4">
        {/* Card Background Color */}
        <div>
          <label className="block font-semibold mb-2 text-purple-200">Card Background Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-12 p-1 rounded-lg border border-purple-500/30 cursor-pointer bg-black/30"
          />
        </div>

        <hr className="border-purple-500/30" />

        {/* Card Text Content */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Card Content
          </h3>

          <div>
            <label className="block mb-1.5 text-purple-200">Recipient Name</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Dear Friend"
              className="w-full text-sm p-2.5 rounded-lg border border-purple-500/30 bg-black/30 text-white placeholder-purple-400/50 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Recipient Color</label>
            <input
              type="color"
              value={recipientColor}
              onChange={(e) => setRecipientColor(e.target.value)}
              className="w-full h-10 p-1 rounded-lg border border-purple-500/30 cursor-pointer bg-black/30"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Diwali wishes..."
              className="w-full text-sm p-2.5 rounded-lg border border-purple-500/30 bg-black/30 text-white placeholder-purple-400/50 resize-none focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
              rows="3"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Message Color</label>
            <input
              type="color"
              value={messageColor}
              onChange={(e) => setMessageColor(e.target.value)}
              className="w-full h-10 p-1 rounded-lg border border-purple-500/30 cursor-pointer bg-black/30"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Sender Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="From Your Name"
              className="w-full text-sm p-2.5 rounded-lg border border-purple-500/30 bg-black/30 text-white placeholder-purple-400/50 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Sender Color</label>
            <input
              type="color"
              value={senderColor}
              onChange={(e) => setSenderColor(e.target.value)}
              className="w-full h-10 p-1 rounded-lg border border-purple-500/30 cursor-pointer bg-black/30"
            />
          </div>
        </div>

        <hr className="border-purple-500/30" />

        {/* Rangoli Design Settings */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Rangoli Design
          </h3>

          <div>
            <label className="block mb-1.5 text-purple-200">Color Scheme</label>
            <select
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              className="w-full text-sm p-2.5 rounded-lg border border-purple-500/30 bg-black/30 text-white focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              {colorSchemes.map((s) => (
                <option key={s} value={s} className="bg-gray-900">
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Pattern</label>
            <select
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="w-full text-sm p-2.5 rounded-lg border border-purple-500/30 bg-black/30 text-white focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              {patterns.map((p) => (
                <option key={p} value={p} className="bg-gray-900">
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1.5 text-purple-200">Petals: {petals}</label>
              <input
                type="range"
                min="3"
                max="64"
                value={petals}
                onChange={(e) => setPetals(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-purple-200">Layers: {layers}</label>
              <input
                type="range"
                min="1"
                max="12"
                value={layers}
                onChange={(e) => setLayers(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-purple-200">Rotation: {rotation}°</label>
            <input
              type="range"
              min="-360"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
