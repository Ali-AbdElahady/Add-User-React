import Card from '../Ui/Card'
import classes from './UserList.module.css'

const UserList = ({users}) =>{

    return (
      <Card className={classes.users}>
        <ul>
          {users &&
            users.map((user, index) => (
              <li key={index}>
                {user.username} age({user.age})
              </li>
            ))}
        </ul>
      </Card>
    );
}

export default UserList