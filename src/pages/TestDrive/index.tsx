import TestDriveCard from "./components/testDriveCard";

export const TestDrive = () => {
  return (
    <div className="bg-[#121212] text-white font-sans  py-20! ">
      <div className="ml-10! ">
        <header className="mb-8 pb-2 ">
          <h2 className="text-3xl font-light tracking-[0.4em] uppercase mb-12! border-l-[5px] border-[#C59958] pl-6!">
            Agenda
          </h2>
        </header>
        <main className="max-w-5xl ">
            <p className="text-zinc-500 font-light italic pl-2">
                Você não tem nenhum test drive agendado. Escolha um carro e comece agora!
            </p>
            <div>
                <TestDriveCard/>
            </div>
        </main>
      </div>
    </div>
  );
};

export default TestDrive;
