import type { FormData, SetFormData } from "../types";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

export default function QRCodeForm({
  formData,
  setData,
  noPass,
  handleSubmit,
}: {
  formData: FormData;
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center p-8 sm:p-8 md:py-16 rounded-md shadow-lg h-full w-6/7 sm:w-1/2 shadow-zinc-950 gap-4"
    >
      <h3 className="text-md sm:text-lg text-zinc-900">Criar QRcode</h3>
      {textInputs.map((input) => (
        <TextInput
          key={input.key}
          formData={formData[input.key]}
          onChange={(value) => setData({ ...formData, [input.key]: value })}
          onInputClean={() => setData({ ...formData, [input.key]: "" })}
          label={input.label}
          placeholder={input.placeholder}
          noPass={input.noPass}
        />
      ))}
      <div>
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.key}
            formData={formData[checkbox.key]}
            onChange={(value) => setData({ ...formData, [checkbox.key]: value })}
            label={checkbox.label}
          />
        ))}
      </div>
      <button
        className="text-zinc-100 bg-zinc-900 hover:bg-purple-700 text-sm sm:text-md py-2.5"
        type="submit"
      >
        Gerar
      </button>
    </form>
  );
}
