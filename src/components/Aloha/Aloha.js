import React from "react"

class Aloha extends React.Component {
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
        const {name , lastNAme} = this.props;
        const greetingText = isGreeting ? 'hello' : 'bye';

        return <h1 onClick={() => this.clickHandler()}> greetingText {this.props.name} {this.props.lastName}</h1>
    }
}

export default Aloha;