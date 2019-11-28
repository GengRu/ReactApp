import React from 'react'
class Docms extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            str:true
        }
    }
    render() {
        return (
            <div>
                <section>
                    <p className="st2" onClickCapture={(ev) => {
                        if (this.state.str) {
                            ev.target.style.background = "#0099ff";
                           this.setState({
                               str:false
                           })
                        } else {
                            ev.target.style.background = "#fff";
                             this.setState({
                                 str:true
                             })
                        }
                    }}></p><p>{this.props.value}</p>
                </section>
            </div>
        )
    }
}
export default Docms