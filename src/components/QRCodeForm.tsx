import type { WifiQRCodeHook } from "../types";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";
import { AlertCircle } from "lucide-react";

export default function QRCodeForm({ hookData }: { hookData: WifiQRCodeHook }) {
  const textInputs = [
    {
      key: "ssid" as const,
      label: "Nome da rede (SSID)",
      placeholder: "Ex: Minha Casa 2.4G",
      noPass: false,
      errors: hookData.errors.ssidError,
    },
    {
      key: "pass" as const,
      label: "Senha",
      placeholder: "••••••••",
      noPass: hookData.formData.noPass,
      errors: hookData.errors.passError,
    },
  ];

  const checkboxes = [
    {
      key: "noPass" as const,
      label: "Rede sem senha",
    },
    {
      key: "hidden" as const,
      label: "Rede oculta",
    },
  ];

  return (
    <form
      onSubmit={hookData.handleSubmit}
      className="flex flex-col w-full max-w-md mx-auto bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl space-y-6"
    >
      <div className="space-y-1 text-center sm:text-left">
        <h3 className="text-zinc-50 text-xl font-semibold tracking-tight">
          Configurar WiFi
        </h3>
        <p className="text-zinc-500 text-sm">
          Insira os dados da rede para gerar o código.
        </p>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent opacity-50" />

      <div className="space-y-5">
        {textInputs.map((input) => (
          <div key={input.key} className="flex flex-col gap-2">
            <TextInput
              formData={hookData.formData[input.key]}
              onChange={(value) => hookData.onChange(input.key, value)}
              onInputClean={() => hookData.onInputClean(input.key)}
              shouldRenderClearBtn={hookData.formData[input.key].length > 0}
              label={input.label}
              placeholder={input.placeholder}
              noPass={input.noPass}
            />
            {input.errors.map((error, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-red-400 text-xs animate-in fade-in slide-in-from-left-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{error}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
        {checkboxes.map((checkbox) => (
          <div
            key={checkbox.key}
            className="transition-opacity duration-300 opacity-90 hover:opacity-100"
          >
            <Checkbox
              formData={hookData.formData[checkbox.key]}
              onChange={(value) => hookData.onChange(checkbox.key, value)}
              label={checkbox.label}
            />
          </div>
        ))}
      </div>

      <div className="pt-2">
        <button
          className="group relative flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-[0.98]"
          type="submit"
        >
          Gerar QR Code
          <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </button>
      </div>
    </form>
  );
}
