import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect,useState } from 'react';

function NewsletterSignup() {
  const[inputDta,setInputDta] = useState('');
  const fetcher = useFetcher();
const {data,state} = fetcher;

console.log(data,"Dta from dignup form");


useEffect(() => {
if(state === 'idle' && data && data.message) {
  window.alert(data.message);
}
setInputDta('');
},[data,state])

const inputChangeHandler = (e) => {
  setInputDta(e.target.value);
}
  return (
    <fetcher.Form
    method="POST" 
    action = '/newsletter'
    className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        value={inputDta}
        onChange={inputChangeHandler}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;


//Using fetcher.Form because Newsletter is on all pages and when we signup
// from the home page , we don't wan to go to newsletterSignup page
// Instead would want to remain on the same page.