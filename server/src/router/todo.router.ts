import { TaskController } from "../controllers/task.controller";
import express from "express";

const taskRouter = express.Router()

taskRouter.get('/all', TaskController.getAllTask)
taskRouter.post('/', TaskController.addNewTask)
taskRouter.put('/', TaskController.editTask)
taskRouter.put('/complete/:id', TaskController.completeTask)
taskRouter.delete('/:id', TaskController.deleteTask)

export default taskRouter