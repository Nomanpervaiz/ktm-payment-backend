import connectDB from "./db/index.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.js";
dotenv.config({
    path : "./env"
})
const app  = express()  

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send(new  Date())
})


connectDB()
.then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in connecting to the database:", error);
  });