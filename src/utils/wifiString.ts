import type { FormData, WifiConfig } from "../types";

export function formDataToWifiConfig(formData: FormData): WifiConfig {
  return {
    ssid: formData.ssid,
    securityType: formData.noPass ? "nopass" : "WPA",
    pass: formData.noPass ? "" : formData.pass,
    isHidden: formData.hidden,
  };
}

function escapeWifiString(string: string): string {
  return string
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/:/g, "\\:")
    .replace(/"/g, '\\"');
}

export function generateWifiString(config: WifiConfig): string {
  const ssid = escapeWifiString(config.ssid);
  const pass = escapeWifiString(config.pass);

  return `WIFI:T:${config.securityType};S:${ssid};P:${pass};H:${config.isHidden ? "true" : "false"};;`;
}
