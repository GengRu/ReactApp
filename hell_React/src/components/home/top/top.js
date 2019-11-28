import React from "react";
import "./top.css";
import { Link } from "react-router-dom";
class Tb_home_top extends React.Component {
  render() {
    // console.log(this.props);
    var list = this.props.data.map((item, index) => {
      return (
        <div
          className="top_cont"
          key={item.title}
          style={{ background: item.bgColor }}
        >
          <Link to={item.path}>
            <p>{item.title}</p>
            <p>{this.props.count[index]}</p>
          </Link>
        </div>
      );
    });
    return <div className="Tb_home_top_cont">{list}</div>;
  }
}
export default Tb_home_top;
