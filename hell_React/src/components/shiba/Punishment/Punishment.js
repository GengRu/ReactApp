import React from 'react';
import "../Punishment/Punishment.css"

class Punishment extends React.Component {
	constructor(props) {
		super(props)
        this.state={
            type:true,
            content:'设备暂停',
            states:'设备正常',
            arr:[
				{xinfa:"刀山",persoon:'张三',times:'10年'},
				{xinfa:"火海",persoon:'李四',times:'600年'},
				{xinfa:"拔舌",persoon:'尼古拉斯',times:'500年'},
				{xinfa:"油锅",persoon:'上官山炮',times:'300年'}
			]
        }
	}
    cHange(){
        this.setState({
            type:!this.state.type
        })
        if(!this.state.type){
            this.state.content='设备暂停'
            this.state.states='设备正常'
            this.refs.changes.style.backgroundColor=''
            this.refs.changes.style.color=''
            
        }else{
            this.state.content='设备重启'
            this.state.states='停止运行'
            this.refs.changes.style.backgroundColor='red'
            this.refs.changes.style.color='white'
        }
    }
    aLert(){
        alert(this.state.states)
    }
	render() {
        return(
			<div>
                        <div className="Zjt_Punishment">
				        <div className="Zjt_Punishment_top">
                            <p className="Zjt_top">
                                <span className="Punishment"></span>
                                <span ref="changes" className="state" dangerouslySetInnerHTML={{__html: this.state.states}}></span>
                            </p>
                            <p className="Zjt_bt">
                                <span className="person">操作员：qq</span>
                                <span className="times">已工作35年</span>
                            </p>
                        </div>
                        <div className="Zjt_img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2593820310,1833845801&fm=26&gp=0.jpg" />
                        </div>
                        <div className="Zjt_list">
                            <p className="Zjt_list_s">
                                <span className="Zjt_l" onClick={this.cHange.bind(this)} dangerouslySetInnerHTML={{__html: this.state.content}}></span>
                                <span className="Zjt_r" onClick={this.aLert.bind(this)}>查看记录</span>
                            </p>
                        </div>
			        </div>
               
            </div>
            
        )
	}
}

export default Punishment 
