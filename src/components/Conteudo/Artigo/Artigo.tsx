import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [destaque, setDestaque] = useState(false);

  const selecionar = () => {
    setDestaque((selecionado) => !selecionado);
  };

  return (
    <article
      onClick={selecionar}
      style={{ backgroundColor: destaque ? "yellow" : "#f9f9f9" }}
      className={estilos.artigo}
    >
      <h3> {titulo} </h3>
      <p>
        <b>Categoria:</b> {categoria}
      </p>
      <p>
        <b>Preço:</b> {preco}
      </p>
    </article>
  );
}
