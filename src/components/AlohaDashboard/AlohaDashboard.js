import React from 'react';
import Aloha from "../Aloha/Aloha";

class AlohaDashboard extends React.Component {
     constructor (props) {
        super(props);e
        this.state = {
        usersArray : [
            {
                id: 1,
                firstName: 'Tony',
                lastName: 'Stark'
            },
            {
                id: 2,
                firstName: 'bruce',
                lastName: 'Branner'
            },
            {
                id: 3,
                firstName: 'Thonr',
                lastName: 'Odinson'
            },
            {
                id: 4,
                firstName: 'Peter',
                lastName: 'Parker'
            },
            {
                id: 5,
                firstName: 'Natasha',
                lastName: 'Romanof'
            }
        ]
     }
    }
    userToAloha() {
        const {usersArray} = this.state; 
        return usersArray.map((user) => <Aloha key={user.id} name={user.firstName}lastName={user.lastName}/>)
    }

    sortUsers() {
        const {usersArray} = this.state; 
        const newArray = [...usersArray];
        
        newArray.sort((a, b) => {
            if(a.firstName > b.firstName) {
                return 1;
            } else {
                return -1
            }
        });
        
        this.setState({
            usersArray: newArray
        })
    }

    render() {
        return  (
            <React.Fragment>
                <button onClick={() => {this.sortUsers}}> sort </button>
               {this.userToAloha}
           </React.Fragment>
        );
    }
}

export default AlohaDashboard;