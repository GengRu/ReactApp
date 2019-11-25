import React from "react";
import axios from "axios";
import "../css/Sheng.css";
import Tb_head from "../components/head_g/head";

class Sheng extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      dieList: [],
      dieArr: [],
      value1: "",
      value2: "",
      i: 0
    };
    this.select1 = this.select1.bind(this);
    this.select2 = this.select2.bind(this);
  }

  Dian(i) {
    this.setState({
      index: i
    });
  }

  componentDidMount() {
    axios.get("/sheng").then(data => {
      // console.log(data.data.data);
      this.setState({
        dieList: data.data.data
      });
      this.setState({
        dieArr: this.state.dieList.slice(
          this.state.i * 10,
          this.state.i * 10 + 10
        )
      });
      // console.log(this.state.dieArr);
    });
  }
  // 类别
  select1(event) {
    axios
      .get("/sheng/getType", {
        params: {
          type: event.target.value
        }
      })
      .then(data => {
        // console.log(data.data.data);
        this.setState({
          dieList: data.data.data
        });
        this.setState({
          dieArr: this.state.dieList.slice(
            this.state.i * 10,
            this.state.i * 10 + 10
          )
        });
      });
  }
  // 死亡范式
  select2(event) {
    axios
      .get("/sheng/getDieType", {
        params: {
          type: event.target.value
        }
      })
      .then(data => {
        // console.log(data.data.data);
        this.setState({
          dieList: data.data.data
        });
        this.setState({
          dieArr: this.state.dieList.slice(
            this.state.i * 10,
            this.state.i * 10 + 10
          )
        });
      });
  }
  // 切换页数
  changePage(index) {
    this.setState({
      dieArr: this.state.dieList.slice(index * 10, index * 10 + 10)
    });
    this.setState({
      i: index
    });
  }
  render() {
    var arr = ["阳寿未尽", "孤魂野鬼", "转世投胎", "已删除"];
    var Cont = arr.map((i, $idx) => {
      return (
        <div
          onClick={() => {
            this.Dian($idx);
          }}
          className={this.state.index == $idx ? "Zxr_sheng_active" : ""}
          key={$idx}
        >
          {i}
        </div>
      );
    });
    // 页数
    var page = Math.ceil(this.state.dieList.length / 9);
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
            this.changePage(index);
          }}
          style={{ color: this.state.i == index ? "red" : "black" }}
        >
          {item}
        </div>
      );
    });

    var FormCont = this.state.dieArr.map((i, idx) => {
      // console.log(i.ID);
      return (
        <div key={i.id} className="Zxr_sheng_box_Form_cont">
          <div style={{ width: "64px", borderRight: "1px solid #ccc" }}>
            <div className="Zxr_sheng_box_Form_cont_img">
              {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75" /> */}
            </div>
          </div>
          <div className="Zxr_sheng_box_Form_cont_all">{i.id}</div>
          <div className="Zxr_sheng_box_Form_cont_all">{i.name}</div>
          <div className="Zxr_sheng_box_Form_cont_all">{i.life}</div>
          <div className="Zxr_sheng_box_Form_cont_all">{i.type}</div>
          <div className="Zxr_sheng_box_Form_cont_all">{i.dieType}</div>
          <div className="Zxr_sheng_box_Form_cont_all">
            <span className="Zxr_sheng_box_Form_cont_btn">编辑</span>
            <span className="Zxr_sheng_box_Form_cont_btn">删除</span>
          </div>
        </div>
      );
    });

    return (
      <div className="shengsibu">
        {/* 头部 */}
        <Tb_head />
        <div className="Zxr_sheng">
          <div className="Zxr_sheng_box">
            <div className="Zxr_sheng_box_title">
              <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u532.png?token=510777c4f456ac388824606296c3229252edefd4f4d0ed072fb95eb9966d3ec1" />
              生死簿
            </div>

            <div className="Zxr_sheng_box_nav">{Cont}</div>

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
                  <option value="猫科">猫科</option>
                  <option value="犬属">犬属</option>
                  <option value="猴属">猴属</option>
                  <option value="鼠类">鼠类</option>
                </select>
              </div>

              <div className="Zxr_sheng_box_inputBox_select">
                死亡方式
                <select
                  id="AreaId"
                  name="AreaId"
                  size="1"
                  className="sel"
                  defaultValue={this.state.value2}
                  onChange={this.select2}
                >
                  <option>请选择</option>
                  <option value="善终">善终</option>
                  <option value="病死">病死</option>
                  <option value="夭折">夭折</option>
                  <option value="仇杀">仇杀</option>
                  <option value="入魔">入魔</option>
                </select>
              </div>

              <button className="Zxr_sheng_box_inputBox_btn">删除</button>
            </div>

            <div className="Zxr_sheng_box_Form">
              <div className="Zxr_sheng_box_Form_title">
                <div
                  style={{ width: "64px", borderRight: "1px solid #ccc" }}
                ></div>
                <div className="Zxr_sheng_box_Form_title_all">ID</div>
                <div className="Zxr_sheng_box_Form_title_all">姓名</div>
                <div className="Zxr_sheng_box_Form_title_all">寿命</div>
                <div className="Zxr_sheng_box_Form_title_all">类别</div>
                <div className="Zxr_sheng_box_Form_title_all">死亡方式</div>
                <div className="Zxr_sheng_box_Form_title_all">操作</div>
              </div>

              {FormCont}

              <div className="Zxr_sheng_box_Form_foot">
                <div className="Zxr_sheng_box_Form_foot_left">
                  <div className="Zxr_sheng_box_Form_foot_left_img">
                    {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75" /> */}
                  </div>
                  <span>已选9人，选择全部{this.state.dieList.length}人</span>
                </div>

                <div className="Zxr_sheng_box_Form_foot_right">
                  <span>共{this.state.dieList.length}条数据，每页10条</span>
                  <div className="Zxr_sheng_box_Form_foot_right_ye">{b}</div>
                  <div className="Zxr_sheng_box_Form_foot_right_to">
                    <span>跳至</span>
                    <div className="Zxr_sheng_box_Form_foot_right_to_input">
                      <input
                        type="text"
                        style={{ outline: "none", border: "none" }}
                      />
                    </div>
                    <span>页</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sheng;
