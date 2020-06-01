import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";
import WorkflowItem from "./WorkflowItem/WorkflowItem";
import WorkflowStyles from "./WorkflowStyles";
import AuthContext from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";

const Workflow = (props) => {
  const [workflowItems, setWorkflowItems] = useState([]);
  // const [itemsToBeShown, setItemsToBeShown] = useState([]);
  // const [filter, setFilter] = useState("all");
  const AuthContextValue = useContext(AuthContext);
  const {
    setShowModal,
    setModalContent,
    setConfirmModalContent,
    setShowConfirmModal,
    setOnConfirmHandler,
  } = useContext(ModalContext);

  const fetchWorkflows = async () => {
    let res = await fetch(`http://localhost:4500/api/workflow/read`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AuthContextValue.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: AuthContextValue.userId }),
    });

    let result = await res.json();

    if (result.message) {
      setWorkflowItems(result.workflows);
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const workflowDeleteHandler = async (id) => {
    let workflowItem = workflowItems.filter(
      (workflowItem) => id === workflowItem._id
    );

    if (workflowItem[0].workflow_status !== "completed") {
      setShowModal(true);
      setModalContent("Only completed workflow can be deleted. 😮");
    } else {
      setConfirmModalContent("Do you really want to delete the workflow ?");
      setShowConfirmModal(true);
      setOnConfirmHandler(() => async () => {
        const requestBody = {
          workflowId: id,
        };

        await fetch("http://localhost:4500/api/workflow/delete", {
          method: "Delete",
          headers: {
            Authorization: `Bearer ${AuthContextValue.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        let newWorkflowItems = [...workflowItems];
        newWorkflowItems = newWorkflowItems.filter(
          (workflowItem) => id !== workflowItem._id
        );

        setWorkflowItems(newWorkflowItems);

        setShowModal(true);
        setModalContent("Workflow deleted successfully. 😮");
      });
    }
  };

  const workflowCreateHandler = async () => {
    let res = await fetch(`http://localhost:4500/api/workflow/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AuthContextValue.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: AuthContextValue.userId }),
    });

    let result = await res.json();

    if (result.message) {
      let newWorkflowItems = [...workflowItems];
      newWorkflowItems.push(result.workflow);
      setWorkflowItems(newWorkflowItems);
    }
  };

  const onFilterItemClickHandler = (event, filter) => {
    alert(filter);
  };

  return (
    <WorkflowStyles>
      <div className="operations__container">
        <div>
          <SearchBar />
          <Filter onFilterItemClickHandler={onFilterItemClickHandler} />
        </div>
        <div className="controllers">
          <Button
            bgColor="dodgerblue"
            solid
            color="white"
            border="2px solid red"
            onClick={workflowCreateHandler}
          >
            + create workflow
          </Button>
        </div>
      </div>
      <div className="workflow__container">
        {workflowItems.map((workflow_item) => (
          <WorkflowItem
            key={workflow_item._id}
            id={workflow_item._id}
            workflowItemTitle={workflow_item.name}
            workflowItemStatus={workflow_item.workflow_status}
            workflowItemDeleteHandler={workflowDeleteHandler}
          />
        ))}
      </div>
    </WorkflowStyles>
  );
};

export default Workflow;
