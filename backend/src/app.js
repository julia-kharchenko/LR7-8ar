import "express-async-errors";
import express from "express";
import userRouter from "./routes/user.route.js";
import connectToDB from "./db/mongo.db.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/v1/users", userRouter);

app.get("/hello", (req, res) => {
  res.send("Hello JS");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

const startServer = async () => {
  try {
    await connectToDB(MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

startServer();
