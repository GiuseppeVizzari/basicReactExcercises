import React from "react";

class ButtonCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            labelBefore: props.labelBefore,
            labelAfter: props.labelAfter
        };
    }

    render(){
        return (
            <p>
                {this.state.labelBefore}<br />
                <button onClick={() => this.setState({count: this.state.count + 1})}>Clickme!</button><br />
                {this.state.count} {this.state.labelAfter}
            </p>
        );
    }
}

export default ButtonCounter;