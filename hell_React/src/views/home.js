import React from 'react';
import Line_char from '../echarts/Line_char'
import Pie_char from '../echarts/Pie_char'


class Home extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div>
			首页
			<Line_char></Line_char>
			<Pie_char></Pie_char>
		</div>
		)
	}
}

export default Home