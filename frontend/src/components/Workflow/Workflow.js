import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";

const Workflow = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Workflow;
