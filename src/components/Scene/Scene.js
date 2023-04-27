import React from "react";
import Toggler from './Toggler';
import "./style.css"

class Scene extends React.Component {
    textStr = 'Text grome scene'
    constructor(props) {
        super(props);
        this.state = {
            light: true
        }
    }
    
   togglerScene() {
    this.setState({
        light: !this.state.light
    })

   }

    render() {
        const {light} = this.state;
        return (
            <div className={light ? "scene-on" : "scene-off"}>
                <Toggler 
                changeParentState={() => {this.togglerScene()}}
                buttonText={light ? 'on' : 'off'}
                />
            </div>
        )
    }
}

export default Scene;