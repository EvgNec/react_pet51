import React, { useState, useCallback, useMemo } from "react";
import authContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = useCallback(() => {
    setUser('Test');
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(() => ({
    user,
    logIn,
    logOut
  }), [user, logIn, logOut]);

  return (
    <authContext.Provider value={contextValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;