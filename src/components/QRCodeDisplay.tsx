import { ArrowBigDown } from "lucide-react";

export default function QRCodeDisplay({
  qrCodeUrl,
  handleDownload,
}: {
  handleDownload: () => void;
  qrCodeUrl: string;
}) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <ArrowBigDown className="w-16 h-16 text-zinc-200" fill="" strokeWidth={1.2} />
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="w-1/2 md:w-1/2">
          <img className="rounded-lg w-full shadow-lg" src={qrCodeUrl} alt="QRCode" />
        </div>
        <button
          className="w-6/7 sm:w-1/2 bg-zinc-50 text-zinc-900 hover:bg-purple-700 hover:text-zinc-50 text-sm sm:text-md shadow-lg py-2.5"
          onClick={handleDownload}
        >
          Baixar
        </button>
      </div>
    </div>
  );
}