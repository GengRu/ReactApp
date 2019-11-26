import React from "react"
import "./tab.css"
class ShengTab extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  
  Dian(i,item) {
    this.setState({
      index: i
    });
    this.props.getTab(item)
  }
  
  render() {
    var Cont = this.props.arr.map((i, $idx) => {
      return (
        <div
          onClick={() => {
            this.Dian($idx,i);
          }}
          className={this.state.index == $idx ? "Zxr_sheng_active" : ""}
          key={$idx}
        >
          {i}
        </div>
      );
    });
    return (
      <div>
        {Cont}
      </div>
    )
  }
}

export default ShengTab