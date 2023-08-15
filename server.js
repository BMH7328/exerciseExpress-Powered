const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const controllerRouter = require("./controller/controller");
const duelistRouter = require("./duelist/duelist");
const initiatorRouter = require("./initiator/initiator");
const sentinelRouter = require("./sentinel/sentinel");

// Serve static files
// app.use(express.static('public'));

// Define other routes...
app.use("/assets/controller", controllerRouter);
app.use("/assets/duelist", duelistRouter);
app.use("/assets/initiator", initiatorRouter);
app.use("/assets/sentinel", sentinelRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  
// 404 middleware
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(5000, () => {
  console.log(`Server running on http://localhost:${port}`);
});