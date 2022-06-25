import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <li style={{ margin: "10px", fontSize: "20px" }}>
          <a href="https://www.linkedin.com/in/paolo-siroko-452b98216/">
            LinkedIn
          </a>
        </li>

        <li style={{ margin: "10px", fontSize: "20px" }}>
          <a href="https://github.com/paolosiroko">Github</a>
        </li>
      </div>
      <p> &copy; 2022 paolosiroko@gmail.com</p>
    </div>
  );
}

export default Footer;
