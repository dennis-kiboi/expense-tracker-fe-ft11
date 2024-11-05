import TransactionTableBody from "./TransactionTableBody";
import TransactionTableHeader from "./TransactionTableHeader";

const TransactionTable = () => {
  return (
    <div>
      <table>
        <TransactionTableHeader />
        <TransactionTableBody />
      </table>
    </div>
  );
};
export default TransactionTable;
