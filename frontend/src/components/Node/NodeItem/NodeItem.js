import React from "react";
import NodeItemStyles from "./NodeItemStyles";

class NodeItem extends React.Component {
  state = {
    workflowStatus: "pending",
    workflowStatusColor: "#ccc",
  };

  nodeItemStatusChangeHandler = (e) => {
    const newWorkflowState = { ...this.state };
    newWorkflowState.workflowStatus =
      newWorkflowState.workflowStatus === "pending"
        ? "inProgress"
        : newWorkflowState.workflowStatus === "inProgress"
        ? "completed"
        : "pending";

    newWorkflowState.workflowStatusColor =
      newWorkflowState.workflowStatus === "pending"
        ? "#ccc"
        : newWorkflowState.workflowStatus === "inProgress"
        ? "dodgerblue"
        : "#189c11";

    this.setState(newWorkflowState);
  };

  render() {
    return (
      <NodeItemStyles statusColor={this.state.workflowStatusColor}>
        <span
          className="actions__button"
          onClick={this.nodeItemStatusChangeHandler}
        />
        <span className="input">Workflow</span>
        <div>
          <span>status</span>
          <span>logo</span>
        </div>
      </NodeItemStyles>
    );
  }
}

export default NodeItem;
