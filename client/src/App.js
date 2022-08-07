import { useContext } from "react";
import Balance from "./components/Balance";
import Connect from "./components/Connect";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import { StorageContext } from "./context/StorageContext";

function App() {
  const { currentAccount } = useContext(StorageContext);
  return (
    <main>
      {currentAccount ? (
        <>
          <Balance />
          <Deposit />
          <Withdraw />
        </>
      ) : (
        <Connect />
      )}
    </main>
  );
}

export default App;
