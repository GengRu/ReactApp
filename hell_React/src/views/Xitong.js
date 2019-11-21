import React from "react";
import axios from "axios";

class Xitong extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  getusers() {
    axios.get("/api/users").then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro" onClick={this.getusers.bind(this)}>
          To get started, edit <code> src / App.js </code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Xitong 
