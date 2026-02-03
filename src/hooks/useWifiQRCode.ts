import { qrCodeLayout } from "../constants";
import type { Errors, FormData } from "../types";
import { useState } from "react";
import {
  generateWifiString,
  formDataToWifiConfig,
  validateWifiConfig,
} from "../utils/wifiString";
import * as QRCode from "qrcode";

export default function useWifiQRCode() {
  const [formData, setFormData] = useState<FormData>({
    ssid: "",
    pass: "",
    noPass: false,
    hidden: false,
  });
  const [displayMode, setDisplayMode] = useState<"form" | "qrcode">("form");
  const [errors, setErrors] = useState<Errors>({
    ssidError: [],
    passError: [],
  });
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const wifiConfig = formDataToWifiConfig(formData);
    const validationErrors = validateWifiConfig(wifiConfig);

    if (
      validationErrors.ssidError.length > 0 ||
      validationErrors.passError.length > 0
    ) {
      setErrors(validationErrors);
    } else {
      setErrors({ ssidError: [], passError: [] });
      const wifiString = generateWifiString(wifiConfig);

      try {
        const url = await QRCode.toDataURL(wifiString, {
          width: qrCodeLayout.width,
          margin: qrCodeLayout.margin,
          color: {
            dark: "#09090b",
            light: "#ffffff",
          },
        });
        setDisplayMode("qrcode");
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Erro ao gerar QR Code", error);
      }
    }
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `wifi-qrcode-${formData.ssid || "config"}`;
    link.click();
  }

  function newQRCode() {
    setDisplayMode("form");
    setFormData({ ssid: "", pass: "", noPass: false, hidden: false });
  }

  function onChange<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData({ ...formData, [key]: value });
  }

  function onInputClean(key: "ssid" | "pass") {
    setFormData({ ...formData, [key]: "" });
  }

  return {
    formData,
    errors,
    qrCodeUrl,
    displayMode,
    handleSubmit,
    handleDownload,
    newQRCode,
    onChange,
    onInputClean,
  };
}
