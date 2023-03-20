const { Router } = require("express");
const { GET, POST, PUT, DELETE } = require("../controller/controller.comments")

const comments = Router()

comments.get("/comments", GET);
comments.get("/comments/:id", GET);
comments.post("/comments", POST);
comments.put("/comments/:id", PUT);
comments.delete("/comments/:id", DELETE);


module.exports = {comments}