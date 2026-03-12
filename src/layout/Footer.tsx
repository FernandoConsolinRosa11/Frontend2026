import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t border-zinc-800 py-12 px-6 p-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">
              Desenvolvedores
            </h4>
            <ul className="space-y-2">
              <li className="text-sm font-medium tracking-wider uppercase hover:text-[#C59958] transition-colors cursor-default">
                Aitom Henrique Donatoni
              </li>
              <li className="text-sm font-medium tracking-wider uppercase hover:text-[#C59958] transition-colors cursor-default">
                Fernando Consolin Rosa
              </li>
            </ul>
          </div>
          <div>
            <p>Redes Sociais </p>
            <p className="text-sm font-light tracking-widest uppercase">
              <i className="bi bi-instagram"></i>
              <span className="mx-1">
                <Link to="">Aitom Henrique Donatoni</Link>
              </span>
            </p>
             <p className="text-sm font-light tracking-widest uppercase">
              <i className="bi bi-instagram"></i>
              <span className="mx-1">
                <Link to="">Fernando Consolin Rosa</Link>
              </span>
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.1em]">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
          <div className="justify-self-center ">
            <img src={Logo} alt="logo" className="h-30! mt-5" />
          </div>
      </div>
    </footer>
  );
}
