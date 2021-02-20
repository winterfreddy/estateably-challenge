import React from 'react';
import '../../stylesheets/transaction.css';

class TransactionFilterSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSearch(command) {
        let data;
        if(command === 'filter') {
            data = [this.props.id, this.state.category];
        }
        else {
            data = [this.props.id, this.state.description];
            this.setState({description: ''});
        }
        this.props.searchTransactions(data);
    }

    render() {
        return(
            <div className="transaction-filter-search-container">
                <div>
                    <label> Filter by category: </label>
                    <select
                        className="filter-choice"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="All">All</option>
                        <option value="Salary">Salary</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="House">House</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        className="filter-search-btn"
                        onClick={() => this.handleSearch('filter')}>
                        Filter
                    </button>
                </div>
                <div>
                    <label>Search by: </label>
                    <input
                        className="search-choice"
                        type="textarea"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="description/value"
                    />
                    <button
                        className="filter-search-btn"
                        onClick={() => this.handleSearch('search')}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default TransactionFilterSearch;