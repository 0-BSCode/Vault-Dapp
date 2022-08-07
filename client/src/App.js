import { useContext } from "react";
import Balance from "./components/Balance";
import Connect from "./components/Connect";
import Deposit from "./components/Deposit";
import { StorageContext } from "./context/StorageContext";

function App() {
  const { currentAccount } = useContext(StorageContext);
  return (
    <main>
      {currentAccount ? (
        <>
          <Balance />
          <Deposit />
        </>
      ) : (
        <Connect />
      )}
    </main>
  );
}

export default App;
