import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";
import { ethers } from "ethers";

const Balance = () => {
  const { balance } = useContext(StorageContext);
  return (
    <div>
      <h1>Balance</h1>
      <p>{ethers.utils.formatEther(balance.toString())}</p>
    </div>
  );
};

export default Balance;
