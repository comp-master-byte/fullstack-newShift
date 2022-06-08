create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
)

create TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    task_assigned_in DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)