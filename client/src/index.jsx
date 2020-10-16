import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
import Asidebar from "./components/asidebar.jsx"
import Home from "./components/home.jsx"
import Footer from "./components/footer.jsx"
import FreelancerProfile from "./components/serviceprovider/profile/FLProfile.jsx";
import ClientProfile from "./components/client/profile/clientProfile.jsx";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
      return <div>
         <Navbar/>
         <aside id="ashade-aside">
        <Asidebar/>
        </aside>
        
        {/* <Home/> */}
        <FreelancerProfile /> 
      </div>
    }
  }

ReactDOM.render(<App/>,document.getElementById('app'))