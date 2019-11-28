import React from 'react';
import '../css/Rwxz.css';
import Runnum from '../components/Runnum/Dfw-runnum.js';
import Cops from '../components/trues/Dfw-cops.js';
import axios from 'axios'
class Rwxz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ens:'',
          }
    }
    render() {
        console.log(this.props)
        if(this.state.ens){
            var sba=this.state.ens[0].sba.split(',').map((item,index)=>{
                return(
                    <div key={index}>
                        <Cops value={item}/>    
                    </div>
                )
            });;
            var ss=this.state.ens[0].ss.split(',').map((item,index)=>{
                return(
                    <div key={index}>
                        <Cops value={item}/>    
                    </div>
                )
            });
            var xt=this.state.ens[0].xt.split(',').map((item,index)=>{
                return(
                    <div key={index}>
                        <Cops value={item}/>    
                    </div>
                )
            });;
            var yw=this.state.ens[0].yw.split(',').map((item,index)=>{
                console.log(item)
                return(
                    <div key={index}>
                        <Cops value={item}/>    
                    </div>
                )
            });

        }
        return (
            <div className="Dfw-cols">
                <div className='Dfw-Rew'>
                    <div className='Dfw-bor'>
                        <Runnum value={['首页', '系统管理', '角色权限',this.props.value.name]} />
                    </div>
                    <div className='Dfw-New'>
                        <p>角色名称</p>
                        <div>{this.props.value.name}</div>
                    </div>
                    <div className="Dfw-qxian">
                        <p>权限</p>
                        <div className='Dfw-Newlist'>
                            <div>
                                <p className="Dfw-title">生死簿</p>
                                <div className="Dfw-fw">
                                    <label form="rnt">用户范围：</label>
                                    <select id="rnt"  defaultValue={this.props.value.user_qx}>
                                        <option>华东区</option>
                                        <option>华西区</option>
                                        <option>华北区</option>
                                        <option>华南区</option>
                                        <option>华中区</option>
                                    </select>
                                    {ss}
                                </div>
                            </div>
                            <div>
                                <p className="Dfw-title">阎王殿</p>
                                <div className="Dfw-fw">
                                    {yw}   
                                </div>                                
                            </div>
                            <div>
                                <p className="Dfw-title">十八地狱</p>
                                <div className="Dfw-fw">
                                {sba}  
                                </div> 
                            </div>
                            <div>
                                <p className="Dfw-title">系统管理</p>
                                <div className="Dfw-fw">
                                {xt}    
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="Dfw-determine">
                        <button>确定</button>
                        <button className="Dfw-call">取消</button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.post('/seng').then(data=>{
            this.setState({
                ens:data.data.data
            })
        })
    }
}

export default Rwxz 