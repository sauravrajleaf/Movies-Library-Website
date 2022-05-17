const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");

const app = express();

connectDB();
app.use(cors());
// initialising middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("hey there"));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/mylist", require("./routes/mylist"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
