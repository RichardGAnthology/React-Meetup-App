import { createContext, useState } from "react";

// context is a js object
// createContext will contain a react component; i.e. why FavoritesContext has a cap F
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // this is simply to help with auto complete in vscode for later use
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},

  // pointing to addFavoriteHandler exposes all components that
  // are wrapped by this component to the function
});

// will be used to provide context to all components
// also will be responsible for updating the context values
//(will be used to manage the state of createContext)
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // using arrow function because state processing isn't normally instant (async)
    // arrow function will automatically recieve the previous state snapshot
    // and return the updated state.
    setUserFavorites((prevUserFavorites) => {
      // concat is like push but returns a new array
      // and it'll have the new state snapshot
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      // filter returns a new array where we've filtered out items
      // filter takes a function as an argument which excecutes for every item in array
      // and we get that item as a parameter and then we return true if we want to keep that item
      // or false if we want to get rid of it in the new array that is returned

      // so if here we return true if meetup id is not = to meetup id returned as a parameter
      // means we drop the item where the id is equal
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    // some takes a function as an argument for every item in array
    // and will return true or false if at least one item returns true or false
    // with that function
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  // will hold latest values that will be exposed to components that it wraps
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
