import React from "react";
import "./head.css";
class Tb_head extends React.Component {
  constructor() {
    super();
    this.state = {
      login: ""
    };
  }
  componentWillMount() {
    if (window.sessionStorage.login) {
      var login = JSON.parse(window.sessionStorage.login).data[0];
      // console.log(login);
      this.setState({
        login: login
      });
    }
  }
  back() {
    sessionStorage.login = "";
    window.location.href = "./";
  }
  render() {
    return (
      <div className="Tb_home_header">
        <div className="Tb_home_headerCont">
          <i className='iconfont icon-bell' style={{fontSize:'24px',marginRight:'6px',color:'#333'}}></i>
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
