import { NavLink } from 'react-router-dom';

//import classes from './MainNavigation.module.css';
import NewsletterSignup from '../components/NewsLetterSignup';

function MainNavigation() {
  return (
    <header className='header'>
      <nav>
        <ul className='list'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;