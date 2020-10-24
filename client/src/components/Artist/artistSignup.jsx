import React from "react";
import axios from "axios";
class ArtistSignup extends React.Component {
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
      adress: "",
      field: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let ArtistData = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.Email,
      Password: this.state.password,
      Gender: this.state.gender,
      Age: this.state.age,
      City: this.state.city,
      Adresse: this.state.adress,
      Field: this.state.field,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/freeLancers/Signup", ArtistData)
        .then((data) => {
          console.log(data.data);
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
        <form onSubmit={this.handleClick}>
          <div id="testeststst" onChange={this.handleChange}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your First Name "
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Last Name "
                name="lastName"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email "
                name="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password "
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Your Password "
                name="repass"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Age "
                name="age"
                required
              />
            </div>
            <label htmlFor="Your Gender">Gender</label>
            <select
              className="select"
              className="LoginSignupInp"
              placeholder=" Gender"
              name="gender"
              required
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
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Adress "
                name="adress"
                required
              />
            </div>
            <label htmlFor="Your Field">Your Artistic Field</label>
            <select
              className="select"
              className="LoginSignupInp"
              placeholder="Your Field"
              name="field"
              required
            >
              <option value="Designer">3D Designer</option>
              <option value="Designer">Graphic Designer</option>
              <option value="Photographer">Photographer</option>
              <option value="Audio Visual">Audio-visual</option>
            </select>

            <input id="checkid" type="checkbox" value="test" />
            <label  id="checkid1">
              {" "}
              I have Read and Accept  {" "}  <a href="">  Terms And Conditions</a>
            </label>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Signup" />{" "}
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ArtistSignup;
