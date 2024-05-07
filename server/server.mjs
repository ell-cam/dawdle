import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";


const PROTOCOL = 'http';
const PORT = 5050;
const ADDRESS = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// Add a route for the root path
app.get("/", (req, res) => {
  res.send("Server is connected");
});

// Start the Express server
const server = app.listen(PORT, ADDRESS, () => {
  console.log(`Server is running on ${PROTOCOL}://${ADDRESS}:${PORT}`);
});