import React from "react";
import ErrorPageStyles from "./ErrorPageStyles";

export default ({ location }) => {
  console.log(location);
  return (
    <ErrorPageStyles>
      <h1>
        <span>404 : </span> Page {location.pathname} does not found !!!
      </h1>
    </ErrorPageStyles>
  );
};
