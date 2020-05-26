import React from "react";
import NodeItemStyles from "./NodeItemStyles";
import check from "../../../assets/images/check.svg";

class NodeItem extends React.Component {
  state = {
    nodeStatus: this.props.nodeStatus,
    nodeText: this.props.nodeText,
    nodeTitle: this.props.nodeTitle,
    nodeStatusColor:
      this.props.nodeStatus === "pending"
        ? "#ccc"
        : this.props.nodeStatus === "inProgress"
        ? "dodgerblue"
        : "#189c11",
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

    this.setState({
      nodeStatus: newWorkflowState.nodeStatus,
      nodeStatusColor: newWorkflowState.nodeStatusColor,
    });
  };

  render() {
    return (
      <NodeItemStyles statusColor={this.state.nodeStatusColor}>
        <span
          className="actions__button--right"
          onClick={this.nodeItemStatusChangeHandler}
          title={this.state.nodeStatus}
        >
          <img
            src={check}
            style={{
              height: "1.8rem",
            }}
            alt="check"
          />
        </span>
        <input
          className="input"
          value={this.state.nodeTitle}
          onChange={(e) => {
            this.setState({ nodeTitle: e.target.value });
          }}
        />
        <div>
          <textarea
            className="text__container"
            value={this.state.nodeText}
            onChange={(e) => {
              this.setState({ nodeText: e.target.value });
            }}
          />
        </div>
      </NodeItemStyles>
    );
  }
}

export default NodeItem;
