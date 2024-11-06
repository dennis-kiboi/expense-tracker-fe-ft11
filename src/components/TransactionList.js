import TransactionListHeader from "./TransactionListHeader";
import TransactionTable from "./TransactionTable";

const TransactionsList = ({ transactions, updateTransaction, deleteTransaction }) => {
  return (
    <div>
      <TransactionListHeader />
      <TransactionTable
        transactions={transactions}
        updateTransaction={updateTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default TransactionsList;
