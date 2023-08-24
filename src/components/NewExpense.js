import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onBabyBom = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onBabyBom}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          formSubmitHandler={props.onNewExpenseSubmit}
          onCancel={setIsEditing}
        />
      )}
    </div>
  );
}
