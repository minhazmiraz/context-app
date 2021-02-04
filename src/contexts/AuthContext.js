import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({ isLoggedIn: true });

  const toggleAuth = () => {
    setAuth({ ...auth, isLoggedIn: !auth.isLoggedIn });
  };

  return (
    <AuthContext.Provider value={{ ...auth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
