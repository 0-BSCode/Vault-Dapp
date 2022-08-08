import React from "react";
import styles from "./styles.module.css";

const Action = ({ action, description, value, onChange, onSubmit }) => {
  return (
    <div className={styles.action}>
      <div className={styles.action__heading}>
        <h5 className={styles.action__header}>{action}</h5>
        <p className={styles.action__description}>{description}</p>
      </div>
      <form
        className={styles.action__form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label className={styles.action__formLabel} for={action}>
          Amount
        </label>
        <div className={styles.action__formInputWrapper}>
          <input
            className={styles.action__formInput}
            type={"text"}
            id={action}
            name={action}
            value={value}
            onChange={onChange}
          />
          <button
            className={styles.action__formCurrency}
            onClick={(e) => e.preventDefault()}
          >
            ETH
          </button>
        </div>

        <button className={styles.action__formSubmit} type={"submit"}>
          {action === "WITHDRAW" ? "RETRIEVE" : "SEND"}
        </button>
      </form>
      <p className={styles.action__footnote}>
        * Transfer will cost a little more than the amount specified to account
        for gas cost.
      </p>
    </div>
  );
};

export default Action;
