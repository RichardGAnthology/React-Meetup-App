import classes from "./Card.module.css";

function Card(props) {
    // the children props is a special prop that every component 
    // recieves by default. And children, always holds the content
    // which is passed between the openning and closing component tags. 
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
