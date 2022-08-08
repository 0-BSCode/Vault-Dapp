import { useContext } from "react";
import { StorageContext } from "./context/StorageContext";
import Home from "./screens/Home";
import Landing from "./screens/Landing";

function App() {
  const { currentAccount } = useContext(StorageContext);
  return <>{currentAccount ? <Home /> : <Landing />}</>;
}

export default App;
