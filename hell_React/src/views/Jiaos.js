import React from 'react';
import Runnum from '../components/Runnum/Dfw-runnum.js';
import '../css/Jiaos.css';
import Rwxz from './Rwxz';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
class Jiaos extends React.Component {
	constructor() {
        super()
        this.state={
            ens:''
        }
	}
	render() {
        if(this.state.ens){
            var nes=this.state.ens.map((item,index)=>{
                return(
                    <Router key={index}>
                    <div className="Dfw-Rwxz">
                        <h4><Link  to="/rwxz">{item.name}</Link></h4>
                        <p>{item.title}</p>
                        <Switch>
                            <Route path="/Rwxz">
                                <Rwxz value={item}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
                )
            })
        }
		return ( 
			<div className="Dfw-Jsbox">
                <div className="Dfw-Run"><Runnum value={['首页','系统管理','角色权限']}/></div>
                {nes}
			</div>
		)
	}
componentDidMount(){
    axios.post("/rygl").then(data=>{
       this.setState({
           ens:data.data.data
       })
    })
}
}

export default Jiaos 