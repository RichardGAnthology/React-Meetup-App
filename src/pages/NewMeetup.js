import {useHistory} from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    // history object which exposes certain methods which allows 
    // us to manipulate the browser history. e.g. navigate away
    const history = useHistory();

  function addMeetupHandler(meetupData) {
    // requests url
    fetch(
      "https://react-meetup-c078d-default-rtdb.firebaseio.com/meetups.json",
      {
        //   default method is get, POST allows to send to database
        method: "POST",

        // requires json format
        body: JSON.stringify(meetupData),

        // provides extra source of information for each API call made
        // helps track down issues.
        headers: {
          "Content-Type": "application/json",
        },
      }
    //   after promise is returned/completed .then is activated
    ).then(() =>{
        // replaces current page with home page, i.e. "/"
        history.replace('/');
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
