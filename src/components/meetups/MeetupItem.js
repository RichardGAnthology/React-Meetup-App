// allows us to establish a connection between this component
// and the context
import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  // this gives us access to the context object inside the
  // favorites-context component
  const favoritesCtx = useContext(FavoritesContext);

  // this is the method in favorites-context
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id) 

  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    }else{
      favoritesCtx.addFavorite({
        id:props.id,
        title:props.title,
        description: props.description,
        image:props.image,
        address:props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : "Add to Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
