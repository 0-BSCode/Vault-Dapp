import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

const Deposit = () => {
  const { depositFunds } = useContext(StorageContext);
  return (
    <div>
      <h1>Deposit</h1>
      <button onClick={(e) => depositFunds("2")}>Deposit</button>
    </div>
  );
};

export default Deposit;
