import React from 'react';

class TransactionFilterSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleFilter() {
        let data = [this.props.id, this.state.category]
        this.props.fetchCategoryTransactions(data);
    }

    handleSearch() {

    }

    render() {
        return(
            <div>
                <label>Category:</label>
                <select 
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
                <button onClick={this.handleFilter}>Filter</button>
                <input
                    type="textarea"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Enter transaction description or value"
                />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default TransactionFilterSearch;