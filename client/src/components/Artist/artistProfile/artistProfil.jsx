import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import Studio from "./studio.jsx";
import ProfileInfo from "./profInfo.jsx";
import Feedback from "./feedbacks.jsx";
import axios from "axios";
class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    axios.get("/api/clients/serviceInfo").then((response) => {
      this.setState({ user: response.data });
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <BackToTop />
        <AboutMe />
        <main className="ashade-content-wrap">
          <div className="ashade-content-scroll">
            <div className="ashade-content">
              <Bio />
              <ProfileInfo />
              <Studio />
              <Feedback />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ArtistProfile;
