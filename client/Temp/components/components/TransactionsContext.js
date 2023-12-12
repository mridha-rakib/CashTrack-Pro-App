import React, { createContext, useReducer } from "react";
import axios from "axios";

// import { apiURL } from "../../utils/apiURL";
import {
  TRANSACTION_CREATION_STARTED,
  TRANSACTION_CREATION_SUCCES,
  TRANSACTION_CREATION_FAIL,
} from "./transactionsActionTypes";

export const TransactionContext = createContext();

const INITIAL_STATE = {
  transaction: null,
  transactions: [],
  loading: false,
  error: null,
  token: JSON.parse(localStorage.getItem("userAuth")),
};
const transactionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRANSACTION_CREATION_STARTED:
      return {
        ...state,
        loading: true,
      };
    case TRANSACTION_CREATION_SUCCES:
      return {
        ...state,
        loading: false,
        transaction: payload,
      };
    case TRANSACTION_CREATION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, INITIAL_STATE);

  //create account
  const createTransactionAction = async accountData => {
    try {
      dispatch({ type: TRANSACTION_CREATION_STARTED });
      //header
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state?.token?.token}`,
        },
      };
      //request
      const res = await axios.post(
        `http://localhost:3000/api/v1/transactions`,
        accountData,
        config
      );

      dispatch({ type: TRANSACTION_CREATION_SUCCES, payload: res?.data });
    } catch (error) {
      dispatch({ type: TRANSACTION_CREATION_FAIL, payload: error });
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        transaction: state.transaction,
        transactions: state.transactions,
        createTransactionAction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
