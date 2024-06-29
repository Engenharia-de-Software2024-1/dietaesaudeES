export async function initializeDatabase(database){
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task_type TEXT NOT NULL,
        task_date TEXT NOT NULL
    );
    `)
    /*  CRIAR TAREFAS PARA MOSTRAR NO GRAFICO
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-01');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-01');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-02');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-02');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-03');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-03');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-04');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-04');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-05');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-05');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-06');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-06');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-07');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-07');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-08');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-08');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-09');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-09');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-10');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-10');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-11');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-11');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-12');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-12');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-13');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-13');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-14');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-14');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-15');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-15');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-16');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-16');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-17');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-17');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-18');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-18');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-19');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-19');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-20');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-20');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-21');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-21');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-22');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-22');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-23');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-23');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-24');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-24');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-25');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-25');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-26');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-26');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-27');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-27');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-28');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-28');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-29');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-29');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-30');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-30');
    INSERT INTO tasks (task_type, task_date) VALUES ('dieta', '2024-03-31');
    INSERT INTO tasks (task_type, task_date) VALUES ('treino', '2024-03-31');
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