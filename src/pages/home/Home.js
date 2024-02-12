import React, { Component } from "react";
import Header from "../../components/header/Header";
import Welcome from "../../containers/welcome/Welcome";
import Skills from "../../containers/skills/Skills";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header theme={this.props.theme} />
        <Welcome theme={this.props.theme} />
        <Skills theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
