export async function initializeDatabase(database){
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS workouts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        workout_type TEXT NOT NULL,
        daytime TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS meals(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        daytime TEXT NOT NULL,
        date TEXT NOT NULL
    );
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-01', 'Cardio', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-01', 'Strength Training', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-02', 'Yoga', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-03', 'HIIT', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-03', 'Pilates', 'Night');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-04', 'Running', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-05', 'Cycling', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-06', 'Swimming', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-07', 'Boxing', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-08', 'Dance', 'Night');
    `)
    /*  CRIAR TAREFAS PARA MOSTRAR NO GRAFICO
       */
}