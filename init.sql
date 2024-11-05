-- init.sql

-- Create the "users" table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the "events" table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    totalSeats INTEGER NOT NULL CHECK (totalSeats > 0),
    availableSeats INTEGER NOT NULL CHECK (availableSeats >= 0),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the "reservations" table
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    reservedSeats INTEGER NOT NULL CHECK (reservedSeats > 0),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, event_id)
);

-- Indexes to improve query performance
CREATE INDEX idx_event_date ON events (date);
CREATE INDEX idx_user_email ON users (email);
