import React from 'react';
import '../../stylesheets/landing.css';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landing-container">
        <div className="landing-content">
          <p className="landing-title">The Future of Estateably Banking</p>
          <label className="landing-text">Estateably Banking is a web-based platform that empowers professionals with technology that digitizes their wallet.</label>
        </div>
        <i class="fas fa-money-check-alt"></i>
        <footer>
          2021 &copy; Estateably Banking
        </footer>
      </div>
    );
  }
}

export default LandingPage;