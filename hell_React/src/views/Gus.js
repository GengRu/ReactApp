import React from 'react';
import '../css/Gus.css'
import Runnum from "./../components/Runnum/Dfw-runnum.js";
import axios from "axios";
class Gus extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:true,
			st:true,
			ens:''
		}
	}
	
	render(){
		console.log(this.props)
		if(this.state.ens){
		 
		}
		return (
			<div className="Dfw-Gus">
				<Runnum value={['首页','阎王殿审判记录',this.state.ens.name]} />
				<h4 className="Dfw-tit">{this.state.ens.title}</h4>
				<p className="Dfw-col">{this.state.ens.item}</p>
				<div className="Dfw-item">
					{this.state.ens.content}
				</div>
				<div className="Dfw-sen">
					<button>审批完成</button>
					<section>
						<p className="st"  onClick={()=>{
							if(this.state.st){
								document.querySelector('.st').style.background="#0099ff";
								this.setState({
									st:false
								})
							}else{
								document.querySelector('.st').style.background="#fff";
								this.setState({
									st:true
								})
							}
						}}><a></a></p><p>转发轮回司执行</p>
					</section>
					<section>
					<p className="ins"  onClick={()=>{
							if(this.state.name){
								document.querySelector('.ins').style.background="#0099ff";
								this.setState({
									name:false
								})
							}else{
								document.querySelector('.ins').style.background="#fff";
								this.setState({
									name:true
								})
							}
						}}><a></a></p><p>转发十八地狱执行</p>
					</section>
				</div>
			</div>
		)
	}
	componentWillMount() {
		axios.post("/goss").then(data => {
			var ser=data.data.data
			ser.forEach((el,index) => {
				if(this.props.pusd==el.id){
					this.setState({
						ens: el
					})
				}
			});
			
		})

	}
}


export default Gus