import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/authform.css';

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
        if (!nextProps.errors) {
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
            <div className="signup-form-content">
                <p className="signup-form-content-title"><i class="fas fa-university"></i>Estateably Banking</p>
                <p className="signup-form-content-text-1">Welcome!</p>
                <p className="signup-form-content-text">Please sign up here</p>
                <div>
                    <label className="signup-form-content-text-1">Returning user? </label><Link className="redirect-link" to={'/login'}>Log in here</Link>
                </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="signup-form-panel">
                    <div className="signup-form-panel-box">
                        <label>Username</label>
                        <input type="text"
                            className="input-textbox"
                            value={this.state.username}
                            onChange={this.update('username')}
                            required={true}
                        />
                    </div>
                    <div className="signup-form-panel-box">
                        <label>Password</label>
                        <input type="password"
                            className="input-textbox"
                            value={this.state.password}
                            onChange={this.update('password')}
                            required={true}
                            minLength="6"
                        />
                    </div>
                    <div className="signup-form-panel-box">
                        <label>Confirm Password</label>
                        <input type="password"
                            className="input-textbox"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            required={true}
                            minLength="6"
                        />
                    </div>
                    <input type="submit" value="Submit" className="submit-btn"/>
                    {this.renderErrors()}
                </div>
            </form>
        </div>
        );
    }
}

export default withRouter(SignupForm);