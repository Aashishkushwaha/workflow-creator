import React from "react";
import { NavLink } from "react-router-dom";

const withLink = (WrappedComponent) => {
  class NewComponent extends React.Component {
    render() {
      return (
        <NavLink to={{
          pathname: `/workflow/${this.props.to}`,
          state: {
            workflowItemTitle: this.props.workflowItemTitle,
            workflow_status: this.props.workflow_status
          }
        }}>
          <WrappedComponent />
        </NavLink>
      );
    }
  }

  return NewComponent;
};

export default withLink;
