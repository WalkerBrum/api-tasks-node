const processCSV = require("../controllers/csvController");
const { getTasks, createTask, updateTaskById, deleteTaskById, completeTaskById } = require("../controllers/tasksControllers");
const buildRoutePath = require("../utils/build-route-path");

const routes = [
  { 
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: getTasks
  },
  { 
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: createTask
  },
  { 
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: updateTaskById
  },
  { 
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: deleteTaskById
  },
  { 
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: completeTaskById
  },
]

module.exports = routes;