import { createContext, useState, useContext } from "react";

export const NameContext = createContext(null);

export const NameProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [product, setproduct] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cart , setCart] = useState([])


  return (
    <NameContext.Provider value={{ isDark, setIsDark , token, setToken , cart , setCart , product, setproduct }}>
      {children}
    </NameContext.Provider>
  );
};