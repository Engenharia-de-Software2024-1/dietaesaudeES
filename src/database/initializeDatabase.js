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
    CREATE TABLE IF NOT EXISTS goals(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        goal_type NOT NULL CHECK(goal_type IN ('meals','workouts')),
        day TEXT NOT NULL,
        value TEXT NOT NULL
    );
    `)
    /*  CRIAR TAREFAS PARA MOSTRAR NO GRAFICO
    
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-01', 'Cardio', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-01', 'Strength Training', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-02', 'Yoga', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-03', 'Swimming', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-04', 'Running', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-05', 'Cycling', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-06', 'Pilates', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-07', 'Hiking', 'Morning');

    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-08', 'Cardio', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-08', 'Strength Training', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-09', 'Yoga', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-10', 'Swimming', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-11', 'Running', 'Afternoon');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-12', 'Cycling', 'Morning');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-13', 'Pilates', 'Evening');
    INSERT INTO workouts (date, workout_type, daytime) VALUES ('2024-07-14', 'Hiking', 'Morning');

    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-01');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-01');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-01');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-02');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-02');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-02');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-03');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-03');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-03');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-04');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-04');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-04');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-05');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-05');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-05');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-06');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-06');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-06');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-07');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-07');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-07');

    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-08');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-08');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-08');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-09');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-09');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-09');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-10');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-10');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-10');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-11');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-11');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-11');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-12');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-12');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-12');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-13');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-13');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-13');
    INSERT INTO meals (daytime, date) VALUES ('Breakfast', '2024-07-14');
    INSERT INTO meals (daytime, date) VALUES ('Lunch', '2024-07-14');
    INSERT INTO meals (daytime, date) VALUES ('Dinner', '2024-07-14');
    */
}