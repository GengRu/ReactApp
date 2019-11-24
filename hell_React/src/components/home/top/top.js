import React from "react";
import "./top.css";
class Tb_home_top extends React.Component {
  render() {
    console.log(this.props);
    var list = this.props.data.map((item, index) => {
      return (
        <div
          className="top_cont"
          key={item.title}
          style={{ background: item.bgColor }}
        >
          <p>{item.title}</p>
          <p>{this.props.count[index]}</p>
        </div>
      );
    });
    return <div className="Tb_home_top_cont">{list}</div>;
  }
}
export default Tb_home_top;
