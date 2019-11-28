import React from "react";
import axios from "axios";
import "./../css/Mingbi.css";
import Tb_head from "../components/head_g/head";
import ShengTab from "../components/tab_g/tab";
import Table from "./../components/table_g/table"

class Mingbi extends React.Component {
  constructor() {
		super();
		this.state = {
			arr: ["烧纸记录", "设置汇率", "用户资产"],
			type1: "烧纸记录",
			moneyArr: [],
      tableArr: ["收款人", "收款金额", "备注", "汇款人","汇款地点","汇款日期"] // 表格标题
		}
	}
	componentWillMount() {
		axios
		.get("/mingbi", {
			params: {
				type: this.state.type1
			}
		})
		.then(data => {
			this.getData(data.data.data);
		});
}

	getData(data) {
    // // console.log(data);
    this.setState({
      moneyArr: data,
      dieArr: data.slice(
        this.state.i * 8,
        this.state.i * 8 + 8
      )
    });
  }
  // 请求tab
  changeTab(item) {
    this.setState({
      type1: item
    });
    // axios
    //   .get("/sheng/si", {
    //     params: {
    //       type: item
    //     }
    //   })
    //   .then(data => {
    //     this.getData(data.data.data);
    //   });
  }

  render() {
    return (
      <div className="mingbi">
        {/* 头部 */}
        <Tb_head />
        {/* 首页内容 */}
        <div className="Tb_gouhun_cont_bg">
          <div className="Tb_gouhun_cont">
            <div className="Zxr_sheng_box_title">
              {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u532.png?token=510777c4f456ac388824606296c3229252edefd4f4d0ed072fb95eb9966d3ec1" /> */}
              日志管理
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
						</div>

						<div className="Zxr_sheng_box_Form">
              <Table
                dieArr={this.state.moneyArr}
                tableArr={this.state.tableArr}
              ></Table>

              <div className="Zxr_sheng_box_Form_foot">
                {/* <Page
                  dieList={this.state.gouArr}
                  changePage={this.changePage.bind(this)}
                ></Page> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mingbi;
