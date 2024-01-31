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
  client
    .query(
      "UPDATE categories SET name = COALESCE($2, name), planned = COALESCE($3, planned), spent = COALESCE($4, spent), isdiscretionary = COALESCE($5, isdiscretionary) WHERE category_id = ($1)",
      [id, name, planned, spent, isDiscretionary]
    )
    .then(() => {
      res.sendStatus(200); // Success
    })
    .catch((error) => {
      console.error("Error updating category", error);
      res.status(500).send("Internal Server Error");
    });
});

app.delete("/api/categories/:id", (req, res, next) => {
  const { id } = req.params;
  client
    .query("DELETE FROM categories WHERE category_id = $1", [id])
    .then((data) => {
      console.log("Deleted succssfully:", data);
      res.status(200).send("Successfully removed Tech");
    })
    .catch((err) => {
      console.error("Error removing category:", err.stack);
      next(err);
    });
});

app.get("/*", (req, res, next) => {
  res.status(500).send("Bad Request- Not formatted correctly");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error- Something went wrong");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
