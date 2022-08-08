import React, { useContext } from "react";
import styles from "./styles.module.css";
import { MediaContext } from "../../context/MediaContext";
import Attribution from "../Attribution";

const Navbar = () => {
  const { deviceWidth } = useContext(MediaContext);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__header}>Vault Dapp.</h1>
      {deviceWidth >= 1024 && <Attribution />}
    </nav>
  );
};

export default Navbar;
