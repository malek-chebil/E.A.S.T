import React,{Component} from 'react'; 
import axios from "axios";
const fileDownload = require("js-file-download");
class Contract extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      fileName: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.fileData = this.fileData.bind(this);
    
  }
  handleClick() {
    axios
      .get(
        "https://img.yumpu.com/10807557/1/500x640/press-kit-open-source-satellite-initiative.jpg",
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        fileDownload(res.data, "test.jpg");
      });
  }
  onFileChange(e) {
    this.setState({ selectedFile: e.target.files[0], fileName:e.target.files[0].name });
    console.log(this.state);
  }
  onFileUpload() {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("/api/Contract/Upload", formData);
  };

  

  fileData(){
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="contract">
        <h1 id="contract">Contract</h1>
        <img
          src="https://img.yumpu.com/10807557/1/500x640/press-kit-open-source-satellite-initiative.jpg"
          alt=""
          id="contractImg"
        />
        <button id="contractbtn" onClick={this.handleClick}>
          download
        </button>
        <input type="file" onChange={this.onFileChange} />
        <button id="contractbtn" onClick={this.onFileUpload}>
          upload
        </button>
        {this.fileData()}
      </div>
    );
  }
}
export default Contract;
