import exress from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = exress();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
