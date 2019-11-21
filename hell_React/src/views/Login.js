import React from "react";
import "../css/Login.css";

class Login extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div className="Login">
			<div className="Zxr_Login">
				<Login_Title/>
				<Login_Cont/>
			</div>
		</div>
		)
	}
}

function Login_Title(){
	return(
		<div className="Zxr_Login_Title">
			<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/登录页/u43.png?token=8fdef291d2f602579601f68aaac408d40186b825e741733978f05cad60b79f02"/>地府管理系统
		</div>
	)
}

class Login_Cont extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0,
		}
	}
	
	setIndex(i){
		this.setState({
			index: i
		})
	}
	
	E(i){
		if(this.state.index == i){
			this.refs[i].style.borderBottom = '3px solid #0099FF'
		}else{
			this.refs[i].style.borderBottom = '3px solid #999'
		}
	}
	
	O(i){
		if(this.state.index == i){
			this.refs[i].style.borderBottom = '3px solid #0099FF'
		}else{
			this.refs[i].style.borderBottom = 'none'
		}
	}
	
	render(){
		var arr = ['账号登录','手机登录','扫描登录']
		var Cont = arr.map((i, $idx)=>{
			return(
				<div 
				  className="Zxr_Login_Cont_title" 
				  key={$idx} 
				  onClick={()=>{this.setIndex($idx)}}
				  style={{color:this.state.index==$idx?'#0099FF':'',borderBottom:this.state.index==$idx?'3px solid #0099FF':''}}
				  
				  onMouseEnter={()=>{this.E($idx)}}
				  onMouseOut={()=>{this.O($idx)}}
				  ref={$idx}>
					{i}
				</div>
			)
		})
		
		return(
			<div className="Zxr_Login_Cont">
				<div className="Zxr_Login_Cont_Titles">{Cont}</div>
				
				<div className="Zxr_Login_Cont_box" style={{display:this.state.index==0?'block':'none'}}>
					<div className="Zxr_Login_Cont_box_input">
						<input type="text" placeholder="账号/手机号/邮箱" style={{border:'none'}}/>
					</div>
					
					<div className="Zxr_Login_Cont_box_input">
						<input type="password" placeholder="密码" style={{border:'none'}}/>
					</div>
					<div className="Zxr_Login_Cont_Btn">登录</div>
					<div className="Zxr_Login_Cont_Foot">忘记密码</div>
				</div>
				
				<div className="Zxr_Login_Cont_box" style={{display:this.state.index==1?'block':'none'}}>
					<div className="Zxr_Login_Cont_box_input">
						<input type="text" placeholder="手机号" style={{border:'none'}}/>
					</div>
					
					<div className="Zxr_Login_Cont_box_input">
						<input type="password" placeholder="验证码" style={{border:'none'}}/>
						<span>发送验证码</span>
					</div>
					<div className="Zxr_Login_Cont_Btn">登录</div>
				</div>
				
				<div className="Zxr_Login_Cont_box" style={{display:this.state.index==2?'block':'none'}}>
					<div className="Zxr_Login_Cont_box_img">
						<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/登录页/u40.jpg?token=3669212c88f374a5790bd0d917c0d8d1bd96e854e784e834c1df0db7ec5fd7b3"/>
					</div>
					<div className="Zxr_Login_Cont_Foot"><span>请使用手机App扫码登录</span> 下载App</div>
				</div>
			</div>
		)
	}
	
}

export default Login