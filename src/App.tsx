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

  function handleDownload() {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `wifi-qrcode-${formData.ssid}`;
    link.click();
  }

  return (
    <div className="flex items-center flex-col px-4 pt-4 pb-8">
      <h1 className="font-bold text-zinc-50 mb-10 text-center">
        Gerador de QRCode para WI-FI
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full sm:w-64">
          <QRCodeForm
            data={formData}
            setData={setFormData}
            noPass={formData.noPass ? true : false}
            handleSubmit={handleSubmit}
          />
        </div>

        {qrCodeUrl && (
          <div className="flex flex-col lg:flex-row items-center sm:gap-8">
            <ArrowBigRight className="hidden lg:block w-16 h-16" />
            <div className="flex flex-col items-center gap-8">
              <div className="w-1/2 sm:w-64">
                <img
                  className="rounded-lg w-full h-full"
                  src={qrCodeUrl}
                  alt="QRCode"
                />
              </div>
              <button
                className="w-full bg-zinc-50 text-zinc-900 hover:bg-purple-700 hover:text-zinc-50 text-sm sm:text-md"
                onClick={handleDownload}
              >
                Baixar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
