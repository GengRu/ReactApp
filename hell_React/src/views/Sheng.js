import React from "react";
import Pillar_char from '../echarts/pillar_char';
import Across_char from '../echarts/Across_char';
import Four_char from '../echarts/Four_char'


class Sheng extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div>
			生死簿
			<Pillar_char></Pillar_char>
			<Across_char></Across_char>
			<Four_char></Four_char>
		</div>
		)
	}
}

export default Sheng