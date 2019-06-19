// modules import
const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");

// db instance connection
require("./config/db");

// initialize express
const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS
app
  .route("/tasks")
  // to list all tasks
  .get(taskController.listAllTasks)
  // to create a new task
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  // to display content task 
  .get(taskController.readTask)
  // to update content task
  .put(taskController.updateTask)
  // to display task
  .delete(taskController.deleteTask);

// displaying a message when server is running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});