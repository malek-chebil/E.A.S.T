import React from "react"
import Footer from "./footer.jsx"
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            serviceprovider:true,
            client:false
        }
    }

    render() {
      return <div>
          <div className="col-md-6 signup-form-1">
        <h3>Login as a serviceprovider</h3>
        {this.state.serviceprovider?
        <div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Password " />
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Login" />
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div>
        </div>:null}
        {this.state.client?<div>
            <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Password " />
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Login" />
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div>
        </div>
        :null}
    </div>
        
        <Footer/>
      </div>;
    }
  }

export default Login