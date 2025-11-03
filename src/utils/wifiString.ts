import type { FormData, WifiConfig } from "../types";

export function formDataToWifiConfig(formData: FormData): WifiConfig {
  return {
    ssid: formData.ssid,
    securityType: formData.noPass ? "nopass" : "WPA",
    pass: formData.noPass ? "" : formData.pass,
    isHidden: formData.hidden,
  };
}

export default function generateWifiString(config: WifiConfig): string {
  return `WIFI:T:${config.securityType};S:${config.ssid};P:${config.pass};H:${config.isHidden}`;
}
