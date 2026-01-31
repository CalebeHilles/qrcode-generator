import type React from "react";

export interface FormData {
  ssid: string;
  pass: string;
  noPass: boolean;
  hidden: boolean;
}

export interface WifiConfig {
  ssid: string;
  securityType: "WPA" | "nopass";
  pass: string;
  isHidden: boolean;
}

export type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;

export interface Errors {
  ssidError: Array<string>;
  passError: Array<string>;
}
