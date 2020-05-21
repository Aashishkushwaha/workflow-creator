const Router = require("express").Router();
const Workflow = require("../models/Workflow");
const isAuthorized = require("../middleware/Auth");
const keys = require("../config/keys");

/**
 * @path /api/workflow/create
 * @access Public
 * @method POST
 */
Router.post("/create", isAuthorized, async (req, res) => {
  try {
    const { userId, isAuth } = req;
    
    if(! isAuth)
      return res.status(403).send("Not authorized");
  
    let newWorkflow = new Workflow({
      name: "new Workflow",
      creator: userId
    });

    let createdWorkflow = await newWorkflow.save();

    return res.status(401).json({
      message: "Workflow created successfully",
      workflow: createdWorkflow
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @path /api/users/login
 * @access Public
 * @method POST
 */

module.exports = Router;
