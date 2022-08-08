import React from "react";
import styles from "./styles.module.css";

const Attribution = () => {
  return (
    <p className={styles.attribution}>
      made by{" "}
      <a
        className={styles.attribution__link}
        href={"https://github.com/0-BSCode"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        0-BSCode
      </a>
    </p>
  );
};

export default Attribution;
