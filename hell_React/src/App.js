import React from "react";
import "./css/App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Sheng from "./views/Sheng";
import Gouhun from "./views/Gouhun";
import Yanwang from "./views/Yanwang";
import Shiba from "./views/Shiba";
import Liudao from "./views/Liudao";
import Mingbi from "./views/Mingbi";
import Rizhi from "./views/Rizhi";

import Xitong from "./views/Xitong";





import Guanli from "./views/Guanli";
import Jiaos from "./views/Jiaos";
import Shuju from "./views/Shuju";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function Aaa() {
  var abc = useLocation();
  if (abc.pathname == "/" || abc.pathname == "/shuju") {
    window.sessionStorage.type = false;
  } else {
    window.sessionStorage.type = true;
  }
  return <div></div>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nerr: ["首页"],
      str: true,
      type: ""
    };
  }

  componentDidMount() {
    console.log(sessionStorage.type);
    if (sessionStorage.type == "true") {
      this.setType(true);
    } else {
      this.setType(false);
    }
  }
  componentDidUpdate() {
    if (this.state.type == true) {
      this.refs.nav.style.display = "block";
    } else {
      this.refs.nav.style.display = "none";
    }
  }
  setType(t) {
    this.setState({
      type: t
    });
  }

  render() {
    return (
    
      <Router>
        <div className="Tb_container">
          <nav className="nav" ref="nav">
            <ul>
              <li>
                <span className='Tb_span'>地府管理系统</span>
              </li>
              <li>
                <i className='iconfont icon-fangzi'></i>
                <Link to="/home">首页</Link>
              </li>

              <li>
                <i className='iconfont icon-fenlei'></i>
                <Link to="/sheng">生死薄</Link>
              </li>

              <li>
             
              <i className='iconfont  icon-icon-'></i>
                <Link to="/gouhun">勾魂管理</Link>
              </li>

              <li>
              <i className='iconfont icon-chuizi'></i>
                <Link to="/yanwang" ref="yan">
                  阎王审判殿记录
                </Link>
              </li>
              <li>
                <i className='iconfont icon-dao'></i>
                <Link to="/shiba">十八层地狱</Link>
              </li>

              <li>
                <i className='iconfont icon-weibiaoti-'></i>
                <Link to="/liudao">六道轮回</Link>
              </li>

              <li>
               <i className='iconfont icon-bi'></i>
                <Link to="/mingbi">冥币管理</Link>
              </li>

              <li>
               <i className='iconfont icon-shuangren'></i>
                <Link to="/rizhi">日志管理</Link>
              </li>

              <li>
                <i className='iconfont icon-settings'></i>
                <section ref="ne">
                  <p
                    className="p-min"
                    onClick={() => {
                      if (this.state.str) {
                        this.refs.ne.style.height = "120px";
                        this.setState({
                          str: false
                        });
                      } else {
                        this.refs.ne.style.height = "60px";
                        this.setState({
                          str: true
                        });
                      }
                    }}
                  >
                    <Link to="/xitong">系统管理</Link>
                  </p>
                  <div className="childl">
                    <p>
                      <Link to="/guanli">管理员</Link>
                    </p>
                    <p>
                      <Link to="/jiaos">角色权限</Link>
                    </p>
                  </div>
                </section>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
	        renders the first one that matches the current URL. */}
          <Switch>
            {/* <Redirect from="/" to="/login" /> */}

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/home" component={Home}>
              
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
              <Guanli />
            </Route>

            <Route path="/Guanli">
              <Guanli />
            </Route>

            <Route path="/Jiaos">
              <Jiaos />
            </Route>

            <Route path="/shuju">
              <Shuju
                fn={t => {
                  this.setType(t);
                }}
              />
            </Route>
          </Switch>
        </div>
      </Router>
   
    );
  }
}

export default App;
