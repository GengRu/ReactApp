import React from 'React';
import axios from "axios";
import Runnum from "./../components/Runnum/Dfw-runnum.js";
import '../css/Yanwang.css';
import Gus from './Gus.js'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
  } from "react-router-dom";
class Yanwang extends React.Component {
	constructor(props) {
		super()
		this.state = {
			str: true,
			name:true,
		}
	}
	render() {
		return (
			<div className="Dfw-contina">
				<div className="Dfw-confie">
					<Runnum value={['首页','阎王殿审判记录']} />
					<div className="Dfw-Dene">
						<Router>
							<div className="Dfw-nod">
								<Link to="/Gus"><h4 className="Dfw-list" ref="list">闹阴司司马貌断狱</h4></Link>
								<div className="Dfw-cont">每逢疑狱便因循，地府阳间事体均。今日重湘新气象，千年怨气一朝伸。</div>
							</div>
							<Switch>
								<Route path="/Gus">
									<Gus/>
								</Route>
							</Switch>
						</Router>
					</div>
					
				</div>
			</div>
		)
	}
	componentWillUnmount(){
		
		this.setState({
			str: true
		})
	}
}

export default Yanwang 
