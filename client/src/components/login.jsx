import React from "react"
import Footer from "./footer.jsx"
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            serviceprovider:true,
            client:false,
            Registration:"Login as a service-provider"
        }
        this.serviceprovider=this.serviceprovider.bind(this)
        this.client=this.client.bind(this)
         }
        serviceprovider(){
         this.setState({client:false,serviceprovider:true,Registration:"Login as a service-provider"})
        }
     
        
        client(){
         this.setState({client:true,serviceprovider:false,Registration:"Login as a client"})
        }
    render() {
      return <div>
          <div className="col-md-6 signup-form-1">
        <h3 id="h3login">{this.state.Registration}</h3>
        <button className="SwitchConsumer" id="switchbtn1" onClick={this.serviceprovider}>Serviceprovider</button> <button className="SwitchConsumer" id="switchbtn2" onClick={this.client}>Client</button>
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