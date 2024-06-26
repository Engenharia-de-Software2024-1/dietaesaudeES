export async function initializeDatabase(database){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task_type TEXT NOT NULL,
            quantity INTEGER NOT NULL
        );
    
    `)
}