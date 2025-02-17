import { createContext, useState, useContext } from "react";

const NameContext = createContext();

export function useNameContext() {
  return useContext(NameContext);
}

export const NameProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <NameContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </NameContext.Provider>
  );
};