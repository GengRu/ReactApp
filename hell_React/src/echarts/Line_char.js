import React from "react";
import * as Echarts from "echarts";
import "../css/Line_char.css";

//首页折线图
class Immortals extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="Gr_main" style={{ width: "100%", height: 290 }}></div>;
  }
  componentDidMount() {
    var myChart = Echarts.init(document.getElementById("Gr_main"));
    var option = {
      //X轴
      xAxis: {
        type: "category",
        splitLine: { show: true },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        axisLabel: {
          textStyle: {
            color: "#666",
            fontSize: 12
          },
          lineStyle: {
            color: "#666"
          }
        }
      },
      //Y轴
      yAxis: {
        type: "value",
        min: 0,
        max: 100,
        // interval: 25,
        splitNumber: 10,
        splitLine: { show: true },
        axisLabel: {
          textStyle: {
            color: "#666",
            fontSize: 12
          }
        }
      },
      series: [
        {
          data: [10, 32, 61, 74, 10, 35, 90, 24, 33, 93],
          type: "line",
          smooth: true,
          symbol: "none",
          lineStyle: {
            width: 1
          }
        },
        {
          data: [10, 62, 61, 84, 10, 30, 100, 34, 73, 93],
          type: "line",
          smooth: true,
          symbol: "none", //无折线点
          color: "#8cd5c2", //折线颜色
          lineStyle: {
            //折线粗细
            width: 1
          }
        }
      ]
    };
    myChart.setOption(option);
  }
}

export default Immortals;
