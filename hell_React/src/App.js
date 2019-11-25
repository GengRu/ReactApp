import React from "react";

import "./css/App.css";
import Login from "./views/Login";
import Home from "./views/home";
import Sheng from "./views/Sheng";
import Gouhun from "./views/Gouhun";
import Yanwang from "./views/Yanwang";
import Shiba from "./views/Shiba";
import Liudao from "./views/Liudao";
import Mingbi from "./views/Mingbi";
import Rizhi from "./views/Rizhi";
import Xitong from "./views/Xitong";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  
  render() {
    return (
	<Router>
	  <div>
	    <nav className="nav">
	      <ul>
			<li>
			  <Link to="/login">Login</Link>
			</li>
			<li>
			  <Link to="/home">Home</Link>
			</li>
			
			<li>
			  <Link to="/sheng">Sheng</Link>
			</li>
			
			<li>
			  <Link to="/gouhun">gouhun</Link>
			</li>
			
			<li>
			  <Link to="/yanwang">yanwang</Link>
			</li>
			
			<li>
			  <Link to="/shiba">shiba</Link>
			</li>
			
			<li>
			  <Link to="/liudao">liudao</Link>
			</li>
			
			
			<li>
			  <Link to="/mingbi">mingbi</Link>
			</li>
			
			<li>
			  <Link to="/rizhi">rizhi</Link>
			</li>
			
			<li>
			  <Link to="/xitong">xitong</Link>
			</li>
	      </ul>
	    </nav>
	
	    {/* A <Switch> looks through its children <Route>s and
	        renders the first one that matches the current URL. */}
	    <Switch>
			<Route path="/login">
			  <Login />
			</Route>
			
			<Route path="/home">
			  <Home />
			</Route>
			
			<Route path="/sheng">
			  <Sheng />
			</Route>
			
			<Route path="/gouhun">
			  <Gouhun />
			</Route>
			
			<Route path="/yanwang">
			  <Yanwang />
			</Route>
			
			<Route path="/shiba">
			  <Shiba />
			</Route>
			
			<Route path="/liudao">
			  <Liudao />
			</Route>
			
			<Route path="/mingbi">
			  <Mingbi />
			</Route>
			
			<Route path="/rizhi">
			  <Rizhi />
			</Route>
			
			<Route path="/xitong">
			  <Xitong />
			</Route>
	    </Switch>
	  </div>
	</Router>
      
    );
  }
}

export default App;
