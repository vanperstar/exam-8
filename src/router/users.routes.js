const { Router } = require("express");
const { REG, GET, LOG, CHECK } = require("../controller/controller.users")

const users = Router()

users.get("/users", GET);
users.post("/register", REG);
users.post("/login", LOG);
users.get("/login", CHECK);


module.exports = {users}