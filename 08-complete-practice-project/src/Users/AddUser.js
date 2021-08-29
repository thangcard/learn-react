import React, {useRef, useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value, ageInputRef.current.value);

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }
        props.onAddUser({id: Math.random().toString(), username: username, age: age});
        console.log(username, age);
        setAge('');
        setUsername('');
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModel
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={username} type="text"
                           onChange={usernameChangeHandler}
                           ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={age} type="number" onChange={ageChangeHandler}
                           ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;