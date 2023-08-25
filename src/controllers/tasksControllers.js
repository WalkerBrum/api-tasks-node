const { v4: uuidv4 } = require('uuid');

const Database = require('../database');
const options = require('../utils/format-date');

const database = new Database()
const randomUUID = uuidv4()

const getTasks = (req, res) => {
  const tasks = database.select('tasks')

  if (tasks.length == 0) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'None tasks to find.'
    }))
  }
  
  return res.writeHead(201).end(JSON.stringify(tasks))
}

const createTask = (req, res) => {
  const { title, description } = req.body

  const tasks = database.select('tasks')

  if (!title) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Task should have title.'
    }))
  }

  if (!description) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Task should have description.'
    }))
  }

  if (tasks) {
    const isTaksExist = tasks.find(task => task.title.toLowerCase() === title.toLowerCase())

    if (isTaksExist) {
      return res.writeHead(409).end(JSON.stringify({
        message: 'Task already exists.'
      }))
    }
  }

  const task = {
    id: randomUUID,
    title,
    description,
    completed_at: null,
    created_at: new Intl.DateTimeFormat('pt-BR', options).format(new Date()),
    updated_at: null,
  }

  database.insert('tasks', task)

  return res.writeHead(201).end(JSON.stringify({
    message: `Task ${task.title} was insert with successfully.`
  }))
}

const updateTaskById = (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  const tasks = database.select('tasks')

  if (!title) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Task should have title.'
    }))
  }

  if (!description) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Task should have description.'
    }))
  }

  if (!tasks.length > 0) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'None tasks to find.'
    }))
  }

  if (!id) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Register Id not found.'
    }))
  }

  database.update('tasks', id, {
    title, 
    description, 
  })

  return res.writeHead(204).end()
}

const deleteTaskById = (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Register Id not found.'
    }))
  }

  database.delete('tasks', id)

  return res.writeHead(204).end()
}

const completeTaskById = (req, res) => {
  const { id } = req.params

  const tasks = database.select('tasks')
  const findTask = tasks.find(row => row.id === id)

  if (!id) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'Register Id not found.'
    }))
  }

  console.log(findTask)

  if (findTask.completed_at) {
    return res.writeHead(404).end(JSON.stringify({
      message: 'The task has already been completed.'
    }))
  }

  database.completeTask('tasks', id)

  return res.writeHead(204).end()
}

module.exports = {
  getTasks,
  createTask,
  updateTaskById,
  deleteTaskById,
  completeTaskById,
}