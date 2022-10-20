import React from "react";
//style
import "./Deposit.css";

class Deposit extends React.Component
{
    constructor( props )
    {
        super( props );
        this.depositRef = React.createRef();
    }

    depositHandler = ( e ) =>
    {
        e.preventDefault();

        const deposit = this.depositRef.current.value;
        this.props.depositHandler( deposit );
    };

    render ()
    {
        return (
            <div className="form-wrapper">
                <form onSubmit={ ( e ) => this.depositHandler( e ) } className="form-deposit">
                    <label htmlFor="deposit">Deposit:</label>
                    <input id="deposit" ref={ this.depositRef } type="number" placeholder="Deposit..." />
                    <button type="submit">Deposit</button>
                </form>
            </div>
        );
    }
}

export default Deposit;