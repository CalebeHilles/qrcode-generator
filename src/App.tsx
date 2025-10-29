import { useState } from "react";
import QRCodeForm from "./components/QRCodeForm";
import "./App.css";
import "./types";
import type { FormData } from "./types";

function App() {
  const [formData, setFormData] = useState<FormData>({
    ssid: "",
    pass: "",
    noPass: false,
    hidden: false,
  });

  return (
    <div className="flex items-center flex-col">
      <h1 className="font-bold text-zinc-50">Gerador de QRCode para WI-FI</h1>
      <QRCodeForm data={formData} setData={setFormData} />
      <p>{formData.ssid}</p>
      <p>{formData.pass}</p>
    </div>
  );
}

export default App;
