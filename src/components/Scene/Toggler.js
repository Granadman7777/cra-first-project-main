import React from "react";

function Toggler(props) {
    const clickhandler = () => {
        props.changeParentState();
    }

    return 
                <>
                <button onClick={() => {clickHandler}}> 
                   {props.buttonText}
                </button>
                </>
}

export default Toggler;