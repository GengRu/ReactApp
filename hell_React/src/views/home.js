import React from "react";
import axios from "axios";
import "../css/Home.css";
import Tb_head from "../components/head_g/head";
import Tb_home_top from "../components/home/top/top";
import Tb_cont_title from "../components/home/cont_title/cont_title";
import Tb_common_nav from "../components/home/common_nav/common_nav";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { bgColor: "red", title: "地府人数" },
        { bgColor: "cyan", title: "今日入境" },
        { bgColor: "#05f", title: "今日处境" },
        { bgColor: "#f0f", title: "管理员" }
      ],
      count: [],
      common_nav: [
        {
          img: "",
          title: "生死薄"
        },
        {
          img: "",
          title: "查询寿命"
        },
        {
          img: "",
          title: "入境管理"
        },
        {
          img: "",
          title: "重新投胎"
        },
        {
          img: "",
          title: "货币管理"
        },
        {
          img: "",
          title: "操作日志"
        },
        {
          img: "",
          title: "十八地狱"
        },
        {
          img: "",
          title: "发勾魂单"
        },
        {
          img: "",
          title: "资产管理"
        },
        {
          img: "",
          title: "员工管理"
        },
        {
          img: "",
          title: "营销管理"
        },
        {
          img: "",
          title: "百鬼夜行"
        }
      ]
    };
  }
  //请求首页标题数据
  componentDidMount() {
    var arr = [];
    axios.get("/home").then(data => {
      var json = data.data.data[0];
      for (var key in json) {
        arr.push(json[key]);
      }
      this.setState({
        count: arr
      });
    });
  }
  render() {
    return (
      // 首页
      <div className="Tb_home">
        {/* 头部 */}
        <Tb_head />
        {/* 首页内容 */}
        <div className="Tb_home_cont_bg">
          <div className="Tb_home_cont">
            {/* 首页内容上 */}
            <div className="Tb_home_top">
              <Tb_home_top data={this.state.data} count={this.state.count} />
            </div>
            {/* 首页内容下 */}
            <div className="Tb_home_bottom">
              <div className="Tb_home_bottom_cont">
                <div className="Tb_home_bottom_contL">
                  <Tb_cont_title title="常用功能导航" />
                  <div>
                    <Tb_common_nav common_nav={this.state.common_nav} />
                  </div>
                </div>
                <div className="Tb_home_bottom_contR">
                  <Tb_cont_title title="今日待办" />
                  <div className="today_t">
                    <span className="todayTime">AM:9:00</span>
                    <span>大事件审判</span>
                  </div>
                  <div>
                    <div className="todayHuiyi">
                      <span className="todayHYfirst">时间：</span>
                      <span>3029年2月29日</span>
                    </div>
                    <div className="todayHuiyi">
                      <span className="todayHYfirst">地点：</span>
                      <span>会议室2938</span>
                    </div>
                  </div>
                  <div className="todayImg">
                    <img
                      src="https://tse3-mm.cn.bing.net/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&w=214&h=214&c=7&o=5&pid=1.7"
                      alt=""
                    />
                    <img
                      src="https://tse4-mm.cn.bing.net/th?id=OIP.LTyzkbnUGUWY1k91-NpAEQAAAA&w=214&h=214&c=7&o=5&pid=1.7"
                      alt=""
                    />
                    <img
                      src="https://tse4-mm.cn.bing.net/th?id=OIP.iZQAX1b7IKYOJclLYi4tzAAAAA&w=215&h=214&c=7&o=5&pid=1.7"
                      alt=""
                    />
                    <img
                      src="https://tse2-mm.cn.bing.net/th?id=OIP.pqZF07ue6J-7QS3D3Yo6DQAAAA&w=215&h=214&c=7&o=5&pid=1.7"
                      alt=""
                    />
                    <img
                      src="https://tse2-mm.cn.bing.net/th?id=OIP.0f6mQ_OrKk4Kwf6zaWSeRgAAAA&w=215&h=214&c=7&o=5&pid=1.7"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="todayHuiyi">
                      <span className="todayHYfirst">时间：</span>
                      <span>3029年2月29日</span>
                    </div>
                    <div className="todayHuiyi">
                      <span className="todayHYfirst">地点：</span>
                      <span>会议室2938</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Tb_home_bottom_cont">
                <div className="Tb_home_bottom_contL">
                  <Tb_cont_title title="地府出入境人数" />
                </div>
                <div className="Tb_home_bottom_contR">
                  <Tb_cont_title title="各层地狱人数" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
