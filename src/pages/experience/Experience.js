import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../data.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main" id="experience">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="experiences-header" style={{ color: theme.text }}>
              Experiences
            </h1>
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assets/images/${experience["header_image_path"]}`)}
                  alt=""
                />
              </div>
              <ExperienceAccordion
                sections={experience["sections"]}
                theme={theme}
              />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Experience;
