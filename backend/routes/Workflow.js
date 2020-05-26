const Router = require("express").Router();
const Workflow = require("../models/Workflow");
const isAuthorized = require("../middleware/Auth");

/**
 * @path /api/workflow/read
 * @access Public
 * @method POST
 */

Router.post("/read", isAuthorized, async (req, res) => {
  let userId = req.body.user;
  let workflows = await Workflow.find({creator: userId});

  if(workflows) {
    return res.status(200).json({
      message: "workflows",
      workflows
    });
  }
})

/**
 * @path /api/workflow/create
 * @access Public
 * @method POST
 */

Router.post("/create", isAuthorized, async (req, res) => {
  try {
    const { user: userId } = req.body;
    
    let newWorkflow = new Workflow({
      name: "New workflow",
      creator: userId
    });

    let createdWorkflow = await newWorkflow.save();

    return res.status(201).json({
      message: "Workflow created successfully. 😊",
      workflow: createdWorkflow
    });
  } catch (error) {
    console.log(error);
  }
});


/**
 * @path /api/workflow/delete
 * @access Public
 * @method POST
 */

Router.delete("/delete", isAuthorized, async (req, res) => {
  try {
    const { workflowId } = req.body;
    
    let result = await Workflow.deleteOne({_id: workflowId});

    if(res)
      return res.status(204).json({
        message: "Workflow deleted successfully. 😊",
        result
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
