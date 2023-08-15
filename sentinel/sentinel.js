const express = require("express");
const path = require("path");

// specific route method
const sentinelRouter = express.Router();
sentinelRouter.get("/chamber.html", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "/public/assets/sentinel/chamber.html"));
});

  sentinelRouter.get("/cypher.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/sentinel/cypher.html"));
  });

  sentinelRouter.get("/killjoy.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/sentinel/killjoy.html"));
  });

  sentinelRouter.get("/sage.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/sentinel/sage.html"));
  });
  
module.exports = sentinelRouter;
// export default aboutRouter