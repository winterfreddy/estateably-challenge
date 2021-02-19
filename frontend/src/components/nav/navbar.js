import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="navigation-btns">
              <p>Hi {this.props.currentUser.username}!</p>
              <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="navigation-btns">
                <Link className="signin-btn" to={'/signup'}>Signup</Link>
                <Link className="login-btn" to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navigation-container">
          <div className="navigation-content">
            <h1>Estateably Banking</h1>
            { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;