
const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running at ${PORT}`)
})