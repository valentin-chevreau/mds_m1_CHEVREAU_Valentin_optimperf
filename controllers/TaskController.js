const Task = require("../models/Task");

// what to do to list all the tasks registred
exports.listAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

// what to do to list to create a new task
exports.createNewTask = (req, res) => {
  let newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
  });
};

// what to do to display content of a specific task
exports.readTask = (req, res) => {
  Task.findById(req.params.taskid, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

// what to do to update content of a specific task
exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskid },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};

// what to do to delete a specific task
exports.deleteTask = (req, res) => {
  Task.remove({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};
