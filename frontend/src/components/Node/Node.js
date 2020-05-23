import React from "react";
import Button from "../UI/Button/Button";

const Node = (props) => {
  return (
    <div>
      <div className="operations__container">
        <div>
          <input
            style={{
              padding: ".5rem",
              width: "100%",
              border: "none",
              borderBottom: "1px solid black",
              borderRadius: "3px",
              fontSize: "1.2rem"
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
    </div>
  );
};

export default Node;
