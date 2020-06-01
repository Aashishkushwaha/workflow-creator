import React from "react";
import NodeItemStyles from "./NodeItemStyles";
import check from "../../../assets/images/check.svg";
import next from "../../../assets/images/next.svg";

const NodeItem = ({
  node,
  index,
  onNodeChangeHandler,
  nodeItemStatusChangeHandler,
}) => {

  const getStatusColor = () => {
    const { node_status } = node;
    return node_status === "pending"
      ? "#ccc"
      : node_status === "inProgress"
      ? "dodgerblue"
      : "#189c11";
  };

  return (
    <NodeItemStyles statusColor={getStatusColor()}>
      <span className="node__connector">
        <img
          src={next}
          style={{
            height: "1.8rem",
          }}
          alt="check"
        />
      </span>
      <span
        className="actions__button--right"
        onClick={(e) => nodeItemStatusChangeHandler(e, index)}
        title={node.nodeStatus}
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
        name="title"
        value={node.title}
        minLength="3"
        required
        placeholder="Note Title..."
        onChange={(e) => onNodeChangeHandler(e, index)}
      />
      <div>
        <textarea
          placeholder="Note Content...."
          className="text__container"
          value={node.text}
          name="text"
          onChange={(e) => onNodeChangeHandler(e, index)}
        />
      </div>
    </NodeItemStyles>
  );
};

export default NodeItem;
