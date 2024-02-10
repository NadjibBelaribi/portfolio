import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting } from "../../data.js";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header className="header">
            <a href="#home" className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                <img src={require("../../assets/images/logo.png")} />
              </span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <a href="#home" style={{ color: theme.text }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#education" style={{ color: theme.text }}>
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" style={{ color: theme.text }}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: theme.text }}>
                  Contact
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
