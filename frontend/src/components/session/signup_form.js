import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history)
            .then(() => this.props.history.push('/profile'));; 
    }

    renderErrors() {
        if(Object.keys(this.props.errors).length) {
            return(
                <ul>
                    {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}> {this.state.errors[error]} </li>
                    ))}
                </ul>
            );
        }
        return;
    }

    render() {
        return (
        <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <br/>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder="Username"
                        required={true}
                    />
                    <br/>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                        required={true}
                        minLength="6"
                    />
                    <br/>
                    <input type="password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        placeholder="Confirm Password"
                        required={true}
                        minLength="6"
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                    {this.renderErrors()}
                </div>
            </form>
        </div>
        );
    }
}

export default withRouter(SignupForm);