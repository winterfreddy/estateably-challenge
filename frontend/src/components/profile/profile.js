import React from 'react';
import TransactionBox from '../transactions/transaction_box';
import TransactionCompose from '../transactions/transaction_compose';
import TransactionFilterSearch from '../transactions/transaction_filter_search';
import '../../stylesheets/profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: []
        }

        this.getAccountSummary = this.getAccountSummary.bind(this);
    }
    
    componentWillMount() {
        this.props.fetchUserTransactions(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ transactions: newState.transactions });
    }
    
    getAccountSummary() {
        let balance = this.props.currentUser.balance * -1;
        if(this.props.currentUser.balance > 0) {
            return (
                <div className="profile-summary">
                    <label>Account Summary</label>
                    <label>Balance: ${this.props.currentUser.balance}</label>
                </div>
            )
        }
        else {
            return (
                <div className="profile-summary">
                    <label>Account Summary</label>
                    <label>Balance: <label className="negative-bal">- ${balance}</label></label>
                </div>
            )
        }
    }
    
    render() {
        if (this.state.transactions.length === 0) {
            return (
                <div className="profile-component">
                    <div className="profile-header">
                        {this.getAccountSummary()}
                        <TransactionFilterSearch
                            id={this.props.currentUser.id}
                            searchTransactions={this.props.searchTransactions}
                        />
                    </div>
                    <div className="profile-content">
                        <label className="transaction-title">Add Transaction</label>
                        <TransactionCompose
                            username={this.props.currentUser.username}
                            addTransaction={this.props.addTransaction}
                            updateBalance={this.props.updateBalance}
                            balance={this.props.currentUser.balance}
                        />
                        <label className="transaction-title">Past Transactions</label>
                        <div className="transaction-header">
                            <p>Date</p>
                            <p>Category</p>
                            <p>Description</p>
                            <p>Amount</p>
                        </div>
                        <div className="no-transaction-content">There are no transactions</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="profile-component">
                    <div className="profile-header">
                        {this.getAccountSummary()}
                        <TransactionFilterSearch
                            id={this.props.currentUser.id}
                            searchTransactions={this.props.searchTransactions}
                        />
                    </div>
                    <div className="profile-content">
                        <label className="transaction-title">Add Transaction</label>
                        <TransactionCompose
                            username={this.props.currentUser.username}
                            addTransaction={this.props.addTransaction}
                            updateBalance={this.props.updateBalance}
                            balance={this.props.currentUser.balance}
                        />
                        <label className="transaction-title">Past Transactions</label>
                        <div className="transaction-header">
                            <p>Date</p>
                            <p>Category</p>
                            <p>Description</p>
                            <p>Amount</p>
                        </div>
                        {this.state.transactions.map(transaction => (
                            <TransactionBox
                                key={transaction._id}
                                date={transaction.date}
                                category={transaction.category}
                                description={transaction.description}
                                value={transaction.value}
                                choice={transaction.choice}
                            />
                        ))}
                    </div>
                </div>
            );
        }
      }
}

export default Profile;