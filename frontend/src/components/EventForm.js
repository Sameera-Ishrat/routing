import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();

  const data = useActionData(); // useActionData is used when you want to validate the form from backend

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    // <Form method='POST' className={classes.form}>
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.data : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({ request, params }) => {
  console.log(request, "REQUEST");

  const method = request.method;

  const data = await request.formData();

  const enteredData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/"+eventId;
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(enteredData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  

  // Form validation from backend 422 is defined at backend

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ messsage: "Cannot load new event" }, { status: 500 });
  }

  // redirect to events page after form submission

  return redirect("/events");
};

// With the help of useNavigation hook ,
// we can make the button text read to submitting.

/****
 * We are using data = useActionLoader() to validate the input from the backend
 * This data is being validated inside the Form
 * Also in the NewEventPage add this inside the action for input validation
 * if(response.status === 422) {
  return response;
}
 * 
 */
