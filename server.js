const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const path = require("path");

connectDB();
app.use(express.json({ extended: false }));
// app.get('/',(req,res)=>res.send('API RUNNING'));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

// app.use(express.static("client/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
