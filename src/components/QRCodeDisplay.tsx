import type React from "react";
import type { FormData, SetFormData } from "../types";
import {
  Download,
  RefreshCw,
  Wifi,
  Lock,
  ShieldOff,
  EyeOff,
} from "lucide-react";

export default function QRCodeDisplay({
  handleDownload,
  qrCodeUrl,
  setShouldRenderForm,
  formData,
  setFormData,
}: {
  handleDownload: () => void;
  qrCodeUrl: string;
  setShouldRenderForm: React.Dispatch<React.SetStateAction<"form" | "qrcode">>;
  formData: FormData;
  setFormData: SetFormData;
}) {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
      <div className="w-full space-y-4 mb-8">
        <div className="text-center">
          <h3 className="text-zinc-50 text-xl font-semibold tracking-tight">
            Seu QR Code foi gerado com sucesso!
          </h3>
          <p className="text-zinc-500 text-sm">Pronto para compartilhar</p>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent my-6" />

        <div className="space-y-3 bg-zinc-950/30 p-4 rounded-2xl border border-zinc-800/50">
          <div className="flex items-center gap-3">
            <Wifi className="w-4 h-4 text-purple-500" />
            <p className="text-zinc-400 text-sm">
              <span className="text-zinc-500 mr-1">SSID:</span>
              <span className="text-zinc-100 font-medium">{formData.ssid}</span>
            </p>
          </div>

          {!formData.noPass ? (
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-purple-500" />
              <p className="text-zinc-400 text-sm">
                <span className="text-zinc-500 mr-1">Senha:</span>
                <span className="text-zinc-100 font-mono tracking-wider">
                  {formData.pass}
                </span>
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <ShieldOff className="w-4 h-4 text-orange-400" />
              <p className="text-orange-400/80 text-sm italic">
                Rede sem proteção
              </p>
            </div>
          )}

          {formData.hidden && (
            <div className="flex items-center gap-3">
              <EyeOff className="w-4 h-4 text-zinc-500" />
              <p className="text-zinc-500 text-xs uppercase tracking-widest">
                Rede Oculta
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 transition duration-1000"></div>
        <div className="relative bg-white p-4 rounded-2xl shadow-inner">
          <img
            className="w-48 h-48 md:w-56 md:h-56 object-contain"
            src={qrCodeUrl}
            alt="WiFi QR Code"
          />
        </div>
      </div>

      <div className="w-full mt-10 space-y-3">
        <button
          className="group flex items-center justify-center gap-2 w-full bg-zinc-50 text-zinc-950 hover:bg-purple-600 hover:text-white transition-all duration-300 font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          onClick={handleDownload}
        >
          <Download className="w-5 h-5 group-hover:bounce" />
          Baixar Imagem
        </button>

        <button
          onClick={() => {
            setShouldRenderForm("form");
            setFormData({ ssid: "", pass: "", noPass: false, hidden: false });
          }}
          className="flex items-center justify-center gap-2 w-full bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-300 text-sm py-3 rounded-xl"
        >
          <RefreshCw className="w-4 h-4" />
          Gerar outro código
        </button>
      </div>
    </div>
  );
}
