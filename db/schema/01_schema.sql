-- Drop and recreate

DROP TABLE IF EXISTS sponsors
CASCADE;
DROP TABLE IF EXISTS mammals
CASCADE;
DROP TABLE IF EXISTS sponsors_mammals
CASCADE;
DROP TABLE IF EXISTS veterinarians
CASCADE;
DROP TABLE IF EXISTS events
CASCADE;
DROP TABLE IF EXISTS website_admins
CASCADE;
DROP TABLE IF EXISTS events_mammals
CASCADE;
DROP TABLE IF EXISTS events_sponsors
CASCADE;
DROP TABLE IF EXISTS events_veterinarians
CASCADE;


CREATE TABLE sponsors
(
  id SERIAL PRIMARY KEY NOT NULL,
  sponsor_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  -- sponsors_mammals_id INTEGER REFERENCES sponsors_mammals(mammals_id),
  email VARCHAR(255) NOT NULL
);

CREATE TABLE mammals
 (
  id SERIAL PRIMARY KEY NOT NULL,
  mammal_name VARCHAR(255) NOT NULL,
  -- sponsors_mammals_id INTEGER REFERENCES sponsors_mammals(sponsor_id),
  age INTEGER,
  weight DECIMAL(6,2),
  bio TEXT,
  date_admitted TIMESTAMPTZ NOT NULL,
  date_released TIMESTAMPTZ NOT NULL,
  profile_pic VARCHAR(255) NOT NULL,
  sponsored BOOLEAN DEFAULT FALSE
);

CREATE TABLE sponsors_mammals
(
  id SERIAL PRIMARY KEY NOT NULL,
  mammal_id INTEGER REFERENCES mammals(id) ON DELETE CASCADE,
  sponsor_id INTEGER REFERENCES sponsors(id) ON DELETE CASCADE
);

CREATE TABLE veterinarians
(
  id SERIAL PRIMARY KEY NOT NULL,
  staff_name VARCHAR(255) NOT NULL,
  bio TEXT,
  years_of_experience INTEGER,
  staff_img VARCHAR (255) NOT NULL
);

CREATE TABLE events
(
  id SERIAL PRIMARY KEY NOT NULL,
  location TEXT,
  date_time TIMESTAMPTZ NOT NULL,
  short_description TEXT,
  long_description TEXT,
  link VARCHAR(255),
  mammal_id INTEGER REFERENCES mammals(id),
  sponsor_id INTEGER REFERENCES sponsors(id),
  veterinarian_id INTEGER
);

CREATE TABLE website_admins
(
  id SERIAL PRIMARY KEY NOT NULL,
  admin_name VARCHAR(255) NOT NULL
);

CREATE TABLE events_mammals
(
  id SERIAL PRIMARY KEY NOT NULL,
  event_id INTEGER REFERENCES events(id),
  mammal_id INTEGER REFERENCES mammals(id)
);

CREATE TABLE events_sponsors
(
  id SERIAL PRIMARY KEY NOT NULL,
  event_id INTEGER REFERENCES events(id),
  sponsor_id INTEGER REFERENCES sponsors(id),
  website_admin_id INTEGER REFERENCES website_admins(id)
);

CREATE TABLE events_veterinarians
(
  id SERIAL PRIMARY KEY NOT NULL,
  event_id INTEGER REFERENCES events(id),
  veterinarian_id INTEGER REFERENCES veterinarians(id)
);
