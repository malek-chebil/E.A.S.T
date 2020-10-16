import React from "react";
class ProfileInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row ashade-keep-on-tablet">
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Skills (%)</span>
    <span className="ashade-counter-value">25{this.props.stats}</span>
              
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Skills (%)</span>
              <span className="ashade-counter-value">67{this.props.stats}</span>
              
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Skills (%)</span>
              <span className="ashade-counter-value">211{this.props.stats}</span>
              
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="2000">
              <span className="ashade-counter-label">Skills (%)</span>
    <span className="ashade-counter-value">5896{this.props.stats}</span>
              </div>
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
      </section>
    );
  }
}
export default ProfileInfo;
