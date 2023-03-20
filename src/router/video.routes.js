const { Router } = require("express");
const { GET, POST, PUT, DELETE } = require("../controller/controller.video")

const videos = Router()

videos.get("/videos", GET);
videos.get("/videos/:id", GET);
videos.post("/videos", POST);
videos.put("/videos/:id", PUT);
videos.delete("/videos/:id", DELETE);


module.exports = {videos}