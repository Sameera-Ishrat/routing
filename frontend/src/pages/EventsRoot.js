import React from 'react'
import { Outlet } from 'react-router'
import EventsNavigation from './EventsNavigation'

const EventsRoot = () => {
  return (
    <>
    <EventsNavigation />
    <main>
        <Outlet/>
    </main>
    </>
    
  )
}

export default EventsRoot