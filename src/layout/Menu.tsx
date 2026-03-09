import Button from "../components/Button";

export default function Menu() {
  return (
    <div className="flex p-3  text-white" data-aos="fade-down">
      <div className="mx-3">
        <Button
          texto="Comprar"
          className="text-white flex items-start gap-2 text-[20px] "
        />
      </div>
      <div className="mx-3">
        <Button
          texto="Categorias"
          className="text-white flex items-start gap-2 text-[20px] "
        />
      </div>
    </div>
  );
}
