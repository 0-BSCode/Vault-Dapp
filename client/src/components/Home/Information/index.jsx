import React, { useContext } from "react";
import { StorageContext } from "../../../context/StorageContext";
import styles from "./styles.module.css";
import ethereum from "../../../assets/images/icon-ethereum.svg";
import parseAccount from "../../../utils/parseAccount";

const Information = () => {
  const { currentAccount, balance } = useContext(StorageContext);
  console.log(currentAccount);

  return (
    <section className={styles.info}>
      <div className={styles.info__content}>
        <p className={styles.info__caption}>Welcome,</p>
        <h1 className={styles.info__name}>{parseAccount(currentAccount)}</h1>
      </div>
      <div className={styles.info__content}>
        <p className={styles.info__caption}>Your balance:</p>
        <div className={styles.info__balance}>
          <img
            className={styles.info__balanceLogo}
            src={ethereum}
            alt={"Ethereum Logo"}
          />
          <h2
            className={styles.info__balanceAmount}
          >{`${balance.toString()} ETH`}</h2>
        </div>
      </div>
    </section>
  );
};

export default Information;
