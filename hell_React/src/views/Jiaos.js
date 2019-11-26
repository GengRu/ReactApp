import React from 'react';
import Runnum from '../components/Runnum/Dfw-runnum.js';
import '../css/Jiaos.css';
import Rwxz from './Rwxz'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
class Jiaos extends React.Component {
	constructor() {
		super()
	}
	render() {
		return ( 
			<div className="Dfw-Jsbox">
                <div className="Dfw-Run"><Runnum value={['首页','系统管理','角色权限']}/></div>
                <Router>
                    <div className="Dfw-Rwxz">
                        <h4><Link  to="/rwxz">判官</Link></h4>
                        <p>
                            长的凶神恶煞、阴险狡诈，但绝大部分都心底善良、正直。决大部分是判处人的轮回生死，对坏人进行惩罚，对好人进行奖励。判官取材于中国传统文化中的冥府判官
                        </p>
                        <Switch>
                            <Route path="/Rwxz">
                                <Rwxz/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
			</div>
		)
	}

}

export default Jiaos 