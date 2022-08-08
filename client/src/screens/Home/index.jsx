import React, { useContext } from "react";
import { MediaContext } from "../../context/MediaContext";
import Attribution from "../../components/Attribution";
import Actions from "../../components/Home/Actions";
import Information from "../../components/Home/Information";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

const Home = () => {
  const { deviceWidth } = useContext(MediaContext);

  return (
    <main className={styles.home}>
      <Navbar />
      <Information />
      <div className={styles.home__divider} />
      <Actions />
      {deviceWidth < 1024 && <Attribution />}
    </main>
  );
};

export default Home;
