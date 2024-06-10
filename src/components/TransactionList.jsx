import React from "react";
import { Transaction } from "./Transaction.jsx";

export const TransactionList = ({ transactions, deleteTransaction }) => {
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
