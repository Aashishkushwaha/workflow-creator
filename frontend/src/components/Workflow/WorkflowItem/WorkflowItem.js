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
  state = {
    workflowItemStatus: "Pending",
    workflowItemStatusColor: "#ccc",
  };

  static getDerivedStateFromProps(props, state) {
    return {
      workflowItemStatus: props.workflowItemStatus,
      workflowItemTitle: props.workflowItemTitle,
    };
  }

  static contextType = AuthContext;

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

  workflowDeleteHandler = async (id) => {
    const requestBody = {
      workflowId: id,
    };

    let res = await fetch("http://localhost:4500/api/workflow/delete", {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${this.context.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log(res);

    this.props.updateWorkflowItemsAfterDelete(id);
  };

  render() {
    return (
      <WorkflowItemStyles statusColor={this.state.workflowItemStatusColor}>
        <EditWorkFlowItemWithLink
          to={this.props.id}
          className="actions__button--left"
          workflowItemTitle={this.state.workflowItemTitle}
        />
        <span
          title="delete"
          className="actions__button--right"
          onClick={() => this.workflowDeleteHandler(this.props.id)}
        >
          <img style={{ height: "1rem" }} src={trash} alt="delete" />
        </span>
        <span className="input">{this.state.workflowItemTitle}</span>
        <div>
          <span>{this.state.workflowItemStatus}</span>
          <span onClick={this.workflowStatusChangeHandler}></span>
        </div>
      </WorkflowItemStyles>
    );
  }
}

export default withRouter(WorkflowItem);
