import React from "react";
import Button from "../UI/Button/Button";
import NodeStyle from "./NodeStyle";
import NodeItem from "./NodeItem/NodeItem";
import shuffle from "../../assets/images/shuffle.svg";
import trash from "../../assets/images/trash.svg";
import save from "../../assets/images/save.svg";
import create from "../../assets/images/create.svg";

const Node = (props) => {
  console.log(props);
  return (
    <NodeStyle>
      <div className="operations__container">
        <div>
          <input style={{}} />
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
          <Button bgColor="tomato" solid color="white" border="2px solid red">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={trash}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="delete"
              />
              Delete
            </div>
          </Button>
          <Button bgColor="#398935" solid color="white" border="2px solid red">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={create}
                style={{ height: "1rem", margin: ".2rem" }}
                alt="create"
              />
              Add Node
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
        <NodeItem />
        <NodeItem />
        <NodeItem />
        <NodeItem />
      </div>
    </NodeStyle>
  );
};

export default Node;
