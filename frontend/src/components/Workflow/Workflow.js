import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";
import WorkflowItem from './WorkflowItem/WorkflowItem';
import WorkflowStyles from './WorkflowStyles';

const Workflow = (props) => {
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
          >
            + create workflow
          </Button>
        </div>
      </div>
      <div className="workflow__container">
        <WorkflowItem to="11"/>
        <WorkflowItem to="12"/>
        <WorkflowItem to="13"/>
        <WorkflowItem to="14"/>
        <WorkflowItem to="15"/>
        <WorkflowItem to="16"/>
        <WorkflowItem to="17"/>
        <WorkflowItem to="18"/>
        <WorkflowItem to="19"/>
        <WorkflowItem to="20"/>
        <WorkflowItem to="21"/>
        <WorkflowItem to="22"/>
        <WorkflowItem to="23"/>
        <WorkflowItem to="24"/>
        <WorkflowItem to="25"/>
      </div>
    </WorkflowStyles>
  );
};

export default Workflow;
