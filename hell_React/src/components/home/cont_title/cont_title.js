import React from "react";
import "./cont_title.css";

class Tb_cont_title extends React.Component {
  render() {
    return (
      <h5>
        <span>{this.props.title}</span>
        <span className="Tb_more">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </h5>
    );
  }
}
export default Tb_cont_title
