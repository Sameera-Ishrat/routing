import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to="events">List of Events</Link>
    </>
  )
}

export default Home