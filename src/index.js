import express from "express";
import cors from "cors";
import mongoose from "mongoose";
//routes imports
import post from "./routes/post";

const app = express();

//config header
app.use(express.json());
app.use(cors());

//config const
const PORT = process.env.PORT || 8080;
const URI = `mongodb+srv://db_user:GHmn798@cluster0.zmpzx.mongodb.net/fullstack?authSource=admin&replicaSet=atlas-126yj6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;

//routes
post(app);

app.use("/", (req, res) => {
  res.json({
    Hola: "mundo",
  });
});

//connect to basedata
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`database conect and server run on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log("error: " + err);
  });
