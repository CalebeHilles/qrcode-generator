import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

export default function QRCodeForm() {
  return (
    <form className="flex flex-col py-4 px-8 rounded-md mt-12 shadow-lg shadow-zinc-950 gap-4">
      <h3 className="text-2xl text-zinc-900">Criar QRcode</h3>
      <TextInput label="Nome da rede" placeholder="Digite o nome da rede" />
      <TextInput label="Senha" placeholder="Digite a senha" />
      <div>
        <Checkbox label="Sem senha" />
        <Checkbox label="Oculta" />
      </div>
      <button className="text-zinc-100" type="submit">Gerar</button>
    </form>
  );
}
