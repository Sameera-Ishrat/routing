import React from 'react'
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from 'react-router';



const EditEventPage = () => {

  const data = useRouteLoaderData('event-details');
  return (
    <div>
      <EventForm event = {data.event} />
    </div>
  )
  // event is coming from the backend...
}

export default EditEventPage