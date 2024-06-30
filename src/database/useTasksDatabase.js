import { useSQLiteContext } from "expo-sqlite"

export function useTasksDatabase(){

    const database = useSQLiteContext();

    async function create(data){
        const statement = await database.prepareAsync(
            "INSERT INTO tasks(task_type, task_date) VALUES ($task_type,$task_date)"
        )
        try{
            const result = await statement.executeAsync({
                $task_type: data.task_type,
                $task_date: data.task_date
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return {insertedRowId}
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }

    async function findAllTasks(taskType, taskMonth, taskDay){
        try{
            const query = 
            `SELECT strftime('%m', task_date) AS month, strftime('%d', task_date) AS day, COUNT(*) AS value
            FROM tasks
            WHERE task_type = ?
            AND (? IS NULL OR strftime('%m', task_date) = ?)
            AND (? IS NULL OR strftime('%d', task_date) = ?)
            GROUP BY month, day;
            `
            const response = await database.getAllAsync(query,[taskType, taskMonth,taskMonth, taskDay,taskDay])
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }

    async function findEachTask(taskType, taskDate){
        try{
            const query = 
            `SELECT *FROM tasks
             WHERE task_type = ?
             AND task_date = ?
            `
            const response = await database.getAllAsync(query,[taskType, taskDate])
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }

    async function remove(id){
        try {
            await database.execAsync("DELETE FROM tasks WHERE id = " + id)
        } catch (error) {
            throw error
        }
    }

    return {create, findAllTasks, findEachTask, remove}
}