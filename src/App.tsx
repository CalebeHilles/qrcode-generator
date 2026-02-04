import "./types";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";
import { Dot, Wifi } from "lucide-react";
import useWifiQRCode from "./hooks/useWifiQRCode.ts";

function App() {
  const hookData = useWifiQRCode();

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none opacity-50" />

      <div className="relative z-10 w-full max-w-2xl">
        <header className="flex flex-col items-center mb-12 text-center space-y-4">
          <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
            <Wifi className="w-8 h-8 text-purple-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight">
              QR Code <span className="text-purple-500">WiFi</span>
            </h1>
            <p className="text-zinc-500 text-lg max-w-sm mx-auto">
              Gere um QR Code para compartilhar sua rede WiFi
            </p>
          </div>
        </header>

        <main className="w-full transition-all duration-500 ease-in-out">
          {hookData.displayMode === "form" ? (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <QRCodeForm hookData={hookData} />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <QRCodeDisplay hookData={hookData} />
            </div>
          )}
        </main>

        <footer className="mt-16 text-center text-zinc-600 text-sm flex justify-center items-center">
          <p>© Calebe Hillesheim Lamb</p>
          <Dot className="w-4 h-4" />
          <p>2025</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
