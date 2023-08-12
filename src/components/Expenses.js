import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses({ expenses }) {
  const [dateFilterValue, setDateFilterValue] = useState();

  const [filteredExpenses, setfilteredExpenses] = useState(expenses);

  const onFilterChanged = (event) => {
    setDateFilterValue(event.target.value);
    filterExpenses(event.target.value);
  };

  const filterExpenses = (selectedYear) => {
    const filteredExpenses = expenses.filter((ex) => {
      return ex.date.getFullYear() == selectedYear;
    });

    setfilteredExpenses(filteredExpenses);
  };

  console.log(hashCode(expenses.toString()));

  function hashCode(string) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      hash = (hash << 5) - hash + code;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

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
