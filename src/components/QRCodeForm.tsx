import type { FormData, SetFormData } from "../types";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

export default function QRCodeForm({
  data,
  setData,
  noPass,
  handleSubmit,
}: {
  data: FormData;
  setData: SetFormData;
  noPass: boolean;
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>;
}) {
  const textInputs = [
    {
      key: "ssid" as const,
      label: "Nome da rede (SSID)",
      placeholder: "Digite o nome da rede",
      noPass: false,
    },
    {
      key: "pass" as const,
      label: "Senha",
      placeholder: "Digite a senha",
      noPass: noPass,
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
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center py-4 px-4 sm:px-8 rounded-md shadow-lg sm:min-h-84 shadow-zinc-950 gap-4"
      >
        <h3 className="text-md sm:text-lg text-zinc-900">Criar QRcode</h3>
        {textInputs.map((input) => (
          <TextInput
            key={input.key}
            data={data[input.key]}
            onChange={(value) => setData({ ...data, [input.key]: value })}
            label={input.label}
            placeholder={input.placeholder}
            noPass={input.noPass}
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
        <button className="text-zinc-100 bg-zinc-900 hover:bg-purple-700 text-sm sm:text-md" type="submit">
          Gerar
        </button>
      </form>
    </div>
  );
}