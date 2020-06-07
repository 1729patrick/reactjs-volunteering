import React from "react";

import Routes from "./routes";
import { useUser } from "./context/UserContext";
import api from "./services/api";

function App() {
  const { user, loaded } = useUser();
  api.defaults.headers.authorization = `Bearer ${user?.token}`;

  if (!loaded) {
    return null;
  }

  return <Routes />;
}

export default App;
