import React from "react";
import "./css/App.css";
import Home from "./views/home";
import About from "./views/About";
import User from "./views/User";
import Login from "./views/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  
  render() {
    var arr = this.state.users.map(item => {
      return <div key="item.id">{item.user}</div>;
    });
    return (
	<Router>
	  <div>
	    <nav className="nav">
	      <ul>
	        <li>
	          <Link to="/">Home</Link>
	        </li>
	        <li>
	          <Link to="/about">About</Link>
	        </li>
	        <li>
	          <Link to="/user">User</Link>
	        </li>
			<li>
			  <Link to="/login">Login</Link>
			</li>
	      </ul>
	    </nav>
	
	    {/* A <Switch> looks through its children <Route>s and
	        renders the first one that matches the current URL. */}
	    <Switch>
			<Route path="/login">
			  <Login />
			</Route>
	      <Route path="/about">
	        <About />
	      </Route>
	      <Route path="/user">
	        <User />
	      </Route>
	      <Route path="/">
	        <Home />
	      </Route>
	    </Switch>
	  </div>
	</Router>
      
    );
  }
}

export default App;
