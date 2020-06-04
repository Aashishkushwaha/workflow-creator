const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ""
  },
  node_status: {
    type: String,
    default: "pending"
  },
  workflowId: {
    type: Schema.Types.ObjectId,
    ref: "Workflow"
  }
})

module.exports = mongoose.model("Node", nodeSchema);