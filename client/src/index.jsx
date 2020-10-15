import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
      return <div>
        <Navbar/>
        <Market/>
      </div>
    }
  }

ReactDOM.render(<App/>,document.getElementById('app'))