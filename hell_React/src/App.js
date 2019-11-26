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
import Guanli from "./views/Guanli";
import Jiaos  from "./views/Jiaos"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nerr:['首页'],
      str:true,
    };      
  }
  render() {
    return (
      <Router>
        <div className="Tb_container">
          <nav className="nav">
            <ul>
              <li>
                <span>地府管理系统</span>
              </li>
              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u60.png?token=a8bdff2a7e5f3c21de0e7be85ded8ab117e7ee9a0470ae5944d549e14ee01623"
                  alt=""
                />
                <Link to="/home">首页</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u62.png?token=3a2f2f3acdde732dabe7c57eedca7aa13b1d1abdb61cd0112e950a8ccfad7e3c"
                  alt=""
                />
                <Link to="/sheng">生死薄</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u71.png?token=155354e2dd70c36b43b4e9fb867a95c38ad9784f4acc212414127253891d08d3"
                  alt=""
                />
                <Link to="/gouhun">勾魂管理</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u73.png?token=0757a414036bb1eb2e90b93e544d1e81fea23ad86940c270c92b4ce366317e00"
                  alt=""
                />
                <Link to="/yanwang" ref='yan'>阎王审判殿记录</Link>
              </li>
              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u80.png?token=e9ee6da6444ee39893ee233ca312f54f7a776ab4b378dea455c2b445ca12ce01"
                  alt=""
                />
                <Link to="/shiba">十八层地狱</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u81.png?token=9699ad45815ff65254cbe239fdb1a49832b782f275d4e2eb0f615445b3dafc06"
                  alt=""
                />
                <Link to="/liudao">六道轮回</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u82.png?token=22ab239fb5ef8ac78a126a1ee22dcaa3a02159cd88c274fb93854a35fc49a1a3"
                  alt=""
                />
                <Link to="/mingbi">冥币管理</Link>
              </li>

              <li>
                <img
                  src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/%E9%A6%96%E9%A1%B5/u63.png?token=afa8076a4fe05bfdf72462e4906c4e3ed1ec44811fc7e2062c5536aa27cbf2aa"
                  alt=""
                />
                <Link to="/rizhi">日志管理</Link>
              </li>

              <li ref="ne">
                <section >
                  <p className="p-min"
                  onClick={()=>{
                  
                    if(this.state.str){
                     this.refs.ne.style.height="70px";
                     this.setState({
                       str:false
                     })
                    }else{
                     this.refs.ne.style.height="120px";
                     this.setState({
                       str:true
                     })
                    }
                 }}><Link to="/xitong">系统管理</Link></p>
                  <div className="childl">
                    <p><Link  to="/guanli">管理员</Link></p>
                    <p><Link  to="/jiaos">角色权限</Link></p>
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
              <Guanli/>
            </Route>

            <Route path="/Guanli">
              <Guanli/>
            </Route>

            <Route path="/Jiaos">
            <Jiaos/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
