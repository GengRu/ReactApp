import React from "react";
import "./common_nav.css";

class Tb_common_nav extends React.Component {
  render() {
    // console.log(this.props.common_nav);
    var item1 = this.props.common_nav.slice(0, 6).map(item => {
      return (
        <div className="Tb_commonList" key={item.title}>
          <div className="common_navImg">
            {/* <img src={item.img} alt="" /> */}
          </div>
          <div className="Tb_comTitle">{item.title}</div>
        </div>
      );
    });
    var item2 = this.props.common_nav.slice(6).map(item => {
      return (
        <div className="Tb_commonList" key={item.title}>
          <div className="common_navImg">
            {/* <img src={item.img} alt="" /> */}
          </div>
          <div className="Tb_comTitle">{item.title}</div>
        </div>
      );
    });
    return (
      <div className="">
        <div className="Tb_common_navCont">{item1}</div>
        <div className="Tb_common_navCont">{item2}</div>
      </div>
    );
  }
}
export default Tb_common_nav;
