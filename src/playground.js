const transactions = [
  {
    description: "Freelance Payment",
    type: "Expense",
    amount: 282.87,
    id: "dd64"
  },
  {
    description: "Grocery Shopping",
    type: "Expense",
    amount: 150,
    id: "662f"
  },
  {
    description: "Monthly Rent",
    type: "Expense",
    amount: 486.4,
    id: "13d4"
  },
  {
    description: "Utility Bill",
    type: "Expense",
    amount: 598.24,
    id: "324d"
  },
  {
    description: "Dining Out",
    type: "Income",
    amount: 69.95,
    id: "bfc1"
  },
  {
    description: "Gym Membership",
    type: "Income",
    amount: 884.39,
    id: "a9e1"
  },
  {
    description: "Book Purchase",
    type: "Expense",
    amount: 560.91,
    id: "e26c"
  },
  {
    description: "Online Course Fee",
    type: "Income",
    amount: 764.97,
    id: "98d0"
  },
  {
    description: "Coffee Shop",
    type: "Income",
    amount: 399.66,
    id: "9bd8"
  },
  {
    description: "Salary",
    type: "Income",
    amount: 100000,
    id: "JUKieGk"
  },
  {
    description: "Salary",
    type: "Income",
    amount: 10000,
    id: "xoViNsn"
  }
];

const updatedTransactions = transactions.map(transaction => {
  if (transaction.id === "xoViNsn"){
    transaction.description = "Bonus";
    return transaction;
  } else {
    return transaction;
  }
});

console.log(updatedTransactions);
