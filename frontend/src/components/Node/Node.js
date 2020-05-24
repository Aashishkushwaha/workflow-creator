import React from "react";
import Button from "../UI/Button/Button";
import NodeStyle from "./NodeStyle";

const Node = (props) => {
  console.log(props);
  return (
    <NodeStyle>
      <div className="operations__container">
        <div>
          <input
            style={{
              
            }}
          />
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
    </NodeStyle>
  );
};

export default Node;
