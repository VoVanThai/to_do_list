import express from "express"
import { pool } from "../datasources/db.datasources"
// const { Pool } = require('pg')
// require('dotenv').config();

// const pool = new Pool({connectionString: process.env.DATABASE_URL})

export class TaskRespository {
    static async getAll() {
        const tasks = await pool.query('select id, name, complete from tasks')
        return tasks.rows
    }

    static async add(name: string) {
        const newTask = await pool.query('insert into tasks (name, complete) values ($1, $2) ', [name, false])
        return newTask
    }

    static async delete(id: number) {
        const deletedTask = await pool.query('delete from tasks where id = $1', [id])
        return deletedTask
    }

    static async edit(id: number, name: string, complete: boolean) {
        const editedTask = await pool.query('update tasks set name = $1, complete = $2 where id = $3', [name, complete, id])
        return editedTask.rows
    }

    static async complete(id: number) {
        const task = await pool.query(`select complete from tasks where id = $1`, [id])
        const currentStatus = task.rows[0].complete
        const newStatus = !currentStatus
        const completedTask = await pool.query(`update tasks set complete = $1 where id = $2`, [newStatus, id])
        return completedTask
    }

}