import React from "react";
import "../css/Shuju.css";
import World_char from "./../echarts/World_char";
import Across_char from "./../echarts/Across_char";
import Pillar_char from "../echarts/Pillar_char";
import Four_char from "./../echarts/Four_char";

class Shuju extends React.Component {
  constructor() {
    super();
    this.state = {
      day: "",
      time: "",
      index: 1
    };
  }

  componentDidMount() {
    window.sessionStorage.type = false;
    this.props.fn("false");
    var date = new Date();
    this.setState({
      day: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    });
    var List = document.getElementsByClassName(
      "Zxr_shuju_cont_rightBox_lunbo_list_cont"
    );
    var Img = document.getElementsByClassName("Zxr_shuju_border");
    if (Img[0]) {
      List[1].style.display = "block";
      Img[1].style.transform = "rotateX(0deg)";
      Img[0].style.transform = "rotateX(-45deg)";
    }
  }

	
  Back() {
    window.location.href = "/home";
    window.sessionStorage.type = true;
  }

  Btn(i) {
    this.setState({
      index: i
    });
    var List = document.getElementsByClassName(
      "Zxr_shuju_cont_rightBox_lunbo_list_cont"
    );
    var Img = document.getElementsByClassName("Zxr_shuju_border");

    List[i].style.transition = "all .3s";
    List[i].style.display = "block";

    Img[i].style.transition = "all .3s";
    Img[i].style.transform = "rotateX(0deg)";

    for (var j = 0; j < List.length; j++) {
      if (j != i) {
        List[j].style = "";
        Img[j].style = "";
      }
      if (j < i) {
        Img[j].style.transform = "rotateX(-45deg)";
      }
    }
  }

  Top() {
    var idx = this.state.index;

    this.setState({
      index: idx
    });

    if (idx == 5) {
      idx = 5;
    } else {
      idx++;
    }

    this.Btn(idx);
  }

  Foot() {
    var idx = this.state.index;

    this.setState({
      index: idx
    });

    if (idx == 0) {
      idx = 0;
    } else {
      idx--;
    }

    this.Btn(idx);
  }

  render() {
    var Data = [
      ["天道", 22, 17, 66],
      ["人间道", 27, 13, 63],
      ["饿鬼道", 26, 14, 64],
      ["修罗道", 21, 18, 61],
      ["畜生道", 28, 15, 68],
      ["地狱道", 25, 16, 65]
    ];

    var Lunbo = Data.map((i, idx) => {
      return (
        <div
          className="Zxr_shuju_cont_rightBox_lunbo_list"
          key={idx}
          onClick={() => {
            this.Btn(idx);
          }}>
          <div className="Zxr_shuju_cont_rightBox_lunbo_list_title">
            {i[0]}
            <div className="Zxr_shuju_border"></div>
          </div>

          <div className="Zxr_shuju_cont_rightBox_lunbo_list_cont">
            <div>本层人数{i[1]}</div>
            <div>痛苦值{i[2]}</div>
            <div>物资补给{i[3]}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="Zxr_shuju">
        <World_char />
        <Across_char />
        <Pillar_char />
        <Four_char />
        <div className="Zxr_shuju_top">
          <div className="Zxr_shuju_top_left" onClick={this.Back.bind(this)}>
            <i className='iconfont icon-icon-shang' style={{color:'#fff',marginRight:'4px',fontSize:'18px',color: 'rgb(228, 228, 228)'}}></i>
            地府大数据可视化平台
          </div>
          <div className="Zxr_shuju_top_right">
            <span>{this.state.day}</span>
            <span>{this.state.time}</span>
          </div>
        </div>

        <div className="Zxr_shuju_cont">
          <div className="Zxr_shuju_cont_rightBox">
            <div className="Zxr_shuju_cont_rightBox_topBox">
              <p className="Zxr_shuju_cont_rightBox_topBox_text1">地府人数</p>
              <p className="Zxr_shuju_cont_rightBox_topBox_text2">19,861,016</p>
            </div>

            <div className="Zxr_shuju_cont_rightBox_lunbo">
              <div
                onClick={this.Top.bind(this)}
                style={{ textAlign: "center" }}
              >
              <i className='iconfont icon-rate-up' style={{fontSize:'30px'}}></i>
                {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u332.png?token=abe53abc48770e360880103033ed0d81678df36db7db8094979b372102a06013" /> */}
              </div>

              <div className="Zxr_shuju_cont_rightBox_lunbo1">{Lunbo}</div>

              <div
                onClick={this.Foot.bind(this)}
                style={{ textAlign: "center" }}
              >
              <i className='iconfont icon-sort_desc' style={{fontSize:'30px'}}></i>
                {/* <img
                  style={{ marginTop: "10px" }}
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u333.png?token=6923f2359da1174f6820be7e72c7cde0259faaae63c2e35f648ae885f53337db"
                /> */}
              </div>
            </div>

            <div className="Zxr_shuju_cont_rightBox_footBox">
              <p className="Zxr_shuju_cont_rightBox_footBox_title">
                地狱受刑人员性别
              </p>
              <div className="Zxr_shuju_cont_rightBox_footBox_left">
                <div>6542</div>
                <div>男人</div>
              </div>
              <div className="Zxr_shuju_cont_rightBox_footBox_right">
                <div>6542</div>
                <div>女人</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shuju;
