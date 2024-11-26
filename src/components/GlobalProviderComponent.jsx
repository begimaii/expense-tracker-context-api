import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);

// let initialTransactions =
//   localStorageTransactions !== null ? localStorageTransactions : [];

// Actions

export default function GlobalProviderComponent({ children }) {
  const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
  ); // null
  const updateLocalStorage = (transactions) => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  let initialTransactions = localStorageTransactions || [];

  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    updateLocalStorage(transactions);
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    setTransactions((prevTrans) => {
      return [...prevTrans, transaction];
    });
  };

  const value = {
    transactions,
    deleteTransaction,
    addTransaction,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
