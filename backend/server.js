const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
var axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var cors = require("cors");
app.use(cors());

connectDB();

app.use("/api/favorites", require("./routes/favoritesRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.post("/", (req, res) => {
  console.log("In Server");
  console.log(req.body);
  const { zip } = req.body;

  var config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?location=${zip}&categories=coffee&radius=20000`,
    headers: {
      Authorization:
        "Bearer nLmk3UwoqKF59IOutCGkgjSJQ4bo9Q9aJvW3zzFWDfKPRT0_K0oD5GAqLrqF4yhvzGnkyb4YTW7qgw_xGSEoULasxYxOBcEGxMoztuY6k9KSXz25lFFT4jkAtamKYnYx",
    },
  };

  axios(config)
    .then(function (response) {
      //const data = JSON.stringify(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
