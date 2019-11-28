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
      type: false
    };
  }

  componentDidMount() {
    if (sessionStorage.type == "true") {
      this.setType(true);
    } else {
      this.setType(false);
    }
    if (
      sessionStorage.login == "" ||
      window.location.href == "http://localhost:3000/shuju"
    ) {
      this.setType(false);
    } else {
      this.setType(true);
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
                <span>地府管理系统</span>
              </li>
              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u60.png?token=02a22eb478ee31fa8de9cdfccf887aa87fb6dc2a10f05e4a751111efa8909481"
                  alt=""
                /> */}
                <Link to="/home">首页</Link>
              </li>

              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u62.png?token=bc5f1d4a32065c8ecbd9adc78dbe2abd39582da1db59eeb0066b1b7242b51a50"
                  alt=""
                /> */}
                <Link to="/sheng">生死薄</Link>
              </li>

              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u71.png?token=ae83ffc22f60695b114c480e53e5cd10175b85afb96b5125de6a1251e46d0ffb"
                  alt=""
                /> */}
                <Link to="/gouhun">勾魂管理</Link>
              </li>

              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u73.png?token=8236f8f490f8c910935ea84534d977c7d2cae67e58cb77289a42fc83dde2cd78"
                  alt=""
                /> */}
                <Link to="/yanwang" ref="yan">
                  阎王审判殿记录
                </Link>
              </li>
              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u80.png?token=bd4ec47a8840b9d0d3b9b627bc3fa00a78690b058f70fe461a250573c0aede3e"
                  alt=""
                /> */}
                <Link to="/shiba">十八层地狱</Link>
              </li>

              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u81.png?token=99198544887a3e13ae70cd7490a784bda627357e15f56ab94cc421f70fc57ec5"
                  alt=""
                /> */}
                <Link to="/liudao">六道轮回</Link>
              </li>

              <li>
                {/* <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u82.png?token=f22af1ca2e107f540f720fd076d901c69764c39baa29fdaaee2dd064185d0817"
                  alt=""
                /> */}
                <Link to="/mingbi">冥币管理</Link>
              </li>

              <li>
                {/* <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u63.png?token=aefdbb7384373176c97a97d828b3167f4d44ad9912535a3831777d319d30c95f" /> */}
                <Link to="/rizhi">日志管理</Link>
              </li>

              <li>
                {/* <img
                  className="Dfw-cimg"
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u79.png?token=936ec9d4d34aada5e269ff7f3f7efb19217df1a32fa84869f13a79b0211f14ad"
                  alt=""
                /> */}
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

            <Route path="/home" component={Home}></Route>

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
