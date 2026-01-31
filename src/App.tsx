import React, { useState } from "react";
import "./App.css";
import "./types";
import type { FormData, Errors } from "./types";
import QRCodeForm from "./components/QRCodeForm";
import {
  generateWifiString,
  formDataToWifiConfig,
  validateWifiConfig,
} from "./utils/wifiString";
import * as QRCode from "qrcode";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  const qrCodeLayout = {
    width: 400,
    margin: 2,
  };

  const [errors, setErrors] = useState<Errors>({
    ssidError: [],
    passError: [],
  });
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
    const validationErrors = validateWifiConfig(wifiConfig);

    if (
      validationErrors.ssidError.length > 0 ||
      validationErrors.passError.length > 0
    )
      setErrors(validationErrors);
    else {
      setErrors({ ssidError: [], passError: [] });
      const wifiString = generateWifiString(wifiConfig);

      const url = await QRCode.toDataURL(wifiString, {
        width: qrCodeLayout.width,
        margin: qrCodeLayout.margin,
      });
      setQrCodeUrl(url);
    }
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `wifi-qrcode-${formData.ssid}`;
    link.click();
  }

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-5xl">
        <h1 className="font-bold text-zinc-100 mb-8 md:mb-12 text-3xl md:text-4xl text-center">
          Gerador de QRCode para WI-FI
        </h1>
        <div className="flex flex-col gap-6 md:gap-12 items-center justify-center">
          <QRCodeForm
            formData={formData}
            setData={setFormData}
            noPass={formData.noPass}
            handleSubmit={handleSubmit}
            errors={errors}
          />

          {qrCodeUrl && (
            <QRCodeDisplay
              handleDownload={handleDownload}
              qrCodeUrl={qrCodeUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
