import React, { useState } from "react";
import "./App.css";
import "./types";
import type { FormData } from "./types";
import QRCodeForm from "./components/QRCodeForm";
import generateWifiString, { formDataToWifiConfig } from "./utils/wifiString";
import * as QRCode from "qrcode";
import { ArrowBigRight } from "lucide-react";

function App() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [formData, setFormData] = useState<FormData>({
    ssid: "",
    pass: "",
    noPass: false,
    hidden: false,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const wifiConfig = formDataToWifiConfig(formData);
    const wifiString = generateWifiString(wifiConfig);
    const url = await QRCode.toDataURL(wifiString, {
      width: 400,
      margin: 2,
    });
    setQrCodeUrl(url);
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className="font-bold text-zinc-50 mb-10">
        Gerador de QRCode para WI-FI
      </h1>
      <div className="flex gap-8">
        <div className="w-96">
          <QRCodeForm
            data={formData}
            setData={setFormData}
            noPass={formData.noPass ? true : false}
            handleSubmit={handleSubmit}
          />
        </div>

        {qrCodeUrl && (
          <div className="flex items-center gap-8">
            <ArrowBigRight className="w-16 h-16" />
            <div className="w-96">
              <img
                className="rounded-lg w-full h-full"
                src={qrCodeUrl}
                alt="QRCode"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
