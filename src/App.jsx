import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses.jsx";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransaction.jsx";
import "./App.css";
import { useEffect, useState } from "react";

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
); // null

let initialTransactions = localStorageTransactions || [];
// let initialTransactions =
//   localStorageTransactions !== null ? localStorageTransactions : [];

const updateLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);

  // Actions
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

  useEffect(() => {
    updateLocalStorage(transactions);
  }, [transactions]);

  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </>
  );
}

export default App;
