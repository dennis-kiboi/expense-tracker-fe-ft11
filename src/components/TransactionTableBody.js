import { useState } from "react";
import TransactionRow from "./TransactionRow";

const TransactionTableBody = ({ transactions, updateTransaction, deleteTransaction }) => {
  const transactionsList = transactions.map(transaction => (
    <TransactionRow
      key={transaction.id}
      transaction={transaction}
      updateTransaction={updateTransaction}
      deleteTransaction={deleteTransaction}
    />
  ));

  return <tbody>{transactionsList}</tbody>;
};
export default TransactionTableBody;
