import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
const EventsDetailPage = () => {
   const params =  useParams();
  return (
    <>
     <h2>Events details page</h2> 
    <p>{params.eventId}</p>
    <Link to= ".." relative='path'>Back</Link>
    </>
   
  )
}

export default EventsDetailPage