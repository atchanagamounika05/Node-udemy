const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
/* const routes = require("./routes"); */
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
/* const server = http.createServer(routes.handle); */

const app = express();

/* app.use("/", (req, res, next) => {
  console.log("runs always");
  next();
}); */

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

/* const server = http.createServer(app);

server.listen(3000); */

app.listen(3000);
