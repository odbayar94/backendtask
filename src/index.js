//Standard
const express = require("express");
const app = express();

//My
const shortenObj = require("./routes/shorten");
const shortenDb = require("./routes/shortendb");
const home = require("./routes/home");
//DB
const connectDB = require("./config/db");
connectDB();

app.use(express.json());

//home page
app.use("/", home);

//api v1 is using dictionary obj in memory
app.use("/api/v1", shortenObj);

//api v1 is using dictionary obj in memory
app.use("/api/v2", shortenDb);

/*
1.
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"url":"https://google.com"}' \
  https://3c1u5.sse.codesandbox.io/<your-endpoint>

returns shortened url
*/

/*
2.
curl https://3c1u5.sse.codesandbox.io/<your-endpoint>

redirects to original url
*/

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080
