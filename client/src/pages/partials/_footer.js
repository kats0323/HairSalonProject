import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../partials/footer.style.css'

class Footer extends Component {
  render() {
    const Line = ({ color }) => (
      <div className="style-line">
        <hr style={{ color: "green", border: "0.7px solid", width: "60%", }} />
      </div>
    );
    return (
      <div>
        <Line />
        <div className='footer-div'>
          <div className="footer">
            <Link to="/login">Miho's Style &copy;</Link>
          </div>
        </div>
      </div>
    );
  };
};

export default Footer;