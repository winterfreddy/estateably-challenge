import React from 'react';

class TransactionCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        category: "",
        description: "",
        value: 0,
        choice: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
    let transaction = {
        category: this.state.category,
        description: this.state.description,
        value: this.state.value,
        choice: this.state.choice
    };

    this.props.addTransaction(transaction);
    this.setState({
        category: '',
        description: '',
        value: 0,
        choice: ''
    })
  }

  handleChange(e) {
    const {name, value, type, checked} = e.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Category:</label>
                    <select 
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
                    <input
                        type="textarea"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Transaction description"
                    />
                    <label>
                        <input 
                            type="radio" 
                            name="choice"
                            value="deposit"
                            checked={this.state.choice === "deposit"}
                            onChange={this.handleChange}
                        /> Deposit
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="choice"
                            value="withdraw"
                            checked={this.state.choice === "withdraw"}
                            onChange={this.handleChange}
                        /> Withdraw
                    </label>
                    <input
                        type="text"
                        name="value"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
        </div>
    )
  }
}

export default TransactionCompose;