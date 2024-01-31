import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL, DATABASE_URL_LOCAL, NODE_ENV } = process.env;

const client = new pg.Client({
  connectionString:
    NODE_ENV === "production" ? DATABASE_URL : DATABASE_URL_LOCAL,
});

await client.connect();

const app = express();

app.use(express.json());

app.get("/api/categories", (req, res) => {
  client.query("SELECT * FROM categories").then((result) => {
    res.send(result.rows);
  });
});

app.post("/api/categories", (req, res) => {
  const { name, planned, spent, isDiscretionary } = req.body;
  const newCategory = req.body;
  if (
    !name ||
    !Number.isInteger(Number(planned)) ||
    !Number.isInteger(Number(spent))
  ) {
    res.status(400).send("Bad Request");
  }
  client
    .query(
      "INSERT INTO categories (name, planned, spent, isdiscretionary) VALUES ($1, $2, $3, $4)",
      [name, planned, spent, isDiscretionary]
    )
    .then((newCategory) => {
      console.log(newCategory);
      res.send([name, planned, spent, isDiscretionary]);
    })
    .catch((error) => {
      console.error("Error adding new category", error);
      res.status(500).send("Internal Server Error");
    });
});

app.patch("/api/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name, planned, spent, isDiscretionary } = req.body;
  client.query(
    "UPDATE categories SET name = COALESCE($2, name), planned = COALESCE($3, planned), spent = COALESCE($4, spent), isdicretionary = COALESCE($5, isdiscretionary) WHERE category_id = ($1)",
    [id, name, planned, spent, isDiscretionary]
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
