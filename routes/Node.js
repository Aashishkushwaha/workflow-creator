const Router = require("express").Router();
const Node = require("../models/Node");
const Workflow = require("../models/Workflow");
const isAuthorized = require("../middleware/Auth");

/**
 * @path /api/node/create
 * @access Private
 * @method POST
 */
Router.get("/read/:workflowId", isAuthorized, async (req, res) => {
  try {
    const { workflowId } = req.params;

    const result = await Node.find({ workflowId });

    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @path /api/node/create
 * @access Private
 * @method POST
 */
Router.post("/create", isAuthorized, async (req, res) => {
  try {
    const { workflowId } = req.body;

    let newNode = new Node({
      title: "New Note",
      workflowId,
    });

    let resData = await newNode.save();

    return res.status(201).json({
      message: "Note successfully created. 😊",
      data: resData,
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @Path /api/node/delete
 * @access Private
 * @method Delete
 *
 */
Router.delete("/delete", isAuthorized, async (req, res) => {
  try {
    let { nodeId } = req.body;

    const result = await Node.deleteOne({ _id: nodeId });

    return res.status(200).json({
      message: "Note succesfully deleted. 😊",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @path api/node/update
 * @access Private
 * @method POST
 */
Router.put("/update", isAuthorized, async (req, res) => {

  const { workflowId, workflowItemTitle, nodeItems, workflowStatus } = req.body;
  const nodeIds = nodeItems.map((nodeItem) => nodeItem._id);

  nodeIds.map(async (nodeId, index) => {
    await Node.update({ _id: nodeId }, nodeItems[index]);
  });

  let result = await Workflow.updateOne(
    { _id: workflowId },
    { $set: { name: workflowItemTitle, workflow_status: workflowStatus } }
  );

  if (result)
    return res.status(200).json({ message: "Saved Successfully. 😊" });
});

module.exports = Router;
