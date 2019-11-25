import React from 'react';
import '../css/Shi.css';

class Shib extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='Gr_shi_con'>
                <div className='Gr_shi_item'>
                    
                </div>
                <div className='Gr_shi_item'>
                    <div className='Gr_shi_head'>
                      <div className='shi_font'><span>刀山001</span><span>设备正常</span></div>
                      <div className='shi_font1'><span>操作员：小鬼鬼</span><span>以工作35年</span></div>
                    </div>
                    <div className='shi_img'>
                        {/* <img src=''></img> */}
                    </div>
                    <div className='shi_bom'>
                        设备暂停 查看记录
                    </div>
                </div>
                <div className='Gr_shi_item'>
                   
                </div>
            </div>
        )
    }
}
export default Shib;