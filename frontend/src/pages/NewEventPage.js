import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router'

const NewEventPage = () => {
  return (
    <div>
      <EventForm />
    </div>
  )
}

export default NewEventPage

export const action = async({request , params}) => {
const data = await request.formData();

const enteredData = {
  title : data.get('title'),
  image : data.get('image'),
  date : data.get('date'),
  description : data.get('description')
}

const response = await fetch('http://localhost:8080/events',{
  method : 'POST',
  body : JSON.stringify(enteredData),
  headers :{
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*',
     'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
  }
})
if(!response.ok) {
  throw json({messsage:'Cannot load new event'} , {status:500})
}

// redirect to events page after form submission

return redirect('/events');
}