import express from "express";
import { myUUID, something } from "my-ts-lib";

const app = express();

app.use(express.json());

app.get("/uuid", async (req, res) => {
  res.json(myUUID());
});

app.get("/", async (req, res) => {
  res.json(something());
});

const server = app.listen(3001, () =>
  console.log(`🚀 Server ready at: http://localhost:3001`)
);
