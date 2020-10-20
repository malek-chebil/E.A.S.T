import React from "react";
import { connect } from "react-redux";
import axios from "axios";
class ClientSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      password: "",
      repass: "",
      age: "",
      gender: "",
      city: "",
      Adresse: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let clientData = {
      FisrtName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.Email,
      password: this.state.password,
      Gender: this.state.gender,
      Age: this.state.age,
      City: this.state.city,
      Adresse: this.state.Adresse,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/Clients/Signup", clientData)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  handleChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div onChange={this.handleChange}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your First Name "
              name="firstName"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Last Name "
              name="lastName"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email "
              name="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password "
              name="password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Your Password "
              name="repass"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Age "
              name="age"
            />
          </div>
          <label htmlFor="Your Gender">Your Gender</label>
          <select
            className="select"
            placeholder="Your Gender"
            name="gender"
            className="LoginSignupInp"
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your City "
              name="city"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Adress "
              name="adresse"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              className="btnSubmit"
              value="Signup"
              onClick={this.handleClick}
            />{" "}
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientSignup;
