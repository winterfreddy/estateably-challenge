import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/authform.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
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
      password: this.state.password
    };

    this.props.login(user)
        .then(this.props.history.push('/profile')); 
  }

  handleDemoLogin(e) {
    e.persist();
    this.setState( {username: 'DemoUser', password: '123456' }, () => this.handleSubmit(e));
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}> {this.state.errors[error]} </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-content">
          <p className="login-form-content-title"><i class="fas fa-university"></i>Estateably Banking</p>
          <p className="login-form-content-text-1">Welcome!</p>
          <p className="login-form-content-text">Please log in</p>
          <div>
              <label className="login-form-content-text-1">New user? </label><Link className="redirect-link" to={'/signup'}>Sign up here</Link>
          </div>
          <button className="demo-user-btn" onClick={this.handleDemoLogin}>Sign in as demo user</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form-panel">
            <div className="login-form-panel-box">
              <label>Username</label>
              <input type="text"
                className="input-textbox"
                value={this.state.username}
                onChange={this.update('username')}
                required={true}
              />
            </div>
            <div className="login-form-panel-box">
              <label>Password</label>
              <input type="password"
                className="input-textbox"
                value={this.state.password}
                onChange={this.update('password')}
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

export default withRouter(LoginForm);