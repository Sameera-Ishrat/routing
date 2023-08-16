import classes from './EventsList.module.css';
import { Link } from 'react-router-dom';
function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <Link to ={`${event.id}`} 
          key={event.id} className={classes.item}>
            <a href="..." style={{textDecoration:'none'}}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
                <p>{event.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
