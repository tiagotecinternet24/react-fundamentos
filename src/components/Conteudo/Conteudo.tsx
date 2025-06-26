import Artigo from "./Artigo/Artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Tiago" classe="bg-emerald-100" />
        <Saudacao classe="bg-red-100" />

        <p>Este é um exemplo de aplicação React.</p>

        <Artigo
          titulo="Front-End"
          texto="Um texto qualquer sobre Front"
          numero={1}
        />

        <Artigo
          titulo="Back-End"
          texto="Um texto qualquer sobre Back"
          numero={2}
        />

        <Artigo
          titulo="Mobile"
          texto="Um texto qualquer sobre Mobile"
          numero={3}
        />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
