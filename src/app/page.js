'use client'

import Card from "../../components/card";
import MobileSettings from "../../components/mobile-setting-panel";
import SettingsPanel from "../../components/settings-panel";
import { useState } from "react";


export default function Home() {
  const [openSettings, setOpenSettings] = useState(false);


  return (
    <div className="relative w-screen h-screen m-0 p-3">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col-reverse sm:flex-row gap-6 items-start justify-center">
          <div className="flex-1 flex flex-col items-center sm:items-start gap-6">
            <Card />
          </div>
          <SettingsPanel />
        </div>
        <MobileSettings open={openSettings} onClose={() => setOpenSettings(false)} />
        <button
          onClick={() => setOpenSettings(true)}
          className="sm:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-white/95 backdrop-blur text-black"
          aria-label="Open settings"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
}
