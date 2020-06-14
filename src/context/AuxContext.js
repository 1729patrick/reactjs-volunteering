import React, { createContext, useContext, useState } from "react";

const AuxContext = createContext();

export const AuxProvider = ({ children }) => {
  const [reload, setReload] = useState(0);

  return (
    <AuxContext.Provider value={{ reload, setReload }}>
      {children}
    </AuxContext.Provider>
  );
};

export const useAux = () => useContext(AuxContext);
