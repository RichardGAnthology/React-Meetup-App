// import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* RESUABLE TODO MODAL */}
      {/* <h1>My Todos</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Explore the full React course"/> */}

      {/* ROUTING */}
     
      <Switch> 
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>

      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>

      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
