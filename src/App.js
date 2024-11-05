import Header from "./components/Header";
import NewTransactionForm from "./components/NewTransactionForm";
import TransactionsList from "./components/TransactionList";

const App = () => {

  
  return (
    <div>
      <Header />
      <NewTransactionForm />
      <TransactionsList />
    </div>
  );
};

export default App;
