import React from "react";
import ReactDOM from "react-dom";
class Bio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      
        <section className="ashade-section">
          <div className="ashade-row ashade-row-fullheight exclude-header" style={{position: "relative", top: "80px"}}>
            <div className="ashade-col col-6">
              <h2>
                <span>Few Words About Myself</span>
                Nice to Meet You{this.props.username}
              </h2>
              <span>
                Through the lens the world looks different and i would like to
                show you this difference. I learned that from age 10, when I was
                first time take photos on manual camera with my Dad. After that
                with years of practice and tons of experience I learned the
                techniques, that helps me in my work with modern brands and
                companies. And all of this may be yours, just get in touch.
                {this.props.bio}
              </span>
              <div class="ashade-contact-form__submit">
										<input type="submit" value="Edit profile"/>
									</div>
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
          <div class="ashade-contact-details">
								<h4 class="ashade-contact-details__title">
									<span>My Contacts and Socials</span>
									How to Find Me
								</h4>
								<ul class="ashade-contact-details__list">
									<li>
										<i class="ashade-contact-icon la la-map-marker"></i>
										1250 Welton St, Denver, CO 80204
									</li>
									<li>
										<i class="ashade-contact-icon la la-phone"></i>
										<a href="tel:+11234567890">+1 (123) 456 - 78 - 90</a>
									</li>
									<li>
										<i class="ashade-contact-icon la la-envelope"></i>
										<a href="mailto:a.shade@example.com">a.shade@example.com</a>
									</li>
									<li class="ashade-contact-socials">
										<i class="ashade-contact-icon la la-share-alt"></i>
										<a href="facebook.com" target="_blank">Fb</a>
										<a href="twitter.com" target="_blank">Tw</a>
										<a href="instagram.com" target="_blank">In</a>
										<a href="500px.com" target="_blank">Px</a>
									</li>
								</ul>
							</div>
        </section>
      
    );
  }
}
export default Bio;