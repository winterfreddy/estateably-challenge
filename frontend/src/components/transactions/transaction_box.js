import React from 'react';

class TransactionBox extends React.Component {
  render() {

    let finalDate = this.props.date.slice(0,10);
    let finalValue = this.props.choice === "deposit" ? "+" + this.props.value : "-" + this.props.value;

    return (
        <div>
            <p>{finalDate}</p>
            <p>{this.props.category}</p>
            <p>{this.props.description}</p>
            <p>{finalValue}</p>
        </div>
    );
  }
}

export default TransactionBox;