import React from "react";
import Button from "../UI/Button/Button";

const Node = (props) => {
  return (
    <div>
      <div className="operations__container">
        <div>
          <h3>Search</h3>
          <h3>Filter</h3>
        </div>
        <div className="controllers">
          <Button
            bgColor="dodgerblue"
            solid
            color="white"
            border="2px solid red"
          >
            Shuffle
          </Button>
          <Button bgColor="tomato" solid color="white" border="2px solid red">
            Delete
          </Button>
          <Button bgColor="#398935" solid color="white" border="2px solid red">
           + Create
          </Button>
          <Button bgColor="blue" solid color="white" border="2px solid red">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Node;
