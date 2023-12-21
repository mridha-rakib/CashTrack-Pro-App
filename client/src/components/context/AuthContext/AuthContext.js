import axios from "axios";
import { createContext, useReducer } from "react";
// auth context
export const authContext = createContext();

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

  // Login action
  const loginUserAction = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const res = axios.post(
        "localhost:8080/api/v1/users/login",
        formData,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ loginUserAction }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
