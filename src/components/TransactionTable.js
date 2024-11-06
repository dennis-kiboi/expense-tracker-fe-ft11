import TransactionTableBody from "./TransactionTableBody";
import TransactionTableHeader from "./TransactionTableHeader";

const TransactionTable = ({ transactions, updateTransaction, deleteTransaction }) => {
  return (
    <div>
      <table>
        <TransactionTableHeader />
        <TransactionTableBody
          transactions={transactions}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
        />
      </table>
    </div>
  );
};
export default TransactionTable;
