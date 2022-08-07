import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const StorageContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const storageContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return storageContract;
};

const StorageProvider = ({ children }) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState("0");

  const handleDepositAmountChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleWithdrawAmountChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const checkForWalletConnection = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!");

      // const accounts = await ethereum.request({ method: "eth_accounts" });

      // console.log("Accounts");
      // console.log(accounts);
      // console.log(accounts[0]);

      const provider = new ethers.providers.Web3Provider(ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);
      console.log(accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getBalance();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!");

      // const accounts = await ethereum.request({
      //   method: "eth_requestAccounts",
      // });

      // console.log("Accounts");
      // console.log(accounts);

      const provider = new ethers.providers.Web3Provider(ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);
      console.log(accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getBalance();
      } else {
        console.log("No accounts found");
      }
    } catch (e) {
      console.log(e);

      throw new Error("No ethereum object found");
    }
  };

  const getBalance = async () => {
    try {
      if (ethereum) {
        const storageContract = createEthereumContract();
        const balance = await storageContract.viewBalance({
          from: currentAccount,
        });

        setBalance(balance);
      } else {
        console.log("Ethereum isn't present");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const depositFunds = async () => {
    const storageContract = createEthereumContract();
    const parsedAmount = ethers.utils.parseEther(depositAmount);

    const txHash = await storageContract.deposit({ value: parsedAmount });

    setIsLoading(true);
    console.log(`Loading - ${txHash.hash}`);
    await txHash.wait();
    console.log(`Success - ${txHash.hash}`);
    setIsLoading(false);

    setDepositAmount("");
    getBalance();
  };

  const withdrawFunds = async () => {
    const storageContract = createEthereumContract();
    const parsedAmount = ethers.utils.parseEther(withdrawAmount);

    const txHash = await storageContract.withdraw(parsedAmount);

    setIsLoading(true);
    console.log(`Loading - ${txHash.hash}`);
    await txHash.wait();
    console.log(`Success - ${txHash.hash}`);
    setIsLoading(false);

    setWithdrawAmount("");
    getBalance();
  };

  useEffect(() => {
    console.log("FROM PROVIDER");
    checkForWalletConnection();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        connectWallet,
        currentAccount,
        balance,
        getBalance,
        depositAmount,
        handleDepositAmountChange,
        depositFunds,
        withdrawAmount,
        handleWithdrawAmountChange,
        withdrawAmount,
        isLoading,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
