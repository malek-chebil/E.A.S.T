import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux"
class Bio extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (
      
        <section className="ashade-section">
          <div className="ashade-row ashade-row-fullheight exclude-header" style={{position: "relative", top: "80px"}}>
            <div className="ashade-col col-6">
              <h2>
                <span>Client Name</span>
                {this.props.user.FirstName} { this.props.user.LastName }
                
              </h2>
              <div className="ashade-col col-8">
							
							<h6>
								<span>Email</span>
								{this.props.user.Email}
							</h6>
              <h6>
								<span>Address</span>
								{this.props.user.Adresse}
							</h6>
              <h6>
								<span>Gender</span>
								{this.props.user.Gender}
							</h6>
             
              <h6>
								<span>Age</span>
								{this.props.user.Age}
							</h6>
						  <h6>
								<span>City</span>
								{this.props.user.City}
							</h6>
              
							
						
						</div>
              <div className="ashade-contact-form__submit">
										<input type="submit" value="Edit profile"/>
									</div>
              {/* <div className="align-right ashade-signature-wrap">
                <img
                  src="img/general/signature.png"
                  alt="Signature"
                  width="200"
                  height="116"
                />
              </div> */}
            </div>
            
            <div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
              <img
                src=" https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
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
const mapStateToProps = (state, ownProps) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Bio)