import type { FormData, WifiConfig } from "../types";

export function formDataToWifiConfig(data: FormData): WifiConfig {
  return {
    ssid: data.ssid,
    securityType: data.noPass ? "nopass" : "WPA",
    pass: data.noPass ? "" : data.pass,
    isHidden: data.hidden,
  };
}

export default function generateWifiString(config: WifiConfig): string {
  return `WIFI:T:${config.securityType};S:${config.ssid};P:${config.pass};H:${config.isHidden}`;
}
