import React, {useState} from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false);

    const saveExpenseHandler = (enterExpenseData) => {
        const expenseData = {
          ...enterExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddNewExpense(false);
    }

    const addNewExpenseHandler = () => {
        setAddNewExpense(true);
    }

    const cancelHandler = () => {
        setAddNewExpense(false);
    }

    return <div className="new-expense">
        {addNewExpense && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseHandler}/>}
        {!addNewExpense && <button type="button" onClick={addNewExpenseHandler}>Add New Expense</button>}
    </div>
}

export default NewExpense;