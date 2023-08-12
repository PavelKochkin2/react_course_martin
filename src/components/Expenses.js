import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses({ expenses }) {
  const [dateFilterValue, setDateFilterValue] = useState();

  const incomingExpenses = expenses;

  const [filteredExpenses, setfilteredExpenses] = useState(expenses);

  const onFilterChanged = (event) => {
    setDateFilterValue(event.target.value);
    filterExpenses(event.target.value);
  };

  const filterExpenses = (selectedYear) => {
    const filteredExpenses = incomingExpenses.filter(
      (ex) => ex.date.toISOString().substring(0, 4) === selectedYear
    );

    setfilteredExpenses(filteredExpenses);
  };

  return (
    <>
      <ExpensesFilter
        onFilterChanged={onFilterChanged}
        selectedYear={dateFilterValue}
      />
      <div>Picked date in the filter: {dateFilterValue}</div>
      {filteredExpenses.map((ex) => {
        return (
          <Card>
            <ExpenseItem
              title={ex.title}
              amount={ex.amount}
              date={ex.date}
              key={ex.id}
            />
          </Card>
        );
      })}
    </>
  );
}
