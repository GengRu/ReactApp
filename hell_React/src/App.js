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
      console.log(...res.data);
      // console.log(123);
      this.setState({ users: res.data });
    });
  }

  render() {
    var arr = this.state.users.map(item => {
      return <div key="item.id">{item.user}</div>;
    });
    return (
      <div className="App">
        <p className="App-intro" onClick={this.getusers.bind(this)}>
          <button>获取用户信息</button>
        </p>
        <div>{arr}</div>
      </div>
    );
  }
}

export default App;
