import "../Auth/css/Register.css";
import Button from "../../components/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end  relative overflow-hidden">
      <div className="absolute inset-0 register-bg opacity-50" />
      <form className="flex-col gap-9 flex w-full glass-form m-5 scale-75 py-10">
        <h3 className="m-auto text-white">Crie seu perfil</h3>
        <input
          className="p-2 bg-white rounded"
          type="text"
          name="nome"
          placeholder="Nome completo"
        />
        <input
          className="p-2 bg-white rounded"
          type="text"
          name="cpf"
          placeholder="CPF"
        />
        <input
          className="p-2 bg-white rounded"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-white rounded mb-2"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <div className="grid grid-cols-3 items-center w-full">
          <Button
            texto=" ← "
            className="text-white justify-self-start  gap-2 text-[20px]  rounded-3xl "
            onClick={() => navigate("/")}
          />
          <Button
            texto="Confirmar"
            className="text-white justify-self-center items-center gap-2 text-[20px] m-auto "
          />
        </div>
      </form>
    </div>
  );
}
