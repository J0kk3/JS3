import React from "react";
//components
import Deposit from "./components/Deposit";
import Expenses from "./components/Expenses";
//style
import "./App.css"

class App extends React.Component
{
  constructor( props )
  {
    super( props );
    this.state =
    {
      deposit: 0,
      expenses: { name: "", amount: 0 },
      balance: 0,
      withdraw: 0
    };
  };

  itemObj =
    {
      name: "",
      amount: null,
    };

  array = localStorage.getItem( "array" ) ? JSON.parse( localStorage.getItem( "array" ) ) : [];
  depositHandler = ( number ) =>
  {
    this.setState( ( prevState ) =>
    {
      return {
        deposit: +prevState.deposit + +number, balance: +prevState.balance + +number
      };
    } );
  };

  componentDidUpdate ()
  {
    localStorage.setItem( "deposit", +localStorage.getItem( "deposit" ) + this.state.deposit );
    localStorage.setItem( "balance", +localStorage.getItem( "balance" ) + this.state.balance );
    localStorage.setItem( "withdraw", +localStorage.getItem( "withdraw" ) + this.state.withdraw );
    localStorage.setItem( "array", JSON.stringify( this.array ) );
    window.location.reload();
  }

  withdrawHandler = () =>
  {
    console.log( this.itemObj );
    //check if the amount is 0 or less
    if ( this.itemObj.amount <= 0 )
    {
      alert( "Please enter a valid amount" );
      return;
    }
    if ( +localStorage.getItem( "balance" ) < this.itemObj.amount )
    {
      alert( "You have no money" );
      return;
    }
    let check = false;
    this.array.forEach( element =>
    {
      if ( element.name === this.itemObj.name )
      {
        check = true;
      }
    } );

    if ( check )
    {
      alert( "You can't add the same item twice, for some unexplained reason." );
      return;
    }

    this.array.push( this.itemObj );
    this.setState( ( prevState ) =>
    {
      return {
        balance: +prevState.balance - +this.itemObj.amount,
        withdraw: +prevState.withdraw + +this.itemObj.amount
      };
    } );
  };

  render ()
  {
    return (
      <div className="wrapper">
        <Deposit depositHandler={ this.depositHandler } />
        <Expenses withdrawHandler={ this.withdrawHandler } itemObj={ this.itemObj } />
        <div className="outputHi">
          <h5>Budget:</h5>
          <p>{ localStorage.getItem( "deposit" ) }</p>
          <h5>Withdrawn:</h5>
          <p>{ +localStorage.getItem( "withdraw" ) }</p>
          <h5>Balance:</h5>
          <p>{ localStorage.getItem( "balance" ) }</p>
        </div>
        <div className="outputLow">
          { JSON.parse( localStorage.getItem( "array" ) ) ? JSON.parse( localStorage.getItem( "array" ) ).map( ( item, index ) => <p key={ index }>Name: { item.name }   Amount: { item.amount }</p> ) : "" }
        </div>
      </div>
    );
  }
};

export default App;