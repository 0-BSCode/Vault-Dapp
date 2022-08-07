import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

const Deposit = () => {
  const { depositFunds, handleDepositAmountChange, depositAmount } =
    useContext(StorageContext);
  return (
    <div>
      <h1>Deposit</h1>
      <input
        type={"text"}
        value={depositAmount}
        onChange={handleDepositAmountChange}
      />
      <button onClick={depositFunds}>Deposit</button>
    </div>
  );
};

export default Deposit;
