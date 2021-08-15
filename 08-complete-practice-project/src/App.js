import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (user) => {
        setUsersList((prevState => {
            return [...prevState, user]
        }));
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
