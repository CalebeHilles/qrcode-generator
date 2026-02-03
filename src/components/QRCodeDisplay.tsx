import type React from "react";
import type { FormData, SetFormData } from "../types";

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
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-8 w-full">
        <div>
          <h3 className="text-zinc-50 text-lg">Configurações do QrCode</h3>
          <div className="w-full h-px bg-zinc-500 my-4" />
          <p className="text-zinc-400">
            <strong className="text-zinc-50">Nome da rede (SSID):</strong>{" "}
            {formData.ssid}
          </p>
          {formData.noPass == false && (
            <p className="text-zinc-400">
              <strong className="text-zinc-50">Senha da rede:</strong>{" "}
              {formData.pass}
            </p>
          )}
          {formData.noPass && <p>Rede sem Senha</p>}
          {formData.hidden && <p>Rede oculta</p>}
        </div>
        <div className="w-1/2 md:w-1/2">
          <img
            className="rounded-lg w-full shadow-lg"
            src={qrCodeUrl}
            alt="QRCode"
          />
        </div>
        <button
          className="w-6/7 sm:w-1/2 bg-zinc-50 text-zinc-900 hover:bg-purple-700 hover:text-zinc-50 text-sm sm:text-md shadow-lg py-2.5"
          onClick={handleDownload}
        >
          Baixar
        </button>

        <button
          onClick={() => {
            setShouldRenderForm("form");
            setFormData({
              ssid: "",
              pass: "",
              noPass: false,
              hidden: false,
            });
          }}
          className="w-6/7 sm:w-1/2 bg-purple-700  text-zinc-50 hover:bg-zinc-50 hover:text-zinc-900 text-sm sm:text-md shadow-lg py-2.5"
        >
          Novo QrCode
        </button>
      </div>
    </div>
  );
}
