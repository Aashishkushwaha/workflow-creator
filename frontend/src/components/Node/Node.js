import React, { useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button";
import NodeStyle from "./NodeStyle";
import NodeItem from "./NodeItem/NodeItem";
import shuffle from "../../assets/images/shuffle.svg";
import trash from "../../assets/images/trash.svg";
import save from "../../assets/images/save.svg";
import create from "../../assets/images/create.svg";
import { withRouter } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";

const Node = (props) => {
  const [workflowItemTitle, setWorkflowItemTitle] = useState(
    props.location.state.workflowItemTitle
  );
  const [nodeItems, setNodeItems] = useState([]);
  const { token } = useContext(AuthContext);
  const { setShowModal, setModalContent, setConfirmModalContent, setShowConfirmModal } = useContext(ModalContext);

  const fetchNodeItems = async () => {
    let result = await fetch(
      `http://localhost:4500/api/node/read/${props.match.params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resData = await result.json();

    setNodeItems(resData.data);
  };

  useEffect(() => {
    fetchNodeItems();
  }, []);

  const onNodeCreateHandler = async () => {
    let requestBody = {
      workflowId: props.match.params.id,
    };

    let result = await fetch("http://localhost:4500/api/node/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    let resData = await result.json();
    let newNodeItems = [...nodeItems];
    newNodeItems.push(resData.data);
    setNodeItems(newNodeItems);

    setModalContent(resData.message);
    setShowModal(true);
  };

  const onCancelHandler = (e) => {
    setConfirmModalContent("Do you really want to cancel ?");
    setShowConfirmModal(true);
  };

  return (
    <NodeStyle>
      <div className="operations__container">
        <div>
          <input
            value={workflowItemTitle}
            onChange={(e) => setWorkflowItemTitle(e.target.value)}
          />
        </div>
        <div className="controllers">
          <Button
            bgColor="dodgerblue"
            solid
            color="white"
            border="2px solid red"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={shuffle}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="shuffle"
              />
              Shuffle
            </div>
          </Button>
          <Button
            bgColor="tomato"
            solid
            color="white"
            border="2px solid red"
            onClick={onCancelHandler}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={trash}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="delete"
              />
              Delete
            </div>
          </Button>
          <Button
            bgColor="#398935"
            solid
            color="white"
            border="2px solid red"
            onClick={onNodeCreateHandler}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={create}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="create"
              />
              Create
            </div>
          </Button>
          <Button bgColor="blue" solid color="white" border="2px solid red">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={save}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="save"
              />
              Save
            </div>
          </Button>
        </div>
      </div>
      <div className="node__container">
        {nodeItems.map((nodeItem) => (
          <NodeItem
            key={nodeItem._id}
            nodeTitle={nodeItem.title}
            nodeText={nodeItem.text}
            nodeStatus={nodeItem.node_status}
            workflowId={nodeItem.workflowId}
          />
        ))}
        {/* <NodeItem />
        <NodeItem />
        <NodeItem />
        <NodeItem /> */}
      </div>
    </NodeStyle>
  );
};

export default withRouter(Node);
