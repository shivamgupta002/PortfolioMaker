import express from "express";
import cors from "cors";
import Connection from "./database/db.js";

const app = express();
app.use(cors());

const PORT=5000;

Connection();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
