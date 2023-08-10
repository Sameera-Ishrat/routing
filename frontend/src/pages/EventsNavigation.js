import React from 'react'
import { NavLink } from 'react-router-dom'

const EventsNavigation = () => {
  return (
    <nav>
        <ul className='events-list'>
            <NavLink to='new-event'
            className={({isActive}) => isActive ? "active" : "undefined"}
            >New Event</NavLink>
            <NavLink to='event'
            className={({isActive}) => isActive ? "active" : "undefined"}
            >Edit Event</NavLink>
        </ul>
    </nav>
  )
}

export default EventsNavigation