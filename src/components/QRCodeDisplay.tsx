import { ArrowBigRight } from "lucide-react";

export default function QRCodeDisplay({
  qrCodeUrl,
  handleDownload,
}: {
  handleDownload: () => void;
  qrCodeUrl: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center sm:gap-8">
      <ArrowBigRight className="hidden lg:block w-16 h-16" />
      <div className="flex flex-col items-center gap-8">
        <div className="w-1/2 sm:w-64">
          <img
            className="rounded-lg w-full h-full"
            src={qrCodeUrl}
            alt="QRCode"
          />
        </div>
        <button
          className="w-full bg-zinc-50 text-zinc-900 hover:bg-purple-700 hover:text-zinc-50 text-sm sm:text-md"
          onClick={handleDownload}
        >
          Baixar
        </button>
      </div>
    </div>
  );
}
