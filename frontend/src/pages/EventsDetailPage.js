import React, { Suspense } from 'react'
// import { useParams } from 'react-router'
// import { Link } from 'react-router-dom';

import EventItem from "../components/EventItem";
import { json, redirect, useLoaderData, useRouteLoaderData ,defer, Await} from 'react-router';
import EventsList from '../components/EventsList';


const EventsDetailPage = () => {
  
//   const data = useLoaderData();
// console.log(data.event);

// const data = useRouteLoaderData('event-details')
const {event , events} = useRouteLoaderData('event-details')
  return (
    <>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
      <Await resolve={event}>
{(loadedEvent) => <EventItem  event = {loadedEvent}/>}
    </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
<Await resolve={events}>
    {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
   {/* <EventItem  event = {data.event}/>// event is coming from the backend */}  
    </Suspense>
    </>
    
  )
  
}

export default EventsDetailPage

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

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if(!response.ok) {
    throw json({message:'Cannot load Event Details'},{status:500})
  }else {
    //return response;
    const resData = await response.json();
    return resData.event;

  }
}

export const loader = async({request,params}) => {
  const id = params.eventId;
 return defer({
  event : await loadEvent(id),
  events : loadeEvents()
 })
  }

// export const loader = async({request,params}) => {
// const id = params.eventId;
// const response = await fetch(`http://localhost:8080/events/${id}`);
// if(!response.ok) {
//   throw json({message:'Cannot load Event Details'},{status:500})
// }else {
//   return response;
// }
// }

/*************** Action method **************** */

export const action = async({request,params}) => {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`,{
    method:request.method
  });
  if(!response.ok) {
throw json({message:'Cannot delete the event'},{status:500})
  }
    return redirect('/events')
  
}