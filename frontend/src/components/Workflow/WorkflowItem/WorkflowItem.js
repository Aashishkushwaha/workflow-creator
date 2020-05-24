import React from "react";
import WorkflowItemStyles from "./WorkflowItemStyles";
import withLink from "../../hoc/withLink";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";

const EditWorkFlowItem = (props) => {
  return (
    <span title="delete" className="actions__button--left">
      <img style={{ height: "1rem" }} src={edit} alt="edit" />
    </span>
  );
};

const EditWorkFlowItemWithLink = withLink(EditWorkFlowItem);

class WorkflowItem extends React.Component {
  state = {
    workflowItemStatus: "Pending",
    workflowItemStatusColor: "#ccc",
  };

  workflowStatusChangeHandler = (e) => {
    const newWorkflowItemState = { ...this.state };
    newWorkflowItemState.workflowItemStatus =
      newWorkflowItemState.workflowItemStatus === "Pending"
        ? "Completed"
        : "Pending";

    newWorkflowItemState.workflowItemStatusColor =
      newWorkflowItemState.workflowItemStatus === "Pending" ? "#ccc" : "green";

    this.setState(newWorkflowItemState);
  };

  render() {
    return (
      <WorkflowItemStyles statusColor={this.state.workflowItemStatusColor}>
        <EditWorkFlowItemWithLink
          to={this.props.to}
          className="actions__button--left"
        />
        <span title="delete" className="actions__button--right">
          <img style={{ height: "1rem" }} src={trash} alt="delete" />
        </span>
        <span className="input">Workflow</span>
        <div>
          <span>{this.state.workflowItemStatus}</span>
          <span onClick={this.workflowStatusChangeHandler}></span>
        </div>
      </WorkflowItemStyles>
    );
  }
}

export default WorkflowItem;
