import React from "react";

class Toggler extends React.Component {
    constuctor(props) {
        super(props);
        this.state = {
            on: true
        }
    }

    clickHandler() {
        this.setState({
            on: !this.state.on
        })
    }
    
    render () {
        return (
            <button onClick={() => {this.clickHandler}}> 
                {this.state.on ? 'on' : 'off'}
            </button>
        )
    }
}