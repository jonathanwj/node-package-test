import express from "express";
import { add } from "my-parcel-lib";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.json(add(2, 2));
});

const server = app.listen(3001, () =>
  console.log(`🚀 Server ready at: http://localhost:3001`)
);
