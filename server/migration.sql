DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name TEXT,
  planned integer,
  spent integer,
  isDiscretionary boolean
);

INSERT INTO categories(name, planned, spent, isDiscretionary) VALUES('Rent', 2700, 2700, false);
INSERT INTO categories(name, planned, spent, isDiscretionary) VALUES('Take-Out', 200, 150, true);
INSERT INTO categories(name, planned, spent, isDiscretionary) VALUES('Groceries', 1000, 1200, true);
INSERT INTO categories(name, planned, spent, isDiscretionary) VALUES('Streaming', 200, 175, true);
INSERT INTO categories(name, planned, spent, isDiscretionary) VALUES('Car Insurance', 100, 100, false);
