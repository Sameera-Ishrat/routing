import React from 'react'
// import { useParams } from 'react-router'
// import { Link } from 'react-router-dom';

import EventItem from "../components/EventItem";
import { json, useLoaderData, useRouteLoaderData } from 'react-router';


const EventsDetailPage = () => {
  
//   const data = useLoaderData();
// console.log(data.event);

const data = useRouteLoaderData('event-details')
  return (
  <EventItem  event = {data.event}/>
  )
  // event is coming from yhr backend
}

export default EventsDetailPage

export const loader = async({request,params}) => {
const id = params.eventId;
const response = await fetch(`http://localhost:8080/events/${id}`);
if(!response.ok) {
  throw json({message:'Cannot load Event Details'},{status:500})
}else {
  return response;
}
}