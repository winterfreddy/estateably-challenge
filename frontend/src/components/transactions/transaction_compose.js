import React from 'react';
import '../../stylesheets/transaction.css';

class TransactionCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        category: "Salary",
        description: "",
        value: 0,
        choice: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
    
    let estimatedBalance = +(this.props.balance);
    let num = +((+(this.state.value)).toFixed(2));
    let message = "";
    
    if(this.state.choice === "withdraw") {
        message += ". Are you sure you want to withdraw $" + num + "?";
        estimatedBalance = (estimatedBalance - num).toFixed(2);
    }
    else {
        message += ". Are you sure you want to deposit $" + num + "?";
        estimatedBalance = (estimatedBalance + num).toFixed(2);
    }
    
    if(estimatedBalance < 0) {
        message = "Your new balance will be -$" + (-1 * +(estimatedBalance)).toString() + message;
    }
    else {
        message = "Your new balance will be $" + estimatedBalance + message;
    }
    
    let transaction = {
        category: this.state.category,
        description: this.state.description,
        value: this.state.value,
        choice: this.state.choice
    };

    let balancePackage = {
        username: this.props.username,
        value: this.state.value,
        choice: this.state.choice
    }

    if (window.confirm(message)) {
        this.props.addTransaction(transaction)
            .then(this.props.updateBalance(balancePackage))
    
        this.setState({
            category: 'Salary',
            description: '',
            value: 0,
            choice: ''
        })
    }
  }

  handleChange(e) {
    const {name, value, type, checked} = e.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
            <form
                className="transaction-compose-header"
                onSubmit={this.handleSubmit}>
                <div className="compose-header">
                    <div>
                        <label>Category: </label>
                        <select
                            className="filter-choice"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="Salary">Salary</option>
                            <option value="Food">Food</option>
                            <option value="Transport">Transport</option>
                            <option value="House">House</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            className="search-choice"
                            type="textarea"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="Transaction description"
                            required
                        />
                    </div>
                </div>
                <div className="compose-header">
                    <div>
                        <label>Type: </label>
                        <label>
                            <input 
                                type="radio" 
                                name="choice"
                                value="deposit"
                                checked={this.state.choice === "deposit"}
                                onChange={this.handleChange}
                            /> Deposit
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="choice"
                                value="withdraw"
                                checked={this.state.choice === "withdraw"}
                                onChange={this.handleChange}
                            /> Withdraw
                        </label>
                    </div>
                    <div>
                        <label>Value: </label>
                        <input
                            className="search-choice"
                            type="text"
                            name="value"
                            value={this.state.value}
                            onChange={this.handleChange}
                            required
                        />
                        <input className="transaction-add-btn" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
    )
  }
}

export default TransactionCompose;