import React, { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

const Connect = () => {
  const { connectWallet } = useContext(StorageContext);

  return (
    <section>
      <h6>Not connected to account</h6>
      <button onClick={connectWallet}>Connect your wallet</button>
    </section>
  );
};

export default Connect;
