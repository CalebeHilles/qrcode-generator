import type { FormData, SetFormData } from "../types";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

export default function QRCodeForm({
  data,
  setData,
}: {
  data: FormData;
  setData: SetFormData;
}) {
  const textInputs = [
    {
      key: "ssid" as const,
      label: "Rede",
      placeholder: "Digite o nome da rede",
    },
    {
      key: "pass" as const,
      label: "Senha",
      placeholder: "Digite a senha",
    },
  ];

  const checkboxes = [
    {
      key: "noPass" as const,
      label: "Sem senha",
    },
    {
      key: "hidden" as const,
      label: "Oculta",
    },
  ];

  return (
    <form className="flex flex-col py-4 px-8 rounded-md mt-12 shadow-lg shadow-zinc-950 gap-4">
      <h3 className="text-2xl text-zinc-900">Criar QRcode</h3>
      {textInputs.map((input) => (
        <TextInput
          key={input.key}
          data={data[input.key]}
          onChange={(value) => setData({ ...data, [input.key]: value })}
          label={input.label}
          placeholder={input.placeholder}
        />
      ))}
      <div>
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.key}
            data={data[checkbox.key]}
            onChange={(value) => setData({ ...data, [checkbox.key]: value })}
            label={checkbox.label}
          />
        ))}
      </div>
      <button className="text-zinc-100" type="submit">
        Gerar
      </button>
    </form>
  );
}
