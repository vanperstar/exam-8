const { Router } = require("express");
const { GET } = require("../controller/controller.categories")

const categories = Router()

categories.get("/categories", GET);
categories.get("/categories/:id", GET);


module.exports = {categories}
