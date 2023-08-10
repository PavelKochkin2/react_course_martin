import { useState } from "react";
import "./ExpenseForm.css";

// interface FormState {
//   title: string;
//   amount: string;
//   date: Date;
// }

const ExpenseForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });

  const onFormSubmit = (event) => {
    props.formSubmitHandler(event, formState);
  };

  const onTitleChange = (event) => {
    const newValue = event.target.value;
    setFormState((prevState) => {
      return { ...prevState, title: newValue };
    });
  };

  const onAmountChange = (event) => {
    const newValue = event.target.value;
    setFormState((prevState) => {
      return { ...prevState, amount: newValue };
    });
  };

  const onDateChange = (event) => {
    const newValue = new Date(event.target.value);
    setFormState((prevState) => {
      return { ...prevState, date: newValue };
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={formState.title} onChange={onTitleChange} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formState.amount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-02-24"
            value={formState.Date}
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
