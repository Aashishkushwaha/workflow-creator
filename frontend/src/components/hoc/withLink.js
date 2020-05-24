import React from "react";
import { Link } from "react-router-dom";

const withLink = (WrappedComponent) => {
  class NewComponent extends React.Component {
    render() {
      return (
        <Link to={`/workflow/${this.props.to}`}>
          <WrappedComponent />
        </Link>
      );
    }
  }

  return NewComponent;
};

export default withLink;
