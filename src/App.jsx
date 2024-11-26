import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses.jsx";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransaction.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import GlobalProviderComponent from "./components/GlobalProviderComponent.jsx";

// const localStorageTransactions = JSON.parse(
//   localStorage.getItem("transactions")
// ); // null

// let initialTransactions = localStorageTransactions || [];
// // let initialTransactions =
// //   localStorageTransactions !== null ? localStorageTransactions : [];

// const updateLocalStorage = (transactions) => {
//   localStorage.setItem("transactions", JSON.stringify(transactions));
// };

function App() {
  return (
    <GlobalProviderComponent>
      <>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </>
    </GlobalProviderComponent>
  );
}

export default App;
