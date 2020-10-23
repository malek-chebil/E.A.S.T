import React from "react";
import Footer from "./footer.jsx";
import ClientSignup from "../components/client/clientSignup.jsx";
import FreelancerSignup from "../components/serviceprovider/freelancerSignup.jsx";
import { connect } from "react-redux";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: true,
      serviceprovider: false,
      Registration: "Register as a client",
    };
    this.serviceprovider = this.serviceprovider.bind(this);
    this.client = this.client.bind(this);
  }
  serviceprovider() {
    this.setState({
      client: false,
      serviceprovider: true,
      Registration: "Register as Artist",
    });
  }

  client() {
    this.setState({
      client: true,
      serviceprovider: false,
      Registration: "Register as Client",
    });
  }

  render() {
    return (
      <div>
        
        <div className="col-md-6 signup-form-1">
        <div className="signUp">
            <h3 id="login-signup-header">{this.state.Registration}</h3>
            <button
              className="SwitchConsumer"
              id="switchbtn1"
              onClick={this.serviceprovider}
            >
             Artist
            </button>{" "}
            <button
              className="SwitchConsumer"
              id="switchbtn2"
              onClick={this.client}
            >
              Client
            </button>
            {this.state.client ? <ClientSignup /> : <FreelancerSignup />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
