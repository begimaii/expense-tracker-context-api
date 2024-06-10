import React from "react";
import { getSign } from "../utils/helpers";

export const Transaction = ({ transaction, deleteTransaction }) => {
  const customClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={customClass}>
      {transaction.text}{" "}
      <span>
        {getSign(transaction.amount)}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
