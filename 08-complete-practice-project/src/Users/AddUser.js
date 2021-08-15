import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        props.onAddUser({id: Math.random().toString(), username: username, age: age});
        console.log(username, age);
        setAge('');
        setUsername('');
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" value={username} type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" value={age} type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;