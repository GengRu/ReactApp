import React from 'React';
import axios from "axios";
import Runnum from "./../components/Runnum/Dfw-runnum.js";
import '../css/Yanwang.css';
import Gus from './Gus.js';
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
			name: true,
			ens: '',
		}
	}
	render() {
		if (this.state.ens) {
			var as = this.state.ens.map((item, index) => {
				return (
					<Router key={index}>
						<div className="Dfw-nod" >
							<Link to="/Gus"><h4 className="Dfw-list" ref="list">{item.name}</h4></Link>
							<div className="Dfw-cont">{item.title}</div>
						</div>
						<Switch>
							<Route path="/Gus">
								<Gus pusd={item.id}/>
							</Route>
						</Switch>
					</Router>
				)
			})
		}
		var s=document.querySelector('.Dfw-confie');
		return (
			<div className="Dfw-contina">
				<div className="Dfw-confie">
					<Runnum value={['首页', '阎王殿审判记录']} />
					<div className="Dfw-Dene" >
						{as}
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		axios.post("/goss").then(data => {
			var ser = data.data.data
			this.setState({
				ens: ser
			})
		})

	}
}


export default Yanwang 
