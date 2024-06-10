import React from "react";
import { getSignWithAmount } from "../utils/helpers";

export const Transaction = ({ transaction, deleteTransaction }) => {
  const customClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={customClass}>
      {transaction.text} <span>{getSignWithAmount(transaction.amount)}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
