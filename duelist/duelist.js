const express = require("express");
const path = require("path");

// specific route method
const duelistRouter = express.Router();
duelistRouter.get("/jett.html", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "/public/assets/duelist/jett.html"));
});

  duelistRouter.get("/neon.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/duelist/neon.html"));
  });

  duelistRouter.get("/pheonix.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/duelist/pheonix.html"));
  });

  duelistRouter.get("/raze.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/duelist/raze.html"));
  });

  duelistRouter.get("/yoru.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/duelist/yoru.html"));
  });
  
module.exports = duelistRouter;
// export default aboutRouter
