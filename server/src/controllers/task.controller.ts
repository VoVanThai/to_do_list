import { TaskRespository } from "../respositories/task.respository"
import { Request, Response } from "express"

export class TaskController {
    static async getAllTask(req: Request, res: Response) {
        const tasks = await TaskRespository.getAll()
        res.json({ tasks })
    }

    static async addNewTask(req: Request, res: Response) {
        const name = req.body.name
        const newTask = await TaskRespository.add(name)
        if (!name) {
            res.json({ msg: "Chưa nhập thông tin " })
        }
    }

    static async editTask(req: Request, res: Response) {
        const id: number = parseInt(req.body.id)
        const name: string = req.body.name
        const complete: boolean = req.body.complete
        const editedTask = await TaskRespository.edit(id, name, complete)
        res.json({ msg: "Đã chỉnh sửa" })
    }

    static async deleteTask(req: Request, res: Response) {
        const id: number = parseInt(req.params.id)
        await TaskRespository.delete(id)
        res.json({ msg: "Xóa thành công" })
    }

    static async completeTask(req: Request, res: Response) {
        const id: number = parseInt(req.params.id)
        const task = await TaskRespository.complete(id)
        res.json({ msg: "Đã hoàn thành" })
    }
}