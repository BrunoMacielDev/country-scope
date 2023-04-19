import React from "react";
import styles from "./Nav.module.css";
import { CgArrowLeft } from "react-icons/cg";

function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <a href="http://brunomacieldev.vercel.app/" target="_blank"><CgArrowLeft /></a>
        
        <p>
          <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3fd-200d-1f4bb.svg" />{" "}
          <a href="http://brunomacieldev.vercel.app/" target="_blank">
            BrunoMacielDev
          </a>{" "}
          /{" "}
          <a href="https://brunomacieldev.vercel.app/#projects" target=")blank">
            Projects
          </a>{" "}
          /{" "}
          <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5fa-fe0f.svg" />{" "}
          CountryScope
        </p>
      </div>
    </div>
  );
}

export default Nav;
