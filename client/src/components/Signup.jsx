import React from "react";
import Footer from "./footer.jsx";
import ClientSignup from "../components/client/clientSignup.jsx";
import artistSignup from "../components/Artist/artistSignup.jsx";
import { connect } from "react-redux";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: true,
      Artist: false,
      Registration: "Register as a client",
    };
    this.Artist = this.Artist.bind(this);
    this.client = this.client.bind(this);
  }
  Artist() {
    this.setState({
      client: false,
      Artist: true,
      Registration: "Register as Artist",
    });
  }

  client() {
    this.setState({
      client: true,
      Artist: false,
      Registration: "Register as client",
    });
  }
  
  render() {
    return (<div>
      
      <div  className="col-md-6 signup-form-1">
          <h3 id="login-signup-header">{this.state.Registration}</h3>
        <button
          className="SwitchConsumer"
          id="switchbtn1"
          onClick={this.Artist}
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
       {this.state.client ? <ClientSignup /> : <artistSignup />}
      </div>
      <Footer />
     
      </div>
    );
  }
}

export default Signup;