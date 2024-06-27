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

    async function findAllTasks(taskType){
        try{
            const query = 
            `SELECT strftime('%m-%d', task_date) AS label, COUNT(*) AS value
             FROM tasks
             WHERE task_type = ?
             GROUP BY task_date;
            `
            const response = await database.getAllAsync(query,`${taskType}`)
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }

    return {create, findAllTasks}
}