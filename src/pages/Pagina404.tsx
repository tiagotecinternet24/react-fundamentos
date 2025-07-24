import { Link } from "react-router-dom";

export default function Pagina404() {
  return (
    <section className="bg-red-100 p-3 text-center">
      <h2>Ops! Página não encontrada...</h2>
      <p>
        <Link to="/">Volte para a página principal</Link>
      </p>
    </section>
  );
}
