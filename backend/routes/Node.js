const Router = require("express").Router();
const Node = require("../models/Node");
const isAuthorized = require("../middleware/Auth");

/**
 * @path /api/node/create
 * @access Public
 * @method POST
 */
Router.get("/read/:workflowId", isAuthorized, async (req, res) => {
  try {
    const { workflowId } = req.params;

    const result = await Node.find({workflowId});

    return res.status(200).json({
      data: result
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @path /api/node/create
 * @access Public
 * @method POST
 */
Router.post("/create", isAuthorized, async (req, res) => {
  try {
    const { workflowId } = req.body;

    let newNode = new Node({
      title: "New Node",
      workflowId,
    });

    let resData = await newNode.save();

    res.status(201).json({
      message: "Note Successfully Created. 😊",
      data: resData,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
