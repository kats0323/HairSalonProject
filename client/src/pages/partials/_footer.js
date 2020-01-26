import React, { Component } from "react";
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
            Miho's Style &copy;
          </div>
        </div>
      </div>
    );
  };
};

export default Footer;