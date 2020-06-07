import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadUserLocal = async () => {
      const userLocal = localStorage.getItem("user");

      if (userLocal) {
        setUser(JSON.parse(userLocal));
      }

      setLoaded(true);
    };

    loadUserLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const onSetUser = (user_) => {
    setUser(user_);
  };

  return (
    <UserContext.Provider value={{ user, loaded, onSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
