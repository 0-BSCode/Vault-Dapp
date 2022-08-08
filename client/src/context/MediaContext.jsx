import React, { useState, useEffect } from "react";

export const MediaContext = React.createContext();

const MediaProvider = ({ children }) => {
  const [deviceWidth, setDeviceWidth] = useState(-1);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setDeviceWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <MediaContext.Provider value={{ deviceWidth }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
