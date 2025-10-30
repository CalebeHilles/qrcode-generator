import type { FormData, SetFormData } from "../types";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

export default function QRCodeForm({
  data,
  setData,
  display,
  handleSubmit,
}: {
  data: FormData;
  setData: SetFormData;
  display: string;
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>;
}) {
  const textInputs = [
    {
      key: "ssid" as const,
      label: "Rede",
      placeholder: "Digite o nome da rede",
      display: "flex",
    },
    {
      key: "pass" as const,
      label: "Senha",
      placeholder: "Digite a senha",
      display: display,
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center py-4 px-8 rounded-md shadow-lg h-96 shadow-zinc-950 gap-4"
      >
        <h3 className="text-2xl text-zinc-900">Criar QRcode</h3>
        {textInputs.map((input) => (
          <TextInput
            key={input.key}
            data={data[input.key]}
            onChange={(value) => setData({ ...data, [input.key]: value })}
            label={input.label}
            placeholder={input.placeholder}
            display={input.display}
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
    </div>
  );
}
