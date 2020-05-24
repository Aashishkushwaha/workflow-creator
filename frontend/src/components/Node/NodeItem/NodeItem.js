import React from "react";
import NodeItemStyles from "./NodeItemStyles";
import check from '../../../assets/images/check.svg';

class NodeItem extends React.Component {
  state = {
    nodeStatus: "pending",
    nodeStatusColor: "#ccc",
  };

  nodeItemStatusChangeHandler = (e) => {
    const newWorkflowState = { ...this.state };
    newWorkflowState.nodeStatus =
      newWorkflowState.nodeStatus === "pending"
        ? "inProgress"
        : newWorkflowState.nodeStatus === "inProgress"
        ? "completed"
        : "pending";

    newWorkflowState.nodeStatusColor =
      newWorkflowState.nodeStatus === "pending"
        ? "#ccc"
        : newWorkflowState.nodeStatus === "inProgress"
        ? "dodgerblue"
        : "#189c11";

    this.setState(newWorkflowState);
  };

  render() {
    return (
      <NodeItemStyles statusColor={this.state.nodeStatusColor}>
        <span
          className="actions__button--right"
          onClick={this.nodeItemStatusChangeHandler}
        >
          <img src={check} style={{
            height: "1.8rem"
          }} alt="check"/>
        </span>
        <input className="input" />
        <div>
          <textarea className="text__container"/>
        </div>
      </NodeItemStyles>
    );
  }
}

export default NodeItem;
