import React from "react";
class Studio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row">
          <div className="ashade-col col-12 align-center">
            <h3>
              <span>Where magic is happening</span>
              My work
            </h3>
            <p className="ashade-intro">
              <span>
                This is the place, where I can work with lights and shadows to
                create something brilliant. I'm talking about my photo studio
                that is located at 1250 Welton St, Denver. Here we can discuss
                and create your photo portfolio in comfortable and professional
                atmosphere.{this.props.studioDescription}
              </span>
            </p>
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
        <div className="ashade-row">
          <div className="ashade-col col-12">
            <div className="ashade-grid ashade-grid-4cols">
              <div className="ashade-grid-item">
                <a
                  href="img/general/studio01.png"
                  className="ashade-lightbox-link"
                  data-size="1160x920"
                >
                  <img
                    src="img/null.png"
                    data-src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                    className="lazy"
                    alt="My Studio"
                    width="1160"
                    height="920"
                  />
                </a>
              </div>
              {/* <!-- .ashade-album-item --> */}
              <div className="ashade-grid-item">
                <a
                  href="img/general/studio02.png"
                  className="ashade-lightbox-link"
                  data-size="1160x920"
                >
                  <img
                    src="img/null.png"
                    data-src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                    className="lazy"
                    alt="My Studio"
                    width="1160"
                    height="920"
                  />
                </a>
              </div>
              {/* <!-- .ashade-album-item --> */}
              <div className="ashade-grid-item">
                <a
                  href="img/general/studio03.png"
                  className="ashade-lightbox-link"
                  data-size="1160x920"
                >
                  <img
                    src="img/null.png"
                    data-src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                    className="lazy"
                    alt="My Studio"
                    width="1160"
                    height="920"
                  />
                </a>
              </div>
              {/* <!-- .ashade-album-item --> */}
              <div className="ashade-grid-item">
                <a
                  href="img/general/studio04.png"
                  className="ashade-lightbox-link"
                  data-size="1160x920"
                >
                  <img
                    src="img/null.png"
                    data-src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                    className="lazy"
                    alt="My Studio"
                    width="1160"
                    height="920"
                  />
                </a>
              </div>
              <div className="ashade-grid-item">
                <a
                  href="img/general/studio04.png"
                  className="ashade-lightbox-link"
                  data-size="1160x920"
                >
                  <img
                    src="img/null.png"
                    data-src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                    className="lazy"
                    alt="My Studio"
                    width="1160"
                    height="920"
                  />
                </a>
              </div>
              {/* <!-- .ashade-album-item --> */}
            </div>
            {/* <!-- .ashade-grid --> */}
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
      </section>
    );
  }
}
export default Studio;
