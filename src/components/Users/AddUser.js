import { useEffect, useState } from "react";
import Card from "../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = ({ onSubmitHandler }) => {
  const initialUserInput = {
    username: "",
    age: "",
  };
  const [isValid, setIsValed] = useState(false);
  const [error, setError] = useState();
  const [userInput, setUserInput] = useState(initialUserInput);

  useEffect(() => {
    console.log(userInput.username.length, userInput.age.length);
    if (
      userInput.username.length > 5 &&
      userInput.age.length > 0 &&
      +userInput.age > 1
    ) {
      setIsValed(true);
    } else {
      setIsValed(false);
    }
  }, [userInput]);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userInput.username.length < 5) {
      setError({
        title: "Invalid username",
        message: "please enter valid username",
      });
    }
    if (userInput.age.length < 0 || +userInput.age < 5) {
      setError({
        title: "Invalid age",
        message: "please enter valid age",
      });
    }
    if (
      userInput.username.length > 5 &&
      userInput.age.length > 0 &&
      +userInput.age > 1
    ) {
      onSubmitHandler(userInput);
      formReset();
    }
  };

  const formReset = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: value };
    });
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          action={() => setError(null)}
        />
      )}

      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            value={userInput.username}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            step={1}
            min={1}
            max={100}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            value={userInput.age}
          />
          <Button type="submit" action={addUserHandler} isDisabled={!isValid}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
