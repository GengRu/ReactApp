import React from 'React';
import '../../css/comment/Dfw-runnum.css'
class Runnum extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            arr:''
        }
    }
    
    render() {
        var num=this.props.value.length-2
        return (
            <div className="Dfw-conner">
                <div className="Dfw-Mde">
                    {this.props.value.map((item, index) => {
                        return (<div className="Dfw-Mde" key={index} onClick={()=>{
                            if(index==num){
                                window.history.back();
                            }  
                        }}> 
                            <span className="span">
                                {item}
                            </span>
                        </div>)
                   })}
                </div>
            </div>
        )
    }
    componentDidMount(){
       this.setState({
           arr:1
       })
    }
}
export default Runnum