import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.png";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head
        title="Ranek | Contato"
        description="Está pagina é somente para informações de contato"
      />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>ex@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua ali perto, 99</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
