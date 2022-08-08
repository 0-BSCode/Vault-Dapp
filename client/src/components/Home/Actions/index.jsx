import React, { useContext } from "react";
import { StorageContext } from "../../../context/StorageContext";
import Action from "./Action";
import styles from "./styles.module.css";

const Actions = () => {
  const {
    depositAmount,
    handleDepositAmountChange,
    depositFunds,
    withdrawAmount,
    handleWithdrawAmountChange,
    withdrawFunds,
  } = useContext(StorageContext);

  return (
    <section className={styles.actions}>
      <h3 className={styles.actions__header}>What do you want to do?</h3>
      <div className={styles.actions__wrapper}>
        <Action
          action={"DEPOSIT"}
          description={"Send ether to the vault for safekeeping."}
          value={depositAmount}
          onChange={handleDepositAmountChange}
          onSubmit={depositFunds}
        />
        <Action
          action={"WITHDRAW"}
          description={"Send ether from the vault back to your wallet."}
          value={withdrawAmount}
          onChange={handleWithdrawAmountChange}
          onSubmit={withdrawFunds}
        />
      </div>
    </section>
  );
};

export default Actions;
