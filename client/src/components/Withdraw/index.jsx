import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

const Withdraw = () => {
  const { withdrawFunds, handleWithdrawAmountChange, withdrawAmount } =
    useContext(StorageContext);
  return (
    <div>
      <h1>Withdraw</h1>
      <input
        type={"text"}
        value={withdrawAmount}
        onChange={handleWithdrawAmountChange}
      />
      <button onClick={withdrawFunds}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
