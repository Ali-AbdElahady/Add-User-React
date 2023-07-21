import { useState } from "react";
import Card from "../Ui/Card";
import classes from './AddUser.module.css'
import Button from "./Button";

const AddUser = ({onSubmitHandler}) => {
    const initialUserInput = {
        'username': '',
        'age': 0
    }
    const [userInput, setUserInput] = useState(initialUserInput)
    console.log(userInput);
    const addUserHandler = (event) => {
        event.preventDefault()
        console.log("object");
        // onSubmitHandler(userInput)
        formReset()
    }
    const formReset = () =>{
        setUserInput(initialUserInput)
    }
    const inputChangeHandler = (input, value) => {
        setUserInput((prev) => { return { ...prev, [input]: value } })
    }
    return (
        <Card className={classes.input} >
            <form >
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={(event) => inputChangeHandler('username', event.target.value)} value={userInput.username} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" step={1} min={1} max={100} onChange={(event) => inputChangeHandler('age', event.target.value)} value={userInput.age} />
                <Button type="submit" action={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;