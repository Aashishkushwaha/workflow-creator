import React from "react";
import WorkflowItemStyles from "./WorkflowItemStyles";
import withLink from "../../hoc/withLink";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";
import AuthContext from "../../../context/AuthContext";
import { withRouter } from "react-router-dom";

const EditWorkFlowItem = (props) => {
  return (
    <span title="delete" className="actions__button--left">
      <img style={{ height: "1rem" }} src={edit} alt="edit" />
    </span>
  );
};

const EditWorkFlowItemWithLink = withLink(EditWorkFlowItem);

class WorkflowItem extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    return {
      workflowItemStatus: props.workflowItemStatus,
      workflowItemTitle: props.workflowItemTitle,
    };
  }

  static contextType = AuthContext;

  render() {
    return (
      <WorkflowItemStyles
        statusColor={
          this.props.workflowItemStatus === "completed" ? "#189c11" : "#ccc"
        }
      >
        <EditWorkFlowItemWithLink
          to={this.props.id}
          className="actions__button--left"
          workflowItemTitle={this.state.workflowItemTitle}
          workflow_status={this.props.workflowItemStatus}
        />
        <span
          title="delete"
          className="actions__button--right"
          onClick={() => this.props.workflowItemDeleteHandler(this.props.id)}
        >
          <img style={{ height: "1rem" }} src={trash} alt="delete" />
        </span>
        <span className="input">{this.state.workflowItemTitle}</span>
        <div>
          <span>{this.state.workflowItemStatus}</span>
          <span></span>
        </div>
      </WorkflowItemStyles>
    );
  }
}

export default withRouter(WorkflowItem);
