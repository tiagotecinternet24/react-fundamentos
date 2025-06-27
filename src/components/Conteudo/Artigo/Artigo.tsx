import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [cor, setCor] = useState("#f9f9f9");

  const selecionar = () => {
    setCor((valor) => {
      return valor === "#f9f9f9" ? "yellow" : "#f9f9f9";
    });
  };

  return (
    <article
      onClick={selecionar}
      className={estilos.artigo}
      style={{ backgroundColor: cor }}
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
