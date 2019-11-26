import React from 'react';
import Tb_head from "../components/head_g/head";
import Punishment from "../components/shiba/Punishment/Punishment"
import "../css/shiba.css"

class Shiba extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			arr:[
				{xinfa:"刀山",persoon:'张三',times:'10年'},
				{xinfa:"火海",persoon:'张三',times:'10年'},
				{xinfa:"拔舌",persoon:'张三',times:'10年'},
				{xinfa:"油锅",persoon:'张三',times:'10年'}
			]
		}
	}
	render() {
		return ( 
			<div className="Zjt_shiba">
				<div className="Zjt_shiba_t">
					<Tb_head></Tb_head>
				</div>
				<div className="Zjt_shiba_con">
					<div className="Zjt-top">
						<p className="Zjt_tit">设备管理</p>
					</div>
					<div className="Zjt_cont">
						<div className="item">
							<Punishment></Punishment>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Shiba 
