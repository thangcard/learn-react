import React, {useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('All');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => {
            if (filteredYear !== 'All') {
                return item.date.getFullYear().toString() === filteredYear;
            }
            return true;
        }
    );

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseList items={filteredExpenses}/>
            {/*{filteredExpenses.length === 0 && <p>No expenses found</p>}*/}
            {/*{filteredExpenses.length > 0 &&*/}
            {/*        filteredExpenses.map(item => (*/}
            {/*            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*        ))*/}
            {/*}*/}
        </Card>
    );
}

export default Expenses;