import React, { useContext } from "react";
import Hero from "../../components/Landing/Hero";
import Navbar from "../../components/Navbar";
import { MediaContext } from "../../context/MediaContext";

const Landing = () => {
  const { deviceWidth } = useContext(MediaContext);
  console.log(`Device width: ${deviceWidth}`);
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Landing;
