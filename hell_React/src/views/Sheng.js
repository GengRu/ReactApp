import React from "react";
import axios from "axios";
import "../css/Sheng.css";
import Tb_head from "../components/head_g/head";
import ShengTab from "../components/tab_g/tab";
import Table from "./../components/table_g/table";
import Page from "./../components/page_g/page";

class Sheng extends React.Component {
  constructor() {
    super();
    this.state = {
      dieList: "",
      dieArr: [],
      value1: "", //类别
      value2: "", //死亡方式
      i: 0,
      arr: ["阳寿未尽", "孤魂野鬼", "转世投胎", "已删除"],
      type1: "阳寿未尽",
      leibie: [], //类别
      dieType: [], //死亡方式
      tableArr: ["ID", "姓名", "寿命", "类别", "死亡方式", "操作"] // 表格标题
    };
    this.select1 = this.select1.bind(this);
    this.select2 = this.select2.bind(this);
  }

  componentWillMount() {
    axios
      .get("/sheng", {
        params: {
          type: this.state.type1
        }
      })
      .then(data => {
        this.getData(data.data.data);
      });
  }
  // 类别
  select1(event) {
    if (event.target.value == "请选择") return;
    axios
      .get("/sheng/getType", {
        params: {
          type: event.target.value,
          tab: this.state.type1
        }
      })
      .then(data => {
        this.refs.sel2.value = "请选择";
        this.setState({
          dieList: data.data.data
        });
        this.setState({
          dieArr: this.state.dieList.slice(
            this.state.i * 8,
            this.state.i * 8 + 8
          )
        });
      });
  }
  // 死亡范式
  select2(event) {
    if (event.target.value == "请选择") return;
    axios
      .get("/sheng/getDieType", {
        params: {
          type: event.target.value,
          tab: this.state.type1
        }
      })
      .then(data => {
        // console.log(data.data.data);
        this.refs.sel1.value = "请选择";
        this.setState({
          dieList: data.data.data
        });
        this.setState({
          dieArr: this.state.dieList.slice(
            this.state.i * 8,
            this.state.i * 8 + 8
          )
        });
      });
  }
  // 切换页数
  changePage(index) {
    // console.log(index);
    this.setState({
      dieArr: this.state.dieList.slice(index * 8, index * 8 + 8),
    });
  }

  // 请求tab
  changeTab(item) {
    this.setState({
      type1: item
    });
    axios
      .get("/sheng/si", {
        params: {
          type: item
        }
      })
      .then(data => {
        this.getData(data.data.data);
      });
  }

  getData(data) {
    this.refs.sel1.value = "请选择";
    this.refs.sel2.value = "请选择";
    var leibieArr = [];
    var dieTypeArr = [];
    for (var i = 0; i < data.length; i++) {
      if (leibieArr.indexOf(data[i].type) == -1) {
        leibieArr.push(data[i].type);
      }
      if (dieTypeArr.indexOf(data[i].dieType) == -1) {
        dieTypeArr.push(data[i].dieType);
      }
    }
    this.setState({
      leibie: leibieArr,
      dieType: dieTypeArr,
      dieList: data,
      dieArr: data.slice(
        this.state.i * 8,
        this.state.i * 8 + 8
      )
    });
  }

  render() {
    // 类别
    var leibieList = this.state.leibie.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

    // 死亡方式
    var dieTypeList = this.state.dieType.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
    

    return (
      <div className="shengsibu">
        {/* 头部 */}
        <Tb_head />
        <div className="Zxr_sheng">
          <div className="Zxr_sheng_box">
            <div className="Zxr_sheng_box_title">
              {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u532.png?token=510777c4f456ac388824606296c3229252edefd4f4d0ed072fb95eb9966d3ec1" /> */}
              生死簿
            </div>

            <div className="Zxr_sheng_box_nav">
              <ShengTab
                arr={this.state.arr}
                getTab={this.changeTab.bind(this)}
              ></ShengTab>
            </div>

            <div className="Zxr_sheng_box_inputBox">
              <div className="Zxr_sheng_box_inputBox_search">
                <input
                  type="text"
                  style={{ outline: "none", border: "none" }}
                  placeholder="输入要搜索的内容"
                />

                <span>
                  {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u526.png?token=cea4bd04b1f8e933c6551c18bfdd759af3f6e304323c7107f4cd53a3f1323fe2" /> */}
                </span>
              </div>

              <div className="Zxr_sheng_box_inputBox_select">
                类别
                <select
                  id="AreaId"
                  name="AreaId"
                  size="1"
                  className="sel"
                  ref="sel1"
                  defaultValue={this.state.value1}
                  onChange={this.select1}
                >
                  <option>请选择</option>
                  {leibieList}
                </select>
              </div>

              <div className="Zxr_sheng_box_inputBox_select">
                死亡方式
                <select
                  id="AreaId"
                  name="AreaId"
                  size="1"
                  className="sel"
                  ref="sel2"
                  defaultValue={this.state.value2}
                  onChange={this.select2}
                >
                  <option>请选择</option>
                  {dieTypeList}
                </select>
              </div>

              <button className="Zxr_sheng_box_inputBox_btn">删除</button>
            </div>

            <div className="Zxr_sheng_box_Form">
              <Table
                dieArr={this.state.dieArr}
                tableArr={this.state.tableArr}
              ></Table>

              <div className="Zxr_sheng_box_Form_foot">
                <div className="Zxr_sheng_box_Form_foot_left">
                  <div className="Zxr_sheng_box_Form_foot_left_img">
                    {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75" /> */}
                  </div>
                  <span>已选0人，选择全部{this.state.dieList.length}人</span>
                </div>

                <Page dieList={this.state.dieList} changePage={this.changePage.bind(this)}></Page>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sheng;
