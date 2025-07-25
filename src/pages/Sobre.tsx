import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Meu App React";
  }, []);
  return (
    <section>
      <h2>Sobre nossa empresa</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum veniam
        earum cumque aspernatur, consequatur aliquam libero iste perspiciatis
        ducimus nemo dicta, quisquam adipisci perferendis accusantium?
        Asperiores autem dolorum fugiat corrupti.
      </p>
    </section>
  );
}
