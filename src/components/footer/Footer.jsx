import React from "react";
import styles from "./Footer.module.css";

function Nav() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          Desarrollado por <a href="http://brunomacieldev.vercel.app/">Bruno Maciel</a> | © Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Nav;
