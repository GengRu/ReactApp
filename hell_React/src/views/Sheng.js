import React from "react";
import "../css/Sheng.css";

class Sheng extends React.Component{
	constructor(){
		super();
		this.state = {
		  index: 0,
		};
	}
	
	Dian(i){
		this.setState({
			index: i
		})
	}
	
	render(){
		var arr = ['阳寿未尽','孤魂野鬼','转世投胎','已删除']
		var Cont = arr.map((i, $idx)=>{
			return (
				<div
				 onClick={()=>{this.Dian($idx)}}
				 className={this.state.index==$idx?'Zxr_sheng_active':''}
				 key={$idx}>
					{i}
				</div>
			)
		})
		
		var FormJson = [
			{ID:'猴子一号',Name:'吱吱吱',Life:'11岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子二号',Name:'吱吱吱',Life:'12岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子三号',Name:'吱吱吱',Life:'13岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子四号',Name:'吱吱吱',Life:'14岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子五号',Name:'吱吱吱',Life:'15岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子六号',Name:'吱吱吱',Life:'16岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子七号',Name:'吱吱吱',Life:'17岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子八号',Name:'吱吱吱',Life:'18岁',Genus:'猴',Death:'自然死亡'},
			{ID:'猴子九号',Name:'吱吱吱',Life:'19岁',Genus:'猴',Death:'自然死亡'},
		]
		
		var FormCont = FormJson.map((i, idx)=>{
			console.log(i.ID)
			return(
				<div
				 key={idx}
				 className="Zxr_sheng_box_Form_cont">
					<div style={{width:'64px',borderRight:'1px solid #ccc'}}>
						<div className="Zxr_sheng_box_Form_cont_img">
							<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75"/>
						</div>
					</div>
					<div className="Zxr_sheng_box_Form_cont_all">{i.ID}</div>
					<div className="Zxr_sheng_box_Form_cont_all">{i.Name}</div>
					<div className="Zxr_sheng_box_Form_cont_all">{i.Life}</div>
					<div className="Zxr_sheng_box_Form_cont_all">{i.Genus}</div>
					<div className="Zxr_sheng_box_Form_cont_all">{i.Death}</div>
					<div className="Zxr_sheng_box_Form_cont_all">
						<span className="Zxr_sheng_box_Form_cont_btn">编辑</span>
						<span className="Zxr_sheng_box_Form_cont_btn">删除</span>
					</div>
				</div>
			)
		})
		
		return (
		<div className="Zxr_sheng">
			<div className="Zxr_sheng_box">
				<div className="Zxr_sheng_box_title">
					<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u532.png?token=510777c4f456ac388824606296c3229252edefd4f4d0ed072fb95eb9966d3ec1"/>
					生死簿
				</div>
				
				<div className="Zxr_sheng_box_nav">
					{Cont}
				</div>
				
				<div className="Zxr_sheng_box_inputBox">
					<div className="Zxr_sheng_box_inputBox_search">
						<input
						 type="text"
						 style={{outline:"none",border:"none"}}
						 placeholder="输入要搜索的内容"/>
						 
						<span>
							<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-已删除/u526.png?token=cea4bd04b1f8e933c6551c18bfdd759af3f6e304323c7107f4cd53a3f1323fe2"/>
						</span>
					</div>
					
					<div className="Zxr_sheng_box_inputBox_select">
						类别
						<select id="AreaId" name="AreaId" size="1" class="sel">
						   <option>请选择</option>
						   <option value="子">子鼠</option>
						   <option value="丑">丑牛</option>
						   <option value="寅">寅虎</option>
						   <option value="卯">卯兔</option>
						   <option value="辰">辰龙</option>
						   <option value="巳">巳蛇</option>
						   <option value="午">午马</option>
						   <option value="未">未羊</option>
						   <option value="申">申猴</option>
						   <option value="酉">酉鸡</option>
						   <option value="戌">戌狗</option>
						   <option value="亥">亥猪</option>
					   </select>
					</div>
					
					<div className="Zxr_sheng_box_inputBox_select">
						死亡方式
						<select id="AreaId" name="AreaId" size="1" class="sel">
						   <option>请选择</option>
						   <option value="1">自然死亡</option>
						   <option value="2">自杀</option>
						   <option value="3">他杀</option>
						   <option value="4">意外</option>
					   </select>
					</div>
					
					<button className="Zxr_sheng_box_inputBox_btn">删除</button>
				</div>
				
				<div className="Zxr_sheng_box_Form">
					<div className="Zxr_sheng_box_Form_title">
						<div style={{width:'64px',borderRight:'1px solid #ccc'}}></div>
						<div className="Zxr_sheng_box_Form_title_all">ID</div>
						<div className="Zxr_sheng_box_Form_title_all">姓名</div>
						<div className="Zxr_sheng_box_Form_title_all">寿命</div>
						<div className="Zxr_sheng_box_Form_title_all">类别</div>
						<div className="Zxr_sheng_box_Form_title_all">死亡方式</div>
						<div className="Zxr_sheng_box_Form_title_all">操作</div>
					</div>
					
					{FormCont}
					
					<div className="Zxr_sheng_box_Form_foot">
						<div className="Zxr_sheng_box_Form_foot_left">
							<div className="Zxr_sheng_box_Form_foot_left_img">
								<img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/生死簿-批量操作验证/u689.png?token=d776532ef6b3fd7da063bcf7c8578aa006a2a6133ada9911f553cfb6d2b27f75"/>
							</div>
							<span>已选9人，选择全部38596003人</span>
						</div>
						
						<div className="Zxr_sheng_box_Form_foot_right">
							<span>共490条数据，每页10条</span>
							<div className="Zxr_sheng_box_Form_foot_right_ye">
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
								<div>5</div>
							</div>
							<div className="Zxr_sheng_box_Form_foot_right_to">
								<span>跳至</span>
								<div className="Zxr_sheng_box_Form_foot_right_to_input">
									<input type="text" style={{outline:"none",border:"none"}}/>
								</div>
								<span>页</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Sheng