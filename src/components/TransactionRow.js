import { useState } from "react";

const TransactionRow = ({
  transaction,
  updateTransaction,
  deleteTransaction
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState(transaction);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedTransaction(prev => ({...prev, [name]: value}));
  };

  const handleSave = () => {
    updateTransaction(transaction.id, editedTransaction);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="date"
            name="date"
            value={editedTransaction.date}
            onChange={handleChange}
          />
        ) : (
          transaction.date || "Null"
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="description"
            value={editedTransaction.description}
            onChange={handleChange}
          />
        ) : (
          transaction.description
        )}
      </td>
      <td>
        {isEditing ? (
          <select
            type="text"
            name="type"
            value={editedTransaction.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        ) : (
          transaction.type
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            min={0}
            name="amount"
            value={editedTransaction.amount}
            onChange={handleChange}
          />
        ) : (
          transaction.amount
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};
export default TransactionRow;
