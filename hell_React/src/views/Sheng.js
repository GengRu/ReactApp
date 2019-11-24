import React from "react";
import Tb_head from "../components/head_g/head";

class Sheng extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        生死簿
        {/* 头部 */}
        <Tb_head />
      </div>
    );
  }
}

export default Sheng;
