import React from "react";

class TermsAndConditions extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form id="TandC">
    <p>
      <label>
      
        <span>I accept Terms and Conditions<input type="checkbox" /></span>
        
      </label>
    </p>
   
  </form>
        
    );
  }
}
export default TermsAndConditions;
