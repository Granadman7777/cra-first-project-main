import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

       
            const todolist = [
                {
                    id: 1,
                    text: 'go to party'
                },
                {
                    id: 2,
                    text: 'meet friends'
                },
                {
                    id: 3,
                    text: 'walk'
                }
            ]
            this.state = {
                todolist
            };
    }

    renderLi() {
        const {todolist} = this.state;
        return todolist.map((task) => <li key={task.id}>{task.text}</li>)
    };

    render() {
        return ( 
            <ul>
                {this.renderli()}
            </ul>
        )
    }
}


export default ToDoList;