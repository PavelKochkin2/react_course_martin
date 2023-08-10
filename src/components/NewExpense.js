import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm formSubmitHandler={props.onNewExpenseSubmit} />
    </div>
  );
}
