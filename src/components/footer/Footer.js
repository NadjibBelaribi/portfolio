import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { welcome } from "../../data.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made by {welcome.title}
        </p>
      </Fade>
    </div>
  );
}
