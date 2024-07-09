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
    async function createGoal(data){
        const statement = await database.prepareAsync(
            "INSERT INTO goals(day, value, goal_type) VALUES ($day,$value,$goal_type)"
        )
        try{
            const result = await statement.executeAsync({
                $day: data.day,
                $value: data.value,
                $goal_type: data.goal_type
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return {insertedRowId}
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }

    async function findAllWorkouts(dayStart, dayEnd, monthStart, monthEnd, yearStart, yearEnd) {
        try {
            const query = `
                SELECT strftime('%m', date) AS month, strftime('%d', date) AS day, strftime('%Y', date) AS year, COUNT(*) AS value
                FROM workouts
                WHERE 
                    (? IS NULL OR strftime('%d', date) BETWEEN ? AND ?)
                    AND (? IS NULL OR strftime('%m', date) BETWEEN ? AND ?)
                    AND (? IS NULL OR strftime('%Y', date) BETWEEN ? AND ?)
                GROUP BY month, day, year;
            `;
            const response = await database.getAllAsync(query, [
                dayStart, dayStart, dayEnd,
                monthStart, monthStart, monthEnd,
                yearStart, yearStart, yearEnd
            ]);
            return response;
        } catch (error) {
            throw error;
        }
    }
    

    async function findAllMeals(dayStart, dayEnd, monthStart, monthEnd, yearStart, yearEnd) {
        try {
            const query = `
                SELECT strftime('%m', date) AS month, strftime('%d', date) AS day, strftime('%Y', date) AS year, COUNT(*) AS value
                FROM meals
                WHERE 
                    (? IS NULL OR strftime('%d', date) >= ?)
                    AND (? IS NULL OR strftime('%d', date) <= ?)
                    AND (? IS NULL OR strftime('%m', date) >= ?)
                    AND (? IS NULL OR strftime('%m', date) <= ?)
                    AND (? IS NULL OR strftime('%Y', date) >= ?)
                    AND (? IS NULL OR strftime('%Y', date) <= ?)
                GROUP BY month, day, year;
            `;
            const response = await database.getAllAsync(query, [
                dayStart, dayStart,
                dayEnd, dayEnd,
                monthStart, monthStart,
                monthEnd, monthEnd,
                yearStart, yearStart,
                yearEnd, yearEnd
            ]);
            return response;
        } catch (error) {
            throw error;
        }
    }
    
    

    async function findEachWorkout(taskDate){
        try{
            const query = 
            `SELECT * FROM workouts
             WHERE date = ?
            `
            const response = await database.getAllAsync(query,[taskDate])
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
            return response
        }catch(error){
            throw error
        }
    }
    async function findGoals(goalType){
        try{
            const query = 
            `SELECT day, value, goal_type FROM goals
             WHERE goal_type = ?`
            const response = await database.getAllAsync(query, [goalType])
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

    return {createMeal, createWorkout, findAllMeals, findAllWorkouts, findEachMeal, findEachWorkout, remove, createGoal, findGoals}
}