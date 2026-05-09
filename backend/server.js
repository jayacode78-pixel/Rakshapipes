require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


//  MONGODB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected "))
  .catch((err) => console.log("MongoDB Error ", err));


//  ROUTES
app.use("/api/products", require("./routes/products"));
app.use("/api/upload", require("./routes/upload")); 
app.use("/api/contact", require("./routes/contact"));
app.use("/api/dealer", require("./routes/dealer"));
app.use("/api/distributor", require("./routes/distributor"));


app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});