CREATE DATABASE cadastro

\c cadastro

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Julia Guarnieri', 'julia@email.com'),
    ('Luiza Costa', 'luiza@email.com'),
    ('Carla Mendes', 'carla@email.com'),
    ('Bruno Souza', 'bruno@email.com');
