import estilos from "./Artigo.module.css";
export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>Artigo 1 de exemplo</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, et
        voluptatem dignissimos dolorum necessitatibus sint quod consectetur
        aliquid! Officiis adipisci totam natus dicta laborum quisquam fugit
        corrupti nesciunt, quasi sed?
      </p>
    </article>
  );
}
