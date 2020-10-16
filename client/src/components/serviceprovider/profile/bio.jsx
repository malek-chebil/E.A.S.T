import React from "react";
import ReactDOM from "react-dom";
class Bio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      
        <section className="ashade-section">
          <div className="ashade-row ashade-row-fullheight exclude-header">
            <div className="ashade-col col-6">
              <h2>
                <span>Few Words About Myself</span>
                Nice to Meet You{this.props.username}
              </h2>
              <span>
                {" "}
                Through the lens the world looks different and i would like to
                show you this difference. I learned that from age 10, when I was
                first time take photos on manual camera with my Dad. After that
                with years of practice and tons of experience I learned the
                techniques, that helps me in my work with modern brands and
                companies. And all of this may be yours, just get in touch.
                {this.props.bio}
              </span>

              <div className="align-right ashade-signature-wrap">
                <img
                  src="img/general/signature.png"
                  alt="Signature"
                  width="200"
                  height="116"
                />
              </div>
            </div>
            <div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
              <img
                src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                // {this.props.profImage}
                alt="profileImage"
                width="1240"
                height="1500"
              />
            </div>
          </div>
          {/* <!-- .ashade-row --> */}
        </section>
      
    );
  }
}
export default Bio;
