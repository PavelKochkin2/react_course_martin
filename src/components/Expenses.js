import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses({ expenses }) {
  const [dateFilterValue, setDateFilterValue] = useState();
  const onFilterChanged = (event) => {
    setDateFilterValue(event.target.value);
  };

  return (
    <>
      <ExpensesFilter
        onFilterChanged={onFilterChanged}
        selectedYear={dateFilterValue}
      />
      <div>Picked date in the filter: {dateFilterValue}</div>
      {expenses.map((ex) => {
        return (
          <Card>
            <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} />
          </Card>
        );
      })}
    </>
  );
}
