import React from 'react';
import * as Echarts from 'echarts';
import '../css/Pie_char.css' ;

class Immortals extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div className='Gr_piechar_con'>
                <div className='Gr_pie_font'>
                    <span>地狱出境人数</span>
                    <span><img className='Gr_font_img' src='http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u100.png?token=63ce81d50ea8d3ed5f202262b7719baf85a01f9cb50ed352290f63f4cfbd7acb'></img></span>
                </div>
			    <div id = "Gr_pie" style={{width: '95%',height: '70%',}}></div>
            </div>
		)
	}
	componentDidMount() {
		var myChart = Echarts.init(document.getElementById('Gr_pie'));
        var option = {
            legend: {
                orient:'horizontal',
                bottom:-5,
                itemWidth: 12,
                itemHeight: 12,
               data:['1','2','3','4']
            },
            series: [
                {
                    // name:'访问来源',
                    type:'pie',
                    radius: ['50%', '85%'],
                    color:['#4286f5', '#109D58', '#F5b400','#CA493E'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'1'},
                        {value:30, name:'2'},
                        {value:24, name:'3'},
                        {value:35, name:'4'},
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
}

export default Immortals;