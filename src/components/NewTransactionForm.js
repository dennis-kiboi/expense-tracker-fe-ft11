import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTransactionForm = ({ addTransaction }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      date,
      description,
      type,
      amount,
      id: uuidv4()
    };

    addTransaction(formData);

    setDate("");
    setDescription("");
    setType("");
    setAmount("");
  };

  return (
    <div className="mb-8">
      <h2 className="heading-2">New Transaction</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-0 md:flex md:gap-4"
      >
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter Description"
          required
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
          required
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          min="0"
          placeholder="Amount"
          required
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="submit"
          value="Add"
          className="w-full md:w-auto bg-secondary text-white py-2 px-6 rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default NewTransactionForm;
