const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const data = require("./data/index");
const { generateToken } = require("./middleware");

server.post("/login", (req, res) => {
  const creds = {
    username: "Lambda",
    password: "School",
  };
  const { username, password } = req.body;
  if (username === creds.username && password === creds.password) {
    const token = generateToken(username);
    res.status(200).json({ message: "logged in", token });
  } else {
    res.status(403).json({ message: "Wrong username or password" });
  }
});

server.get("/products", (req, res) => {
  setTimeout(() => {
    res.status(200).json(data);
  }, 3000);
});

module.exports = server;
