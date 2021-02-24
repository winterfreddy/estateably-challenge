import React from 'react';
import '../../stylesheets/transaction.css';

class TransactionBox extends React.Component {
  render() {

    let finalDate = this.props.date.slice(0,10);
    let finalValue = this.props.choice === "deposit" ? "+ $" + this.props.value : "- $" + this.props.value;
    // let finalValue = this.props.choice === "deposit" ? "+ $" + (this.props.value).toFixed(2) : "- $" + (this.props.value).toFixed(2);

    return (
        <div className="transaction-content">
            <p>{finalDate}</p>
            <p>{this.props.category}</p>
            <p>{this.props.description}</p>
            <p>{finalValue}</p>
        </div>
    );
  }
}

export default TransactionBox;