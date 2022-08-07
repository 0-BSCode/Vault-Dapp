import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";
const Balance = () => {
  const { balance } = useContext(StorageContext);
  console.log("BALANCE");
  console.log(balance);

  return (
    <div>
      <h1>Balance</h1>
      <p>{balance.toString()}</p>
    </div>
  );
};

export default Balance;
