// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage,{loader as eventsLoader} from "./pages/EventsPage";
import EventsDetailPage , {loader as eventsDetailsLoader} from "./pages/EventsDetailPage";
import NewEventPage , {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import EventsRoot from "./pages/EventsRoot";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


const router = createBrowserRouter([
  {path : '/' ,
   element : <Root />,
   errorElement : <Error />,
   children : [
    {index : true , element : <Home />},

  //   {path : 'events' , element : <EventsRoot />,  
  //   children : [
  //     {index:true , element : <EventsPage />,loader : eventsLoader ,},
  //     {path:':eventId' , element : <EventsDetailPage />,loader : eventsDetailsLoader},
  //     {path:'new-event' , element : <NewEventPage />},
  //     {path:':eventId/edit' , element : <EditEventPage />},
  //   ]
  // }
  {path : 'events' , element : <EventsRoot />,
  children : [
    {index:true , element : <EventsPage />,loader : eventsLoader ,},
{path : ':eventId',
loader : eventsDetailsLoader,
id:'event-details',
children : [
  {index:true , element : <EventsDetailPage />},
  {path:'edit' , element : <EditEventPage />},
  
]
},
{path:'new-event' , element : <NewEventPage /> , action:newEventAction}, 
  ]
}
   ]
  },
 
  
])
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/*****
 * Since both EventsDetailsPage and EditEventPage share same props and we 
 * have to load similar data in both, we have to create a separate but same
 * loader function for EditEventPage. In order to avoid that, we
 * can create a nested layout as a
 * loader : eventsDetailsLoader,
 * id:'event-id',
children : [
  {path:':eventId' , element : <EventsDetailPage />},
  {path:':eventId/edit' , element : <EditEventPage />},
]
Above the loader is shared in chidren components like EventsDetailsPage and 
EditEventPage

*** We have to use useRouteLoaderData('event-id') instead of useLoaderData
 */