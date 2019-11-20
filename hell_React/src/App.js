import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  getusers() {
    axios.get("/api/users").then(res => {
      console.log(res.data);
      console.log(this);
      this.setState({ users: res.data });
    });
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro" onClick={this.getusers.bind(this)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.users.map((user, index) => {
          return <h1 key={index}>{user.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
