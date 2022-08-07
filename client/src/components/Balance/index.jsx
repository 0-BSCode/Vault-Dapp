import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";
const Balance = () => {
  const { balance } = useContext(StorageContext);
  console.log("BALANCE");

  return (
    <div>
      <h1>Balance</h1>
      <p>{balance}</p>
    </div>
  );
};

export default Balance;
