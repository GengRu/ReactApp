import React from 'react';
import * as Echarts from 'echarts';
import '../css/Four_char.css';

class Immortals extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div className='Gr_four_con'>
               <div id = "Gr_four" style={{width: 324,height: 264,}}></div>
            </div>
		)
	}
	componentDidMount() {
		var myChart = Echarts.init(document.getElementById('Gr_four'));
        var option = {
            dataset: {
            source: [
            // ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            // [ 41.1, 30.4, 65.1, 53.3, 83.8,],
            // [ 86.5, 92.1, 85.7, 83.1, 73.4,],
            ],
            },
            series: [{
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['25%', '25%'],
            label:{
            normal:{
            position:'inner',
            formatter: '{b} {d}% ',
            show:true,
            // formatter:function(){
            // return '一个指标'
            // }
            }
            }, 
            data:[33,23]
            }, {
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['75%', '25%'],
            // seriesLayoutBy: 'row',
            label:{
            normal:{
            position:'inner',
            formatter: '{b} {d}% ',
            show:false
            }
            },
            itemStyle:{
            color:['orange','red']
            },
            data:[43,23]
            }, {
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['25%', '75%'],
            label:{
            normal:{
            position:'inner',
            formatter: '{b} {d}% ',
            show:false
            }
            },
            data:[33,23]
            }, {
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['75%', '75%'],
            avoidLabelOverlap: false,
            // hoverAnimation:false,
            label:{
            normal:{
            position:'inner',
            formatter: '{b} {d}% ',
            show:false
            }
            },
            data:[12,33]
            }]
            };
        
        myChart.setOption(option);
    }
}

export default Immortals;