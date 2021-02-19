import React from 'react';
import TransactionBox from '../transactions/transaction_box';
import TransactionCompose from '../transactions/transaction_compose';
import TransactionFilterSearch from '../transactions/transaction_filter_search';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: []
        }
    }
    
    componentWillMount() {
        this.props.fetchUserTransactions(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ transactions: newState.transactions });
    }   
    
    render() {
        if (this.state.transactions.length === 0) {
            return (
                <div>
                    <TransactionFilterSearch
                        id={this.props.currentUser.id}
                        fetchCategoryTransactions={this.props.fetchCategoryTransactions}
                    />
                    <TransactionCompose addTransaction={this.props.addTransaction}/>
                    <div>This user has no Transactions</div>
                </div>
            )
        } else {
            return (
                <div>
                    <TransactionFilterSearch
                        id={this.props.currentUser.id}
                        fetchCategoryTransactions={this.props.fetchCategoryTransactions}
                    />
                    <TransactionCompose addTransaction={this.props.addTransaction}/>
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
            );
        }
      }
}

export default Profile;