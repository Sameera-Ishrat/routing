import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const Error = () => {

  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong!";

  if(error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }
  if(error.status === 404) {
    title = "Page not found"
    message="Could not find resourse or page"
  }
  return (
    <>
    {/* <div className="content">
    <h1>An Error Occurred</h1>
      <p>The page you requested is not found</p>
    </div> */}
     <PageContent title={title} >
      <p>{message}</p>
      <Link to="/">Go back Home</Link>
      </PageContent>
      
    </>
  );
};

export default Error;
