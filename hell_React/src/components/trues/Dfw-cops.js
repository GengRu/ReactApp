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
                        
                        if (this.props.value.s) {
                            console.log(this.props.value)
                            ev.target.style.background = "#0099ff";
                            this.props.value.s=false
                        } else {
                            console.log(this.props.value)
                            ev.target.style.background = "#fff";
                             this.props.value.s=true
                        }
                    }}></p><p>{this.props.value.n}</p>
                </section>
            </div>
        )
    }
}
export default Docms