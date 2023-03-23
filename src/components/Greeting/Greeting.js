import React from "react"

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const {isGreeting} = this.statte; 
        const greetingText = isGreeting ? 'hello' : 'bye';

        return <h1 onClick={() => this.clickHandler()}> greetingText {this.props.name}</h1>
    }
}

export default Greeting;