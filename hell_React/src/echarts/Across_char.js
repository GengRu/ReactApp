import React from 'react';
import '../css/Across_char.css'


class Immortals extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div className='Gr_across_con'>
               <div className='across_head'>统计</div>
               <div className='across_conts'>
                    <div className='conts_one'>
                       <div className='Gr_one'>
                           <p>1634</p>
                            <p>13%</p>
                        </div>
                        <div className='Gr_two'>
                            <p>总计</p>
                            <p>今年</p>
                        </div>
                    </div>
                    <div className='conts_two'>
                    <div className='Gr_one1'>
                           <p>1634</p>
                            <p>13%</p>
                        </div>
                        <div className='Gr_two'>
                            <p>分类</p>
                            <p>去年</p>
                        </div>
                    </div>
                    <div className='conts_three'>
                    <div className='Gr_one2'>
                           <p>1634</p>
                            <p>13%</p>
                        </div>
                        <div className='Gr_two'>
                            <p>总计</p>
                            <p>今年</p>
                        </div>
                    </div>
               </div>
			  
            </div>
		)
	}
	
}

export default Immortals;