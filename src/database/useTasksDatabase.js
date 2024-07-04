import { useSQLiteContext } from "expo-sqlite"

export function useTasksDatabase(){

    const database = useSQLiteContext();

    async function createMeal(data){
        const statement = await database.prepareAsync(
            "INSERT INTO meals(daytime, date) VALUES ($daytime,$date)"
        )
        try{
            const result = await statement.executeAsync({
                $daytime: data.daytime,
                $date: data.date
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return {insertedRowId}
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }
    async function createWorkout(data){
        const statement = await database.prepareAsync(
            "INSERT INTO workouts(daytime, date, workout_type) VALUES ($daytime,$date, $workout_type)"
        )
        try{
            const result = await statement.executeAsync({
                $daytime: data.daytime,
                $date: data.date,
                $workout_type: data.workout_type
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return {insertedRowId}
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }

    async function findAllWorkouts(taskMonth, taskDay){
        try{
            const query = 
            `SELECT strftime('%m', date) AS month, strftime('%d', date) AS day, COUNT(*) AS value
            FROM workouts WHERE 
            (? IS NULL OR strftime('%m', date) = ?)
            AND (? IS NULL OR strftime('%d', date) = ?)
            GROUP BY month, day;
            `
            const response = await database.getAllAsync(query,[ taskMonth,taskMonth, taskDay,taskDay])
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }

    async function findAllMeals( taskMonth, taskDay){
        try{
            const query = 
            `SELECT strftime('%m', date) AS month, strftime('%d', date) AS day, COUNT(*) AS value
            FROM meals WHERE 
            (? IS NULL OR strftime('%m', date) = ?)
            AND (? IS NULL OR strftime('%d', date) = ?)
            GROUP BY month, day;
            `
            const response = await database.getAllAsync(query,[ taskMonth,taskMonth, taskDay,taskDay])
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }

    async function findEachWorkout(taskDate){
        try{
            const query = 
            `SELECT * FROM workouts
             WHERE date = ?
            `
            const response = await database.getAllAsync(query,[taskDate])
            console.log(response)
            return response
        }catch(error){
            throw error
        }
    }
    
    async function findEachMeal(taskDate){
        try{
            const query = 
            `SELECT * FROM meals
             WHERE date = ?
            `
            const response = await database.getAllAsync(query,[taskDate])
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

    return {createMeal, createWorkout, findAllMeals, findAllWorkouts, findEachMeal, findEachWorkout, remove}
}