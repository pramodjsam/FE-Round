const express = require("express");
//const connectDB = require("./config/db");
const ticketController = require("./controllers/ticketController");
const app = express();

//NOTE from Pramod Jacob Sam
//MONGODB is not connected because of the security issue as the same connection string
//has to be shared in order to access the database. Using the file based storing as of now.
//connectDB();

app.use(express.json());

app.use("/api/ticket", ticketController);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
