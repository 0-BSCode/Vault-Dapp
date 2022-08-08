import React, { useContext } from "react";
import styles from "./styles.module.css";
import { MediaContext } from "../../context/MediaContext";
import Attribution from "../Attribution";

const Navbar = () => {
  const { deviceWidth } = useContext(MediaContext);

  console.log(deviceWidth >= 1024);
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__header}>Vault Dapp.</h1>
      {deviceWidth >= 1024 && <Attribution />}
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
