import React from "react";
import { Transaction } from "./Transaction.jsx";
import { MyContext } from "./GlobalProviderComponent";
import { useContext } from "react";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(MyContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};
