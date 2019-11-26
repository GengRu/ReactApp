import React from 'react';
import * as Echarts from 'echarts';
import '../css/pillar_char.css';


class Immortals extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div className='Gr_pillar_con'>
               <div id = "Gr_pillar" style={{width: 324,height: 264,}}></div>
            </div>
		)
	}
	componentDidMount() {
		var myChart = Echarts.init(document.getElementById('Gr_pillar'));
        var option = {
            xAxis: [{
                type:'category',
                    data: ['1','2','3','4','5','6','7','8','9','10'],
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#ccc'
                        }
                    },      
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize : 12 
                        }
                        },
                      
            },],
            yAxis:
            [
                {
                    type: 'value',
                    min: 0,
                    max: 50,
                    interval: 25,
                    splitLine:{show:false},
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize : 12 
                        },
                        lineStyle:{
                            color:'#ccc'
                        }
                        },  
                        
                },
                {
                    // type: 'value',
                    // min: 0,
                    // max: 25,
                    // interval: 5,
                    splitLine:{show:false},
                   
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 1.5, 3.3, 10.2, 6.3, 16.4, 3.0, 9.5, 12.0, 6.2],
                    symbol: 'none',
                    color:'green',
                }
            ]
        };
        myChart.setOption(option);
    }
}

export default Immortals;