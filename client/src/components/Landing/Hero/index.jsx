import React, { useContext } from "react";
import styles from "./styles.module.css";
import ethereum from "../../../assets/images/icon-ethereum.svg";
import Attribution from "../../Attribution";
import { StorageContext } from "../../../context/StorageContext";
import { MediaContext } from "../../../context/MediaContext";

const Hero = () => {
  const { connectWallet } = useContext(StorageContext);
  const { deviceWidth } = useContext(MediaContext);

  return (
    <main className={styles.hero}>
      <h2 className={styles.hero__header}>
        Storage made <span>simple</span>
      </h2>
      <div className={styles.hero__descriptions}>
        <p className={styles.hero__description}>
          Securely store your etherium in this secure decentralized vault.
        </p>
        <p className={styles.hero__description}>
          Deposit and withdraw from <b>anywhere</b> and <b>anytime</b>.
        </p>
      </div>
      <img className={styles.hero__img} src={ethereum} alt={"Ethereum Logo"} />
      <p className={styles.hero__call}>Start with just a click!</p>
      <button onClick={connectWallet} className={styles.hero__btn}>
        Connect wallet
      </button>
      {deviceWidth < 1024 && <Attribution />}
    </main>
  );
};

export default Hero;
