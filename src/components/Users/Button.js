import classes from './Button.module.css'

const Button = (props) =>{
    const classNames = `${classes.button} ${props.className}`
    return <button className={classNames} type={props.type} onClick={props.action}>{props.children}</button>
}

export default Button;