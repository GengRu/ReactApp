import React from 'react';
import * as Echarts from 'echarts';
import '../css/Six_char.css';

var num=340
class Immortals extends React.Component {
	constructor(props) {
		super(props)
    }
   btn(){
		var obtn=document.getElementById('Gr_six')
		obtn.style.transition="1s";
		console.log(1)
		num+=340
		obtn.style.transform="rotateZ("+ num +"deg)";
   }
	render() {
		return (
            <div className='Gr_six_con'>
			   <div className='Gr_img'>
                    <div className='Gr_triangle'></div>
			   		<div id = "Gr_six" style={{width: 500,height: 500,zIndex:66,}}></div>
               </div>
               <div className='Gr_sixbtn' onClick={()=>{this.btn()}}>立即开始轮回</div>
            </div>
		)
	}
	componentDidMount() {
		var myChart = Echarts.init(document.getElementById('Gr_six'));
        var option = {
            tooltip: {
                trigger: 'item',
            },
            series: [
                {
                    // name:'访问来源',
                    type:'pie',
                    color:['#4286f5','tomato', '#109D58', ],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: { normal: { show: true, position: 'inner' },},
                    data:[
                        {value:95,name:'畜生'},
                        {value:20,name:'饿鬼'},
                        {value:24,name:'地狱'},
                        {value:55,name:'天道'},
                        {value:50,name:'人道'},
                        {value:78,name:'阿修罗'},
                    ],  
                }
            ]
        }; 
        myChart.setOption(option);
    }
}

export default Immortals;