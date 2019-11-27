import React from "react";
import "./table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var arr = [];
    if (this.props.dieArr) {
      for (var key in this.props.dieArr[0]) {
        console.log(key);
        arr.push(key);
      }
      arr.pop();
      var FormCont = this.props.dieArr.map((i, idx) => {
        return (
          <div key={i.id} className="Zxr_sheng_box_Form_cont">
            <div
              style={{
                width: "64px",
                borderRight: "1px solid #ccc",
                display:
                  window.location.href == "http://localhost:3000/mingbi" ||
                  window.location.href == "http://localhost:3000/rizhi"
                    ? "none"
                    : "block"
              }}
            >
              <div className="Zxr_sheng_box_Form_cont_img">
                {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75" /> */}
              </div>
            </div>
            <div className="Zxr_sheng_box_Form_cont_all">{i[arr[0]]}</div>
            <div className="Zxr_sheng_box_Form_cont_all">{i[arr[1]]}</div>
            <div className="Zxr_sheng_box_Form_cont_all">{i[arr[2]]}</div>
            <div className="Zxr_sheng_box_Form_cont_all">{i[arr[3]]}</div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display: this.props.tableArr.length == 6 ? "block" : "none"
              }}
            >
              {i[arr[4]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display:
                  this.props.tableArr.length == 6 &&
                  window.location.href == "http://localhost:3000/mingbi"
                    ? "block"
                    : "none"
              }}
            >
              {i[arr[5]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display:
                  this.props.tableArr.length == 6 &&
                  window.location.href == "http://localhost:3000/gouhun"
                    ? "block"
                    : "none"
              }}
            >
              {i[arr[6]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display: this.props.tableArr.length == 7 ? "block" : "none"
              }}
            >
              {i[arr[4]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display: this.props.tableArr.length == 7 ? "block" : "none"
              }}
            >
              {i[arr[5]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display: this.props.tableArr.length == 7 ? "block" : "none"
              }}
            >
              {i[arr[6]]}
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display:
                  window.location.href == "http://localhost:3000/gouhun" ||
                  window.location.href == "http://localhost:3000/mingbi" ||
                  window.location.href == "http://localhost:3000/rizhi"
                    ? "none"
                    : "block"
              }}
            >
              <span className="Zxr_sheng_box_Form_cont_btn">编辑</span>
              <span className="Zxr_sheng_box_Form_cont_btn">删除</span>
            </div>
            <div
              className="Zxr_sheng_box_Form_cont_all"
              style={{
                display:
                  window.location.href != "http://localhost:3000/rizhi"
                    ? "none"
                    : "block"
              }}
            >
              <span className="Zxr_sheng_box_Form_cont_btn">撤销</span>
              <span className="Zxr_sheng_box_Form_cont_btn">回滚</span>
            </div>
          </div>
        );
      });
    }
    var tableArr = this.props.tableArr.map((item, i) => {
      return (
        <div key={i} className="Zxr_sheng_box_Form_title_all">
          {item}
        </div>
      );
    });

    return (
      <div>
        <div className="Zxr_sheng_box_Form_title">
          <div
            style={{
              width: "64px",
              borderRight: "1px solid #ccc",
              display:
                window.location.href == "http://localhost:3000/mingbi" ||
                window.location.href == "http://localhost:3000/rizhi"
                  ? "none"
                  : "block"
            }}
          ></div>
          {tableArr}
        </div>

        {FormCont}
      </div>
    );
  }
}
export default Table;
