const express = require("express");
const path = require("path");

// specific route method
const initiatorRouter = express.Router();
initiatorRouter.get("/breach.html", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "/public/assets/initiator/breach.html"));
});

  initiatorRouter.get("/gekko.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/initiator/gekko.html"));
  });

  initiatorRouter.get("/kayo.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/initiator/kayo.html"));
  });

  initiatorRouter.get("/skye.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/initiator/skye.html"));
  });

  initiatorRouter.get("/sova.html", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "/public/assets/initiator/sova.html"));
  });
  
module.exports = initiatorRouter;
// export default aboutRouter