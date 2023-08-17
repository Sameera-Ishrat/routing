// import React,{useState,useEffect} from 'react';
import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData ,json,defer,Await } from 'react-router-dom';

const EventsPage = () => {

//  const events =  useLoaderData();
// const data = useLoaderData();
// const events = data.events;

// console.log(data,"DATA")
// console.log(events,"EVENTS");
const {events} = useLoaderData();
  return(
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
    <Await resolve={events}>
 {(loadedEvents) => <EventsList events={loadedEvents} /> }
   </Await>
   </Suspense>
  )
    // <EventsList events={events} />
}

export default EventsPage

async function loadeEvents() {
  const response = await fetch('http://localhost:8080/events');

    if(!response.ok) {
    throw json({message:'Could not fetch events'} , {status:500})
//throw new Response(JSON.stringify({message:'Could not fetch events'},{status: 500}))
   
}else {
      //return response;
      const resData = await response.json();
      return resData.events;
      
    }
}

export function loader() {
  return defer({
    events : loadeEvents()
  })
}

// export async function loader() {
  
//     const response = await fetch('http://localhost:8080/events');

//     if(!response.ok) {
//     throw json({message:'Could not fetch events'} , {status:500})
// //throw new Response(JSON.stringify({message:'Could not fetch events'},{status: 500}))
   
// }else {
//       return response;
//       // const resData = await response.json();
//       // console.log(resData,"data");
//       // return resData.events;
      
//     }

// }

/************
 * Go to Events.js in backend and add a setTimeout of 2sec in get method
 */