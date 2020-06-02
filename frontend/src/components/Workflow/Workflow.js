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
  const [workflowItemsToBeShown, setWorkflowItemsToBeShown] = useState([]);
  const [filter, setFilter] = useState(
    localStorage.getItem("workflow_filter") || "all"
  );
  const [searchTerm, setSearchTearm] = useState("");
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
      if (filter === "all") {
        setWorkflowItemsToBeShown(result.workflows);
      } else {
        let newWorkflowItems = result.workflows.filter(
          (workflowItem) => workflowItem.workflow_status === filter
        );
        setWorkflowItemsToBeShown(newWorkflowItems);
      }
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const workflowDeleteHandler = async (id) => {
    let workflowItem = workflowItems.filter(
      (workflowItem) => id === workflowItem._id
    );

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
      if (filter !== "all") {
        let filteredWorkflowItems = newWorkflowItems.filter(
          (workflow) => workflow.workflow_status === filter
        );
        setWorkflowItemsToBeShown(filteredWorkflowItems);
      } else {
        setWorkflowItemsToBeShown(newWorkflowItems);
      }

      setShowModal(true);
      setModalContent("Workflow deleted successfully. 😮");
    });
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
      if (filter === "all") setWorkflowItemsToBeShown(newWorkflowItems);
    }
  };

  const onFilterItemClickHandler = (event, filter) => {
    localStorage.setItem("workflow_filter", filter);
    setFilter(filter);

    if (filter === "all") {
      setWorkflowItemsToBeShown(workflowItems);
    } else {
      let newWorkflowItems = workflowItems.filter(
        (workflowItem) => workflowItem.workflow_status === filter
      );
      setWorkflowItemsToBeShown(newWorkflowItems);
    }
  };

  // const workflowItmeNameChangeHandler = (event, index) => {
  //   let updatedWorkflowItems = [...workflowItemsToBeShown];
  //   updatedWorkflowItems[index].name = event.target.value;
  //   setWorkflowItems(updatedWorkflowItems);
  // };

  return (
    <WorkflowStyles>
      <div className="operations__container">
        <div>
          <SearchBar />
          <Filter
            onFilterItemClickHandler={onFilterItemClickHandler}
            currentFilter={filter}
          />
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
        {workflowItemsToBeShown.map((workflow_item, index) => (
          <WorkflowItem
            key={workflow_item._id}
            id={workflow_item._id}
            index={index}
            workflowItemTitle={workflow_item.name}
            workflowItemStatus={workflow_item.workflow_status}
            workflowItemDeleteHandler={workflowDeleteHandler}
            // workflowItmeNameChangeHandler={workflowItmeNameChangeHandler}
          />
        ))}
      </div>
    </WorkflowStyles>
  );
};

export default Workflow;
