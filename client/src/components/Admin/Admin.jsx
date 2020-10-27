
import React from "react"
import axios from "axios"
class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           Email : "",
           reason: "",
           date: "" 
        }
        this.AxiosBann = this.AxiosBann.bind(this)
    }
    AxiosBann() {
        axios({
          url: "/banaccount",
          method: "post",
          data: {
            Email: this.state.Email,
            reason: this.state.reason,
            date: this.state.date,
          },
        });
        console.log("data")
      }

    render() {
      return <div>

        <div>
        
      <div className="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" id="shape" role="document">
      
        <div className="modal-content">
        
          <div className="modal-header">
            <p className="heading">
              <strong>Admin Space</strong>
            </p>

           
          </div>

         
          <div className="modal-body">

            <div className="row">
              <div className="col-3">
                <p></p>
                <p className="text-center">
                  <i className="fas fa-gift fa-4x"></i>
                </p>
              </div>

              <div className="col-9">
                <p>Sharing is caring. Therefore, from time to time we like to give our visitors small gifts. Today is
                  one of those days.</p>
                <p>
                  <strong>Copy the following code and use it at the checkout. It's valid for
                    <u>one day</u>.</strong>
                </p>
                <h2>
                  <span className="badge">v52gs1</span>
                </h2>

              </div>
            </div>
          </div>

          
          <div className="modal-footer flex-center">
            
          <button  type="button" id = "btnn1"className="btn btn-primary" data-toggle="modal" data-target="#modalPoll-1">Delete Post</button>
          </div>
          <div>
          <button  type="button" id = "btnn"className="btn btn-primary" data-toggle="modal" data-target="#modalPoll-1" >Ban Account</button>
          </div>
        </div>
      </div>
    
     

        </div>



<div className="modal fade right" id="modalPoll-1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true" data-backdrop="false">
  <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
    <div className="modal-content">
      
      <div className="modal-header">
        <p className="heading lead">Admin Space
        </p>

        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="white-text">×</span>
        </button>
      </div>

    
      <div className="modal-body">
        <div className="text-center">
          <i className="far fa-file-alt fa-4x mb-3 animated rotateIn"></i>
          <p>
            <strong>Manage Accounts</strong>
          </p>
         
        </div>

        

        
        
        <div className="form-check mb-4" id="formes">
        
          <input className="email" name="group1" type="email" id="email" placeholder = "Email"  onChange={(e) => {
                  this.setState({ Email: e.target.value });
                }} />
          
        </div>

        <div className="form-check mb-4" id="formes">
        
          <input className="date" name="group1" type="date" id="date" placeholder = "Date"  onChange={(e) => {
                  this.setState({ date: e.target.value });
                }}/>
          
        </div>

       

        
       

        <p className="text-center">
          <strong>Reason of Ban</strong>
        </p>
       
        <div className="md-form" id="formes">
          <textarea id = "textAr" type="text" id="form79textarea" className="md-textarea form-control" rows="3" onChange={(e) => {
                  this.setState({ reason: e.target.value });
                }}></textarea>
         
        </div>

      </div>

      
      <div className="modal-footer justify-content-center">
        <a type="button" className="btn btn-primary waves-effect waves-light" onClick={this.AxiosBann}>Send
          <i className="fa fa-paper-plane ml-1"></i> 
        </a>
        <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</a>
      </div>
    </div>
  </div>
</div>

   

   
    
      </div>
    }
  }

export default Admin ;