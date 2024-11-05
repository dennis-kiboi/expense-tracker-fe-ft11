const TransactionRow = (props) => {
  

  return (
    <tr>
      <td>{props.date || "Null"}</td>
      <td>{props.description}</td>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};
export default TransactionRow;

