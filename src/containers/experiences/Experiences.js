import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./Experiences.css";

class Experiences extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <>
          {this.props.sections.map((section) => {
            return (
              <>
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </>
            );
          })}
        </>
      </div>
    );
  }
}

export default Experiences;
