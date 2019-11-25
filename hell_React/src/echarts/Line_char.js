import React from 'react';
import * as Echarts from 'echarts';
import '../css/Line_char.css'

//首页折线图
class Immortals extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div className='Gr_con'>
                <div className='Gr_font'>
                    <span>地狱出境人数</span>
                    <span><img className='Gr_font_img' src='http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u100.png?token=63ce81d50ea8d3ed5f202262b7719baf85a01f9cb50ed352290f63f4cfbd7acb'></img></span>
                </div>
			    <div id = "Gr_main" style={{width: '98%',height: 290,}}></div>
            </div>
		)
	}
	componentDidMount() {
		var myChart = Echarts.init(document.getElementById('Gr_main'));
		var option = {
            //X轴
			xAxis: {
                type: 'category',
                splitLine:{show:true},
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10'],
                axisLabel: {
                    textStyle: {
                        color: '#666',
                        fontSize : 12 
                    },
                    lineStyle:{
                        color:'#666'
                    }
                    },
            },
            //Y轴
			yAxis: {
                type: 'value',
                min:0,
                max:100,
                // interval: 25,
                splitNumber : 10,
                splitLine:{show:true},
                axisLabel: {
                    textStyle: {
                        color: '#666',
                        fontSize : 12 
                    },
                    },
			},
			series: [{
                data: [10, 32, 61, 74, 10, 35, 90,24,33,93],
				type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle:{
                    width:1
                }
			},{
				data: [10, 62, 61, 84, 10, 30, 100,34,73,93],
				type: 'line',
                smooth: true,
                symbol: 'none',//无折线点
                color:'#8cd5c2', //折线颜色
                lineStyle:{   //折线粗细
                    width:1
                }
			},
		]
        };
        myChart.setOption(option);
    }
}

export default Immortals;