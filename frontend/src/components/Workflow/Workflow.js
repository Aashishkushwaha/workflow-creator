import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";
import WorkflowItem from "./WorkflowItem/WorkflowItem";
import WorkflowStyles from "./WorkflowStyles";
import AuthContext from "../../context/AuthContext";

const Workflow = (props) => {
  const [workflowItems, setWorkflowItems] = useState([]);
  const AuthContextValue = useContext(AuthContext);

  useEffect(() => {
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

      if(result.message) {
        setWorkflowItems(result.workflows);
      }
    };

    fetchWorkflows();
  }, []);

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

  return (
    <WorkflowStyles>
      <div className="operations__container">
        <div>
          <SearchBar />
          <Filter />
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
          <WorkflowItem key={workflow_item._id} to={workflow_item._id} />
        ))}
        {/* <WorkflowItem to="11" />
        <WorkflowItem to="12" />
        <WorkflowItem to="13" />
        <WorkflowItem to="14" />
        <WorkflowItem to="15" />
        <WorkflowItem to="16" />
        <WorkflowItem to="17" />
        <WorkflowItem to="18" />
        <WorkflowItem to="19" />
        <WorkflowItem to="20" />
        <WorkflowItem to="21" />
        <WorkflowItem to="22" />
        <WorkflowItem to="23" />
        <WorkflowItem to="24" />
        <WorkflowItem to="25" /> */}
      </div>
    </WorkflowStyles>
  );
};

export default Workflow;
