import React from "react";
//style
import "./Expenses.css";

class Expenses extends React.Component
{
    withdrawHandler = ( e ) =>
    {
        e.preventDefault();
        this.props.withdrawHandler();
    };

    render ()
    {
        return (
            <div className="expenses">
                <form onSubmit={ this.withdrawHandler }>
                    <label htmlFor="expenseName">Product name</label>
                    <input /*ref={ this.nameRef }*/ onChange={ ( e ) => this.props.itemObj.name = e.target.value } id="expenseName" type="text" placeholder="Expense name" />
                    <label htmlFor="withdraw">Withdraw:</label>
                    <input /*ref={ this.amountRef }*/ onChange={ ( e ) => this.props.itemObj.amount = e.target.value } id="withdraw" type="number" placeholder="Withdraw..." />
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}

export default Expenses;