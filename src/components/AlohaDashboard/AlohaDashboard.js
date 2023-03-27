import React from 'react';
import Aloha from "../Aloha/Aloha";

class AlohaDashboard extends React.Component {
     constructor (props) {
        super(props);e
        this.state = {
        usersArray : [
            {
                firstName: 'Tony',
                lastName: 'Stark'
            },
            {
                firstName: 'bruce',
                lastName: 'Branner'
            },
            {
                firstName: 'Thonr',
                lastName: 'Odinson'
            },
            {
                firstName: 'Peter',
                lastName: 'Parker'
            },
            {
                firstName: 'Natasha',
                lastName: 'Romanof'
            }
        ]
     }
    }
    userToAloha() {
        const {usersArray} = this.state; 
        return usersArray.map((user) => <Aloha name={user.firstName}lastName={user.lastName}/>)
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