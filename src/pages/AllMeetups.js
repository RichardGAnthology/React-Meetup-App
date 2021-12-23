import { useState, useEffect } from "react";

import Meetuplist from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //response is the returned object from the fetch.
    // .then is the returned promise.
    // a promise is an object with either the requested value or the reason it's not resolved
    fetch("https://react-meetup-c078d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        // json() will return promise as well
        return response.json();
      })
      .then((data) => {

        // helper array to tranform data into an array from an object
        const meetups = [];

        // for in to go through all the keys in the data object that we're fetching from firebase
        // keys (in firebase) are the unique EidsdfsI234saD texts
        for (const key in data){
          // create a new meetup for every key through which we loop
          const meetup = {
            // ID is equal key because that is the ID given to us
            // remember that we need keys because we're looking at key-value pairs 
            // and need keys to identify the location of
            id: key,
            // spread operator spreads the content inside the data object as 
            // individual arguments into every key as values. 
            // similar to dot notation for objects

            // copies all the key value pairs of the nested object(in my example) 
            // into the meetup object
           ...data[key]
          }

          // console.log(key +"HERE");
          console.log(meetup)
          meetups.push(meetup)
          // console.log(data[key])
        }
        
        console.log(meetups);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
      // [] = dependencies array
      // in the dependencies array, you should add all external values
      // the useEffect function relies on.
      // an empty dependencies array, means this effect function
      // will only run once
  }, []);

  // until data is resolved from the fetch, "...loading" will appear
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <Meetuplist meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
