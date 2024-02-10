import React, { Component } from "react";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main" id="education">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
            <div className="heading-div">
              <div className="heading-img-div">
                <img
                  src={require("../../assets/images/education.png")}
                  alt=""
                />
              </div>
              <div className="heading-text-div">
                <Educations theme={this.props.theme} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Education;
