import React from "react";
import * as Echarts from "echarts";
import "../css/Pie_char.css";

class Immortals extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="Gr_pie" style={{ width: "95%", height: "70%" }}></div>;
  }
  componentDidMount() {
    var myChart = Echarts.init(document.getElementById("Gr_pie"));
    var option = {
      legend: {
        orient: "horizontal",
        bottom: -5,
        itemWidth: 12,
        itemHeight: 12,
        data: ["1", "2", "3", "4"]
      },
      series: [
        {
          // name:'访问来源',
          type: "pie",
          radius: ["50%", "85%"],
          color: ["#4286f5", "#109D58", "#F5b400", "#CA493E"],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: "center"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "1" },
            { value: 30, name: "2" },
            { value: 24, name: "3" },
            { value: 35, name: "4" }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
}

export default Immortals;
