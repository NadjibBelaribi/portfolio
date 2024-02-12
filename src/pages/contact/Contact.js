import React, { Component } from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia.js";
import Button from "../../components/button/Button.js";
import { Fade } from "react-reveal";
import "./Contact.css";
import { welcome, contactData } from "../../data.js";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main" id="contact">
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img src={require(`../../assets/images/contact.png`)} alt="" />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {contactData.contactSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text description"
                  style={{ color: theme.secondaryText }}
                >
                  {contactData.contactSection["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Check my resume"
                    newTab={true}
                    href={welcome.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Contact;
