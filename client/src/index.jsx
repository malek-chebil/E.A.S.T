import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
import Asidebar from "./components/asidebar.jsx"
import Home from "./components/home.jsx"
import Footer from "./components/footer.jsx"
import JobsPosted from "./components/client/jobsposted.jsx"
import Jobsapplied from "./components/serviceprovider/Jobsapplied.jsx"
import PostJob from "./components/client/postjob.jsx"
import Signup from "./components/Signup.jsx"
import Login from "./components/login.jsx"
import About from "./components/about.jsx"
import ProfileSP from "./components/serviceprovider/serviceProviderprofil/serviceproviderprofil.jsx"
import ClientProfile from "./components/client/clientprofile/clientprofil.jsx"
import JobDetails from "./components/jobdetails.jsx"
import Admin from "./components/admin/admin.jsx"
import AdminLogin from "./components/admin/AdminLogin.jsx"

              ////Redux///
import {Provider} from "react-redux"
import {createStore} from "redux"
import {rootReducer} from "../../Redux/redux"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
    user:'visitor',
    page:''
        }
   this.ChangePage=this.ChangePage.bind(this)
   this.ChangeUser=this.ChangeUser.bind(this)
    }
    
     ChangeUser(user){
 this.setState({user})
     }
     
    ChangePage(pathname,data){
     if(pathname==="/"){
      this.setState({page:<Home/>})
    }else if(pathname==="/About"){
      this.setState({page:<About/>})
    }else if(pathname==="/profile"){
      this.setState({page:<ClientProfile/>})
    }else if(pathname==="/Profile"){ //UpperCase P
      this.setState({page:<ProfileSP/>})
    }else if(pathname==="/JobsPosted"){
      this.setState({page:<JobsPosted/>})
    }else if(pathname==="/Jobsapplied"){
      this.setState({page:<Jobsapplied/>})
    }else if(pathname==="/PostJob"){
      this.setState({page:<PostJob/>})
    }else if(pathname==="/Market"){
      this.setState({page:<Market ChangePage={this.ChangePage}/>})
    }else if(pathname==="/JobDetails"){
      this.setState({page:<JobDetails jobDetails={data}/>})
    }else if(pathname==="/Signup"){
      this.setState({page:<Signup/>})
    }else if(pathname==="/Login"){
      this.setState({page:<Login ChangeUser={this.ChangeUser} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/Admin"){
      this.setState({page:<Admin/>})
    }else if(pathname==="/AdminLogin"){
      this.setState({page:<AdminLogin ChangePage={this.ChangePage} />})
    }
   
   
    }

    componentDidMount(){
  var pathname = window.location.pathname;
  this.ChangePage(pathname)
    }
    
    render() {
      return <div>
      <Navbar routes={this.ChangePage} user={this.state.user}/>
        <aside id="ashade-aside">
         <Asidebar user={this.state.user} routes={this.ChangePage}/>
         </aside> 
        {this.state.page}
        
      </div>
    }
  }
const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('app'))

