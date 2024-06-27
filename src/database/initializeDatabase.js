export async function initializeDatabase(database){
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task_type TEXT NOT NULL,
        task_date TEXT NOT NULL
    );
    `)
    /*  CRIAR TAREFAS PARA MOSTRAR NO GRAFICO
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-26');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-26');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-26');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-27');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-27');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-27');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-28');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-28');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-28');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-06-29');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-29');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-06-30');
    */

}