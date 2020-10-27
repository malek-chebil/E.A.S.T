import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
        Email:"",
        password:""
    };
    this.AxiosLogin=this.AxiosLogin.bind(this)

}
 AxiosLogin(){
      axios({
          url: '/AdminLogin',
          method: 'post',
          data:{Email:this.state.Email,password:this.state.password}
        }).then(data=>{data=data.data
          console.log(data)
          if(data.Banned){
            alert(`you are banned because ${data.Reason} you will be unbanned in ${data.date}`,2000)
          }else{
            if(data.admin){
              this.props.admin()
            }else{
              if(data.Registred){
                Alert("Success Login", 2500)
                
       
              }
            }
          }
        })
  }

  
  render() {
    return (
      <div className="limiter">
      <div className="container-login100" >
          <div className="wrap-login100">
              <form className="login100-form validate-form" onChange={this.handleChange} onSubmit={this.login}>
                  <span className="login100-form-logo">
                      <i className="zmdi zmdi-landscape"></i>
                  </span>

                  <span className="login100-form-title p-b-34 p-t-27">
                      Admin Login
                  </span>

                  <div className="wrap-input100 validate-input" >
                      <input className="input100" type="text" name="Email" placeholder="Email" onChange={(e)=>{this.setState({Email:e.target.value})}}  required />
                      <span className="focus-input100" data-placeholder="&#x2709;"></span>
                  </div>

                  <div className="wrap-input100 validate-input"  >
                      <input className="input100" type="password" name="Password" placeholder="Password" onChange={(e)=>{this.setState({password: e.target.value})}}  required />
                      <span className="focus-input100" data-placeholder="&#xf191;"></span>
                  </div>

                  <div className="contact100-form-checkbox">
                      <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                      <label className="label-checkbox100" htmlFor="ckb1">
                          Remember me
                      </label>
                  </div>

                  <div className="container-login100-form-btn">
                      <button className="login100-form-btn" onClick={this.AxiosLogin}>
                          Login
                      </button>
                  </div>

                  <div className="text-center p-t-90">
                      <a className="txt1" href="#">
                          Forgot Password?
                      </a>
                  </div>
              </form>
          </div>
      </div>
      <footer/>
  </div>
      
 
    );
  }
}

export default AdminLogin;