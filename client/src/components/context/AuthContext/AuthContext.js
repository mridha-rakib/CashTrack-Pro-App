import { createContext, useReducer } from "react";

// auth context
const authContext = createContext();

// initial state
const INITIAL_STATE = {
  userAuth: null,
  error: null,
  loading: false,
  profile: null,
};

// Auth reducer

const reducer = (state, action) => {
  return {};
};

// provider
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <authContext.Provider value={{ isLogin: false }}>
      {children}{" "}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
