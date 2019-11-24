import React from "react";
import "./head.css"
class Tb_head extends React.Component {
  constructor() {
    super();
    this.state = {
      login: ""
    };
  }
  componentWillMount() {
    var login = JSON.parse(window.localStorage.login).data[0];
    // console.log(login);
    this.setState({
      login: login
    });
  }
  back() {
    localStorage.login = "";
    window.location.href = "./";
  }
  render() {
    return (
      <div className="Tb_home_header">
        <div className="Tb_home_headerCont">
          <div className="head_img">
            <img src={this.state.login.imgUrl} alt="" />
          </div>
          <div className="Tb_username">{this.state.login.user}</div>
          <div className="Tb_back" onClick={this.back.bind(this)}>
            退出
          </div>
        </div>
      </div>
    );
  }
}
export default Tb_head;
