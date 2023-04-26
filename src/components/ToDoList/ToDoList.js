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

    removeTask(taskIDtoRemove) {
        const {todolist} = this.state;
        const filteredArray = todolist.filter(task => task.id !== taskIDtoRemove);
        this.setState({
            todolist: filteredArray
        })
    }

    renderLi() {
        const {todolist} = this.state;
        return todolist.map((task) => <li key={task.id}>
            {task.text}
            <button onClick={() => {this.removeTask(task.id)}}> DEL </button>
            </li>)
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