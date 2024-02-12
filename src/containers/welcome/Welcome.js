import React from "react";
import "./Welcome.css";
import Button from "../../components/button/Button";
import { welcome } from "../../data";
import { Fade } from "react-reveal";

export default function Welcome(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="welcome">
        <div className="welcome-main">
          <div className="welcome-text-div">
            <div>
              <h1 className="welcome-text" style={{ color: theme.text }}>
                {welcome.title}
              </h1>
              {welcome.subtitle && (
                <h2 className="welcome-subtitle" style={{ color: theme.text }}>
                  {welcome.subtitle}
                </h2>
              )}
              <p
                className="welcome-text-p description"
                style={{ color: theme.secondaryText }}
              >
                {welcome.description}
              </p>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Check my resume"
                  newTab={true}
                  href={welcome.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="welcome-image-div">
            <img src={require(`../../assets/images/home.png`)} alt="" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
