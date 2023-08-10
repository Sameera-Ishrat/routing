// import React,{useState,useEffect} from 'react';
import EventsList from "../components/EventsList";
import { useLoaderData ,json } from 'react-router-dom';

const EventsPage = () => {

//  const events =  useLoaderData();
const data = useLoaderData();
const events = data.events;

  return (
    <>
    <EventsList events={events} />
    </>
   
   
  )
}

export default EventsPage

export async function loader() {
  
    const response = await fetch('http://localhost:8080/events');

    if(!response.ok) {
    throw json({message:'Could not fetch events'} , {status:500})
//throw new Response(JSON.stringify({message:'Could not fetch events'},{status: 500}))
   
}else {
      return response;
      // const resData = await response.json();
      // console.log(resData,"data");
      // return resData.events;
      
    }

}