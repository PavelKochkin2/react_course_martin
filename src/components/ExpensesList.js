import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((ex) => {
        return (
          <ExpenseItem
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
            key={ex.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
