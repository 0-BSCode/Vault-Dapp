import React from "react";
import Attribution from "../../components/Attribution";
import Actions from "../../components/Home/Actions";
import Information from "../../components/Home/Information";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Information />
      <div className={styles.home__divider} />
      <Actions />
      <Attribution />
    </div>
  );
};

export default Home;
