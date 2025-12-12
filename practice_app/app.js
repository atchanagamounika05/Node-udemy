const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome page</title></head>");
    res.write(
      '<body><h1>welcome to the user page</h1><form action="/create-user" method="POST"><label>Username: </label><input type="text" name="username"><button type="submit">submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>users page</title></head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li><li>user4</li><li>user5</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });
    req.on("end", () => {
      const bufferData = Buffer.concat(body).toString();
      console.log(bufferData);
    });
    res.statusCode = "302";
    res.setHeader("Location", "/users");
    return res.end();
  }
});

server.listen("3000");
