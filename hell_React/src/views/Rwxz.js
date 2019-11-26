import React from 'react';
import '../css/Rwxz.css';
import Runnum from '../components/Runnum/Dfw-runnum.js';
import Cops from '../components/trues/Dfw-cops.js'
class Rwxz extends React.Component {
    constructor() {
        super()
        this.state = {
            str: [{ n: '查看生死簿', s: true }, { n: '叫人三更死', s: true }, { n: '删除用户', s: true }]
          }
    }
    render() {
        return (
            <div className="Dfw-cols">
                <div className='Dfw-Rew'>
                    <div className='Dfw-bor'>
                        <Runnum value={['首页', '系统管理', '角色权限', '判官']} />
                    </div>
                    <div className='Dfw-New'>
                        <p>角色名称</p>
                        <div>判官</div>
                    </div>
                    <div className="Dfw-qxian">
                        <p>权限</p>
                        <div className='Dfw-Newlist'>
                            <div>
                                <p className="Dfw-title">生死簿</p>
                                <div className="Dfw-fw">
                                    <label form="rnt">用户范围：</label>
                                    <select id="rnt" >
                                        <option>华东区</option>
                                        <option>华西区</option>
                                        <option>华北区</option>
                                        <option>华南区</option>
                                        <option>华中区</option>
                                    </select>
                                    {this.state.str.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <Cops value={item}/>    
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className="Dfw-title">阎王殿</p>
                                <div className="Dfw-fw">
                                {this.state.str.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <Cops value={item}/>    
                                            </div>
                                        )
                                    })}    
                                </div>                                
                            </div>
                            <div>
                                <p className="Dfw-title">十八地狱</p>
                                <div className="Dfw-fw">
                                {this.state.str.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <Cops value={item}/>    
                                            </div>
                                        )
                                    })}    
                                </div> 
                            </div>
                            <div>
                                <p className="Dfw-title">系统管理</p>
                                <div className="Dfw-fw">
                                {this.state.str.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <Cops value={item}/>    
                                            </div>
                                        )
                                    })}    
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

}

export default Rwxz 