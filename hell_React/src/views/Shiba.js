import React from 'react';
import Tb_head from "../components/head_g/head";
import Punishment from "../components/shiba/Punishment/Punishment"
import "../css/shiba.css"

class Shiba extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			arr:[
				{xinfa:"刀山",person:'张三',times:'10年'},
				{xinfa:"火海",person:'李四',times:'300年'},
				{xinfa:"拔舌",person:'尼古拉斯',times:'500年'},
				{xinfa:"油锅",person:'上官山炮',times:'250年'}
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
						{this.state.arr.map((item,index)=>{
							// console.log(item)
							return(
								<div className="item" key={index}>
									<Punishment nnn={item}></Punishment>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}

}

export default Shiba 
