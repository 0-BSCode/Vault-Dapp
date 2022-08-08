import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__header}>Vault Dapp.</h1>
      {/* <p className={styles.nav__description}>
        made by{" "}
        <a
          className={styles.nav__descriptionLink}
          href={"https://github.com/0-BSCode"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          0-BSCode
        </a>
      </p> */}
    </nav>
  );
};

export default Navbar;
