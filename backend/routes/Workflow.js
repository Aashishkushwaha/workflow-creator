const Router = require("express").Router();
const Workflow = require("../models/Workflow");
const User = require("../models/User");
const isAuthorized = require("../middleware/Auth");

/**
 * @path /api/workflow/create
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
      message: "Workflow created successfully",
      workflow: createdWorkflow
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
