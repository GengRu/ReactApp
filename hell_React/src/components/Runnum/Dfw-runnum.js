import React from 'React';
import '../../css/comment/Dfw-runnum.css'
class Runnum extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        var num=this.props.value.length-2       
        return (
            <div className="Dfw-conner">
                <div className="Dfw-Mde">
                    {this.props.value.map((item, index) => {    
                         var ser=""
                         ser=document.querySelectorAll(".Dfw-zimg")                   
                        return (<div className="Dfw-Mde" key={index} onClick={()=>{
                            if(index==num){
                                window.history.back();
                            }  
                            if (index == 0) {
                                window.location.href = "/home"
                            }
                        }}> 
                           <span className="span">
                                {item}
                            </span>
                            <img  className="Dfw-zimg" src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/阎王殿审判记录-司马貌/u898.png?token=cad3eb87202143ede3515f9d8160bc985cd3185494e684604fc61e17845f2aa7" alt=""/>
                        </div>)
                        
                        
                   })}
                </div>
            </div>
        )
        
    }
    componentDidMount(){
        var ser=document.querySelectorAll('.Dfw-zimg')
        console.log()
        ser[ser.length-1].remove();
    }
}
export default Runnum