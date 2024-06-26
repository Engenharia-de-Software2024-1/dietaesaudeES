import { useSQLiteContext } from "expo-sqlite"

export function useTasksDatabase(){

    const database = useSQLiteContext();

    async function create(data){
        const statement = await database.prepareAsync(
            "INSERT INTO tasks(task_type, quantity) VALUES ($task_type,$quantity)"
        )
        try{
            const result = await statement.executeAsync({
                $task_type: data.task_type,
                $quantity: data.quantity
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
            const query = "SELECT * FROM tasks WHERE task_type = ?"
            const response = await database.getAllAsync(query,`${taskType}`)

            return response
        }catch(error){
            throw error
        }
    }

    return {create, findAllTasks}
}