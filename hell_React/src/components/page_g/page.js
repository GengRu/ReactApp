import React from "react";
import "./page.css";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    };
  }

  // 切换页数
  pageChanged(index) {
    this.setState({
      i: index
    });
    this.props.changePage(index)
  }


  render() {
    // 页数
    if (this.props.dieList) {
      // console.log(1);
      var page = Math.ceil(this.props.dieList.length / 9);
      var a = [];
      for (let i = 1; i <= page; i++) {
        a.push(i);
      }
      // 页数
      var b = a.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              this.pageChanged(index);
            }}
            style={{ color: this.state.i == index ? "red" : "black" }}
          >
            {item}
          </div>
        );
      });
    }

    return (
      <div className="Zxr_sheng_box_Form_foot_right">
        <span>共{this.props.dieList.length}条数据，每页8条</span>
        <div className="Zxr_sheng_box_Form_foot_right_ye">{b}</div>
        <div className="Zxr_sheng_box_Form_foot_right_to">
          <span>跳至</span>
          <div className="Zxr_sheng_box_Form_foot_right_to_input">
            <input type="text" style={{ outline: "none", border: "none" }} />
          </div>
          <span>页</span>
        </div>
      </div>
    );
  }
}
export default Page;
