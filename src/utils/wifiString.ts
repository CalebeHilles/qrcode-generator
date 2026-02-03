import { validationRules } from "../constants";
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

export function validateWifiConfig(config: WifiConfig) {
  function validateField(field: string, minLength: number, maxLength: number) {
    const errors = [];
    const errorMessages = {
      requiredField: "Campo obrigatório",
      minLength: "O campo deve conter ao menos " + minLength + " caracteres",
      maxLength:
        "Tamanho do campo não deve ser superior a " + maxLength + " caracteres",
    };

    if (field.length < minLength) errors.push(errorMessages.minLength);
    else if (field.length < 1) errors.push(errorMessages.requiredField);
    else if (field.length > maxLength) errors.push(errorMessages.maxLength);

    return errors;
  }

  const ssidError = validateField(
    config.ssid,
    validationRules.ssid.minLength,
    validationRules.ssid.maxLength,
  );
  let passError: string[] = [];

  if (config.securityType === "WPA")
    passError = validateField(
      config.pass,
      validationRules.pass.minLength,
      validationRules.pass.maxLength,
    );

  const errors = {
    ssidError: ssidError,
    passError: passError,
  };

  return errors;
}
